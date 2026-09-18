import { NextResponse } from "next/server";

export const runtime = "nodejs";

type GrowthRequest = {
  industry?: unknown;
  goal?: unknown;
  problem?: unknown;
};

type GrowthResponse = {
  summary: string;
  priorities: string[];
  quickWins: string[];
  nextStep: string;
};

const DEFAULT_MODEL = "gpt-5.6-luna";

/* =========================================================
   HELPERS
========================================================= */

function cleanText(
  value: unknown,
  maxLength: number
): string {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .replace(/\u0000/g, "")
    .trim()
    .slice(0, maxLength);
}

function cleanList(
  value: unknown,
  maxItems = 5
): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter(
      (item): item is string =>
        typeof item === "string"
    )
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, maxItems);
}

/* =========================================================
   EXTRACT TEXT FROM RESPONSES API
========================================================= */

function getOutputText(
  data: Record<string, unknown>
): string {
  /* Preferred output */
  if (
    typeof data.output_text === "string" &&
    data.output_text.trim()
  ) {
    return data.output_text.trim();
  }

  /* Fallback output structure */
  const output = data.output;

  if (!Array.isArray(output)) {
    return "";
  }

  const chunks: string[] = [];

  for (const item of output) {
    if (
      !item ||
      typeof item !== "object"
    ) {
      continue;
    }

    const outputItem =
      item as Record<string, unknown>;

    const content =
      outputItem.content;

    if (!Array.isArray(content)) {
      continue;
    }

    for (const contentItem of content) {
      if (
        !contentItem ||
        typeof contentItem !== "object"
      ) {
        continue;
      }

      const contentObject =
        contentItem as Record<string, unknown>;

      if (
        typeof contentObject.text ===
          "string" &&
        contentObject.text.trim()
      ) {
        chunks.push(
          contentObject.text.trim()
        );
      }
    }
  }

  return chunks.join("\n").trim();
}

/* =========================================================
   JSON PARSER
========================================================= */

function extractJson(
  text: string
): unknown {
  const cleaned = text
    .trim()
    .replace(
      /^```json\s*/i,
      ""
    )
    .replace(
      /^```\s*/i,
      ""
    )
    .replace(
      /\s*```$/i,
      ""
    )
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch {
    const firstBrace =
      cleaned.indexOf("{");

    const lastBrace =
      cleaned.lastIndexOf("}");

    if (
      firstBrace === -1 ||
      lastBrace === -1 ||
      lastBrace <= firstBrace
    ) {
      return null;
    }

    try {
      return JSON.parse(
        cleaned.slice(
          firstBrace,
          lastBrace + 1
        )
      );
    } catch {
      return null;
    }
  }
}

/* =========================================================
   RESPONSE VALIDATION
========================================================= */

function isGrowthResponse(
  value: unknown
): value is GrowthResponse {
  if (
    !value ||
    typeof value !== "object"
  ) {
    return false;
  }

  const result =
    value as Record<
      string,
      unknown
    >;

  return (
    typeof result.summary ===
      "string" &&
    Array.isArray(
      result.priorities
    ) &&
    Array.isArray(
      result.quickWins
    ) &&
    typeof result.nextStep ===
      "string"
  );
}

/* =========================================================
   FALLBACK
========================================================= */

function fallbackResponse(): GrowthResponse {
  return {
    summary:
      "Your marketing will become more useful when it is built around the right customers, a clear business goal and a smoother path from attention to enquiry or sale.",

    priorities: [
      "Get clearer about the customers you want to reach",
      "Improve the journey from first visit to enquiry or sale",
      "Measure which marketing activities are creating useful business",
    ],

    quickWins: [
      "Review your main website page and make the next action clearer",
      "Strengthen your main call to action",
      "Identify the marketing channel currently bringing the best opportunities",
    ],

    nextStep:
      "Review the complete customer journey and find the one place where a better marketing experience could make the biggest difference first.",
  };
}

/* =========================================================
   POST
========================================================= */

export async function POST(
  request: Request
) {
  try {
    const apiKey =
      process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "AI is not configured yet. Please add OPENAI_API_KEY to .env.local.",
        },
        {
          status: 503,
        }
      );
    }

    /* -----------------------------------------------------
       READ REQUEST
    ----------------------------------------------------- */

    let body: GrowthRequest;

    try {
      body =
        await request.json();
    } catch {
      return NextResponse.json(
        {
          error:
            "We could not understand the information you submitted.",
        },
        {
          status: 400,
        }
      );
    }

    /* -----------------------------------------------------
       CLEAN USER INPUT
    ----------------------------------------------------- */

    const business =
      cleanText(
        body.industry,
        120
      );

    const goal =
      cleanText(
        body.goal,
        160
      );

    const challenge =
      cleanText(
        body.problem,
        500
      );

    if (
      !business ||
      !goal ||
      !challenge
    ) {
      return NextResponse.json(
        {
          error:
            "Please tell us about your business, your goal and your main challenge.",
        },
        {
          status: 400,
        }
      );
    }

    /* -----------------------------------------------------
       MODEL
    ----------------------------------------------------- */

    const model =
      cleanText(
        process.env.DOWORK_AI_MODEL,
        100
      ) || DEFAULT_MODEL;

    /* =====================================================
       DOWORK SYSTEM INSTRUCTIONS
    ===================================================== */

    const instructions = `
You are the DOWORK Growth Advisor.

DOWORK is a digital marketing company that helps businesses
grow online through practical marketing strategy.

DOWORK works across:

SEO
Google Ads
Meta Ads
Social Media Marketing
Content Marketing
Website Marketing
Lead Generation
Conversion Improvement
Analytics
Marketing Automation
AI assisted marketing

Your job is to look at the business information provided by the
user and give them a useful starting point for improving their
digital marketing.

Write like an experienced human digital marketing strategist
talking directly to a business owner.

The response should feel natural, simple and useful.

IMPORTANT RULES:

1. Focus primarily on business growth and digital marketing.
2. Do not make AI the main subject.
3. AI can be mentioned only when it can genuinely help.
4. Do not use unnecessary technical language.
5. Do not invent business facts.
6. Do not invent traffic numbers.
7. Do not invent revenue numbers.
8. Do not invent leads.
9. Do not invent percentages.
10. Do not invent client results.
11. Never promise guaranteed results.
12. Do not pretend that you audited a website unless the user actually provided its data.
13. Give practical marketing advice.
14. Keep the writing natural and conversational.
15. Avoid corporate buzzwords.
16. Avoid robotic phrases.
17. Do not use em dash characters.
18. Do not use phrases such as "leveraging synergies".
19. Do not make the answer sound like a generic AI response.
20. Return the final answer as valid JSON.

The word JSON is intentionally included because the response must
be returned in JSON format.

Return exactly this JSON structure:

{
  "summary": "A natural explanation of what seems most important for the business.",
  "priorities": [
    "First important marketing priority",
    "Second important marketing priority",
    "Third important marketing priority"
  ],
  "quickWins": [
    "First practical improvement",
    "Second practical improvement",
    "Third practical improvement"
  ],
  "nextStep": "One clear and practical next action."
}

CONTENT RULES:

summary:
2 to 4 natural sentences.

priorities:
3 to 5 items.

quickWins:
3 to 5 items.

nextStep:
One practical sentence.

Do not include markdown.
Do not include headings outside the JSON.
Do not put JSON inside markdown code fences.
`;

    /* =====================================================
       USER INPUT
    ===================================================== */

    const userInput = `
Please analyse this business using the information below.
Return the answer as valid JSON.

Business:
${business}

Main goal:
${goal}

Main challenge:
${challenge}

Please keep the advice focused on practical digital marketing
and business growth.
`;

    /* =====================================================
       REQUEST TIMEOUT
    ===================================================== */

    const controller =
      new AbortController();

    const timeout =
      setTimeout(() => {
        controller.abort();
      }, 30000);

    try {
      /* ===================================================
         OPENAI REQUEST
      =================================================== */

      const response =
        await fetch(
          "https://api.openai.com/v1/responses",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",

              Authorization:
                `Bearer ${apiKey}`,
            },

            body: JSON.stringify({
              model,

              instructions,

              input:
                userInput,

              /*
                JSON mode requires the word "json"
                somewhere in the instructions/input.
                It is present above intentionally.
              */
              text: {
                format: {
                  type: "json_object",
                },
              },
            }),

            signal:
              controller.signal,

            cache:
              "no-store",
          }
        );

      /* =================================================
         RAW RESPONSE
      ================================================= */

      const rawText =
        await response.text();

      /* =================================================
         OPENAI ERROR
      ================================================= */

      if (!response.ok) {
        let errorMessage =
          "The AI service could not complete the request.";

        try {
          const errorData =
            JSON.parse(
              rawText
            );

          if (
            errorData?.error &&
            typeof errorData
              .error
              .message ===
              "string"
          ) {
            errorMessage =
              errorData.error.message;
          }
        } catch {
          // Keep safe generic message.
        }

        return NextResponse.json(
          {
            error:
              errorMessage,
          },
          {
            status:
              response.status >= 500
                ? 502
                : response.status,
          }
        );
      }

      /* =================================================
         PARSE RESPONSE
      ================================================= */

      let data:
        Record<
          string,
          unknown
        >;

      try {
        data =
          JSON.parse(
            rawText
          );
      } catch {
        return NextResponse.json(
          {
            error:
              "The AI service returned an unreadable response.",
          },
          {
            status: 502,
          }
        );
      }

      /* =================================================
         GET GENERATED TEXT
      ================================================= */

      const outputText =
        getOutputText(
          data
        );

      if (!outputText) {
        return NextResponse.json(
          {
            error:
              "The AI service returned no usable text. Please try again.",
          },
          {
            status: 502,
          }
        );
      }

      /* =================================================
         PARSE JSON
      ================================================= */

      const parsed =
        extractJson(
          outputText
        );

      /* =================================================
         VALIDATE STRUCTURE
      ================================================= */

      if (
        !isGrowthResponse(
          parsed
        )
      ) {
        return NextResponse.json(
          {
            ...fallbackResponse(),
            generated: false,
          }
        );
      }

      /* =================================================
         CLEAN FINAL RESULT
      ================================================= */

      const result:
        GrowthResponse = {
        summary:
          cleanText(
            parsed.summary,
            600
          ),

        priorities:
          cleanList(
            parsed.priorities,
            5
          ),

        quickWins:
          cleanList(
            parsed.quickWins,
            5
          ),

        nextStep:
          cleanText(
            parsed.nextStep,
            350
          ),
      };

      /* =================================================
         CHECK RESULT
      ================================================= */

      if (
        !result.summary ||
        result.priorities.length ===
          0 ||
        result.quickWins.length ===
          0 ||
        !result.nextStep
      ) {
        return NextResponse.json(
          {
            ...fallbackResponse(),
            generated: false,
          }
        );
      }

      /* =================================================
         SUCCESS
      ================================================= */

      return NextResponse.json({
        ...result,
        generated: true,
      });
    } finally {
      clearTimeout(
        timeout
      );
    }
  } catch (error) {
    const isTimeout =
      error instanceof Error &&
      error.name ===
        "AbortError";

    return NextResponse.json(
      {
        error: isTimeout
          ? "The AI took too long to respond. Please try again."
          : "Something went wrong while creating your growth ideas.",
      },
      {
        status: 500,
      }
    );
  }
}