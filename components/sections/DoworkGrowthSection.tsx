"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  MessageCircle,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { FormEvent, useState } from "react";

type AIResponse = {
  summary?: string;
  priorities?: string[];
  quickWins?: string[];
  nextStep?: string;
};

const growthAreas = [
  {
    icon: Search,
    title: "Get Found",
    text: "We help your business appear where your customers are already looking.",
  },
  {
    icon: Users,
    title: "Get Attention",
    text: "We create content and campaigns that make more people notice your brand.",
  },
  {
    icon: Target,
    title: "Get Customers",
    text: "We turn interest into real enquiries, sales and business opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Keep Growing",
    text: "We study what is working and improve your marketing as your business grows.",
  },
];

const marketingServices = [
  "Search Engine Optimisation",
  "Google and Meta Advertising",
  "Social Media Marketing",
  "Content Marketing",
  "Website and Landing Page Optimisation",
  "Lead Generation",
];

const processSteps = [
  {
    number: "01",
    title: "Understand your business",
    text: "We first understand your goals, customers and current marketing.",
  },
  {
    number: "02",
    title: "Find the opportunity",
    text: "We identify what is holding your growth back and where to focus.",
  },
  {
    number: "03",
    title: "Build the strategy",
    text: "We create a practical digital marketing plan around your business.",
  },
  {
    number: "04",
    title: "Improve every month",
    text: "We track the response and keep improving the work with real data.",
  },
];

function cleanList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];

  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 5);
}

export default function DoworkGrowthSection() {
  const [business, setBusiness] = useState("");
  const [goal, setGoal] = useState("");
  const [challenge, setChallenge] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<AIResponse | null>(null);

  async function handleAnalysis(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanBusiness = business.trim();
    const cleanGoal = goal.trim();
    const cleanChallenge = challenge.trim();

    if (!cleanBusiness || !cleanGoal || !cleanChallenge) {
      setError(
        "Please tell us about your business, your goal and the main challenge."
      );
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/ai-growth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          industry: cleanBusiness,
          goal: cleanGoal,
          problem: cleanChallenge,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          typeof data?.error === "string"
            ? data.error
            : "We could not create your growth plan right now."
        );
      }

      setResult({
        summary:
          typeof data?.summary === "string" ? data.summary.trim() : "",
        priorities: cleanList(data?.priorities),
        quickWins: cleanList(data?.quickWins),
        nextStep:
          typeof data?.nextStep === "string"
            ? data.nextStep.trim()
            : "",
      });
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  function resetAnalysis() {
    setBusiness("");
    setGoal("");
    setChallenge("");
    setResult(null);
    setError("");
  }

  return (
    <section
      id="growth"
      className="dw-ai-growth-section"
      aria-labelledby="dw-ai-growth-title"
    >
      <div className="dw-ai-growth-section__shell">

        {/* =====================================================
            MAIN INTRO
        ===================================================== */}

        <div className="dw-ai-growth-section__intro">

          <div className="dw-ai-growth-section__intro-copy">

            <div className="dw-ai-growth-section__kicker">
              <span className="dw-ai-growth-section__kicker-dot" />
              DIGITAL MARKETING FOR BUSINESS GROWTH
            </div>

            <h2
              id="dw-ai-growth-title"
              className="dw-ai-growth-section__title"
            >
              We help
              <span>businesses grow.</span>
            </h2>

            <p className="dw-ai-growth-section__lead">
              Good marketing should do more than bring people to your
              website. It should help your business get noticed, build
              trust, bring in customers and grow with confidence.
            </p>

            <p className="dw-ai-growth-section__lead dw-ai-growth-section__lead--small">
              That is what we work on at DOWORK. We bring strategy,
              digital marketing, creativity and smart technology together
              to help your business move forward.
            </p>

            <div className="dw-ai-growth-section__actions">
              <a
                href="#ai-growth-copilot"
                className="dw-ai-growth-section__button dw-ai-growth-section__button--primary"
              >
                See what can improve
                <ArrowUpRight size={17} strokeWidth={1.8} />
              </a>

              <a
                href="/services/"
                className="dw-ai-growth-section__text-link"
              >
                Explore our marketing services
                <ChevronRight size={17} strokeWidth={1.8} />
              </a>
            </div>

          </div>


          {/* =================================================
              VISUAL
          ================================================= */}

          <div className="dw-ai-growth-section__visual-wrap">

            <div className="dw-ai-growth-section__visual-glow" />

            <div className="dw-ai-growth-section__visual-card">

              <div className="dw-ai-growth-section__visual-topline">
                <span>HOW WE HELP BUSINESSES GROW</span>

                <span className="dw-ai-growth-section__live">
                  <span />
                  DOWORK
                </span>
              </div>

              <div className="dw-ai-growth-section__visual-media">

                <Image
                  src="/images/dowork-growth-team.png"
                  alt="DOWORK team working on digital marketing and business growth"
                  width={1100}
                  height={900}
                  className="dw-ai-growth-section__image"
                />

                <div className="dw-ai-growth-section__signal dw-ai-growth-section__signal--one">
                  <Search size={17} />

                  <div>
                    <strong>More Visibility</strong>
                    <span>Be found by the right people</span>
                  </div>
                </div>

                <div className="dw-ai-growth-section__signal dw-ai-growth-section__signal--two">
                  <Users size={17} />

                  <div>
                    <strong>More Customers</strong>
                    <span>Turn attention into enquiries</span>
                  </div>
                </div>

                <div className="dw-ai-growth-section__signal dw-ai-growth-section__signal--three">
                  <BarChart3 size={17} />

                  <div>
                    <strong>Better Growth</strong>
                    <span>Improve what actually works</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


        {/* =====================================================
            GROWTH OUTCOMES
        ===================================================== */}

        <div className="dw-ai-growth-section__capabilities">

          <div className="dw-ai-growth-section__section-heading">

            <div>
              <div className="dw-ai-growth-section__mini-label">
                WHAT WE WORK ON
              </div>

              <h3>
                Marketing that helps your business
                <span>move forward.</span>
              </h3>
            </div>

            <p>
              We focus on the things that matter to a growing business.
              More visibility, more attention, more customers and better
              results over time.
            </p>

          </div>


          <div className="dw-ai-growth-section__capability-grid">
            {growthAreas.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="dw-ai-growth-section__capability"
                >
                  <div className="dw-ai-growth-section__capability-icon">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <h4>{item.title}</h4>

                  <p>{item.text}</p>

                  <div className="dw-ai-growth-section__capability-arrow">
                    <ArrowUpRight size={17} strokeWidth={1.7} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>


        {/* =====================================================
            DIGITAL MARKETING
        ===================================================== */}

        <div className="dw-ai-growth-section__marketing">

          <div className="dw-ai-growth-section__marketing-copy">

            <div className="dw-ai-growth-section__mini-label">
              DIGITAL MARKETING
            </div>

            <h3>
              Everything your business needs
              <span>to grow online.</span>
            </h3>

            <p>
              We do not believe in doing marketing just for the sake of
              staying active. Every channel has a job, and every piece of
              work should support your business goal.
            </p>

            <a
              href="/services/"
              className="dw-ai-growth-section__button dw-ai-growth-section__button--dark"
            >
              Explore our services
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </a>

          </div>


          <div className="dw-ai-growth-section__marketing-list">

            {marketingServices.map((service, index) => (
              <div
                key={service}
                className="dw-ai-growth-section__marketing-item"
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{service}</strong>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.6}
                />
              </div>
            ))}

          </div>

        </div>


        {/* =====================================================
            SMART TECHNOLOGY
        ===================================================== */}

        <div className="dw-ai-growth-section__smart">

          <div className="dw-ai-growth-section__smart-visual">

            <div className="dw-ai-growth-section__smart-ring smart-ring-one" />
            <div className="dw-ai-growth-section__smart-ring smart-ring-two" />
            <div className="dw-ai-growth-section__smart-ring smart-ring-three" />

            <div className="dw-ai-growth-section__smart-core">
              <Sparkles size={30} strokeWidth={1.4} />
              <span>DOWORK</span>
              <strong>SMART MARKETING</strong>
            </div>

          </div>


          <div className="dw-ai-growth-section__smart-copy">

            <div className="dw-ai-growth-section__mini-label">
              SMARTER WAYS OF WORKING
            </div>

            <h3>
              We use AI and technology
              <span>to make good marketing work harder.</span>
            </h3>

            <p>
              AI helps us research faster, understand information better,
              create more efficiently and find useful opportunities.
              But the strategy always starts with your business and your
              customers.
            </p>

            <div className="dw-ai-growth-section__smart-points">

              <div>
                <Check size={16} />
                Better research
              </div>

              <div>
                <Check size={16} />
                Faster content work
              </div>

              <div>
                <Check size={16} />
                Smarter reporting
              </div>

              <div>
                <Check size={16} />
                Better marketing decisions
              </div>

            </div>

          </div>
        </div>


        {/* =====================================================
            GROWTH PROCESS
        ===================================================== */}

        <div className="dw-ai-growth-section__system">

          <div className="dw-ai-growth-section__system-panel">

            <div className="dw-ai-growth-section__mini-label">
              HOW WE WORK
            </div>

            <h3>
              Simple thinking.
              <span>Clear marketing.</span>
            </h3>

            <p>
              We keep the process practical. First we understand your
              business, then we decide what matters most and build the
              marketing around it.
            </p>

            <div className="dw-ai-growth-section__process">

              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="dw-ai-growth-section__process-item"
                >
                  <div className="dw-ai-growth-section__process-number">
                    {step.number}
                  </div>

                  <div>
                    <strong>{step.title}</strong>
                    <span>{step.text}</span>
                  </div>
                </div>
              ))}

            </div>
          </div>


          <div className="dw-ai-growth-section__system-visual">

            <div className="dw-ai-growth-section__growth-circle">

              <div className="dw-ai-growth-section__growth-center">
                <TrendingUp size={30} strokeWidth={1.4} />
                <strong>GROWTH</strong>
                <span>STEP BY STEP</span>
              </div>

              <div className="dw-ai-growth-section__growth-dot growth-dot-one" />
              <div className="dw-ai-growth-section__growth-dot growth-dot-two" />
              <div className="dw-ai-growth-section__growth-dot growth-dot-three" />
              <div className="dw-ai-growth-section__growth-dot growth-dot-four" />

            </div>

          </div>
        </div>


        {/* =====================================================
            AI GROWTH COPILOT
        ===================================================== */}

        <div
          id="ai-growth-copilot"
          className="dw-ai-growth-section__copilot"
        >

          <div className="dw-ai-growth-section__copilot-header">

            <div>

              <div className="dw-ai-growth-section__mini-label">
                A LITTLE HELP FROM AI
              </div>

              <h3>
                Tell us where your business is today.
                <span>We will help you think about what comes next.</span>
              </h3>

            </div>

            <div className="dw-ai-growth-section__copilot-badge">
              <Sparkles size={15} strokeWidth={1.7} />
              DOWORK AI
            </div>

          </div>


          <div className="dw-ai-growth-section__copilot-grid">

            <div className="dw-ai-growth-section__copilot-form-wrap">

              <div className="dw-ai-growth-section__copilot-intro">

                <MessageCircle
                  size={20}
                  strokeWidth={1.6}
                />

                <p>
                  Share a few simple details about your business.
                  The AI will help you identify where your marketing
                  could focus first.
                </p>

              </div>


              <form
                onSubmit={handleAnalysis}
                className="dw-ai-growth-section__copilot-form"
              >

                <label>
                  <span>Tell us about your business</span>

                  <input
                    type="text"
                    value={business}
                    onChange={(event) =>
                      setBusiness(event.target.value)
                    }
                    placeholder="For example, a local service business"
                    maxLength={120}
                    autoComplete="organization"
                  />
                </label>


                <label>
                  <span>What do you want to achieve?</span>

                  <input
                    type="text"
                    value={goal}
                    onChange={(event) =>
                      setGoal(event.target.value)
                    }
                    placeholder="For example, get more enquiries"
                    maxLength={160}
                  />
                </label>


                <label>
                  <span>What feels difficult right now?</span>

                  <textarea
                    value={challenge}
                    onChange={(event) =>
                      setChallenge(event.target.value)
                    }
                    placeholder="For example, people visit our website but do not contact us"
                    rows={5}
                    maxLength={500}
                  />
                </label>


                {error ? (
                  <div className="dw-ai-growth-section__copilot-error">
                    {error}
                  </div>
                ) : null}


                <div className="dw-ai-growth-section__copilot-form-footer">

                  <button
                    type="submit"
                    disabled={loading}
                    className="dw-ai-growth-section__button dw-ai-growth-section__button--primary"
                  >
                    {loading ? (
                      <>
                        <span className="dw-ai-growth-section__spinner" />
                        Thinking about your growth
                      </>
                    ) : (
                      <>
                        <Zap
                          size={16}
                          fill="currentColor"
                          strokeWidth={1.5}
                        />
                        Get a Growth Starting Point
                      </>
                    )}
                  </button>


                  {result ? (
                    <button
                      type="button"
                      onClick={resetAnalysis}
                      className="dw-ai-growth-section__reset"
                    >
                      Start again
                    </button>
                  ) : null}

                </div>

              </form>
            </div>


            <div className="dw-ai-growth-section__copilot-result">

              {!result && !loading ? (
                <div className="dw-ai-growth-section__empty-state">

                  <div className="dw-ai-growth-section__empty-icon">
                    <Sparkles
                      size={27}
                      strokeWidth={1.4}
                    />
                  </div>

                  <strong>
                    Your growth ideas will appear here.
                  </strong>

                  <p>
                    Give us a little context and the DOWORK AI
                    Growth Copilot will give you a useful starting point.
                  </p>

                </div>
              ) : null}


              {loading ? (
                <div className="dw-ai-growth-section__loading-state">

                  <div className="dw-ai-growth-section__loading-orb">
                    <Sparkles
                      size={28}
                      strokeWidth={1.4}
                    />
                  </div>

                  <strong>
                    Looking at your growth challenge
                  </strong>

                  <p>
                    We are putting together a practical starting point
                    for your marketing.
                  </p>

                </div>
              ) : null}


              {result ? (
                <div className="dw-ai-growth-section__result">

                  <div className="dw-ai-growth-section__result-heading">

                    <div>
                      <span>YOUR DOWORK GROWTH STARTING POINT</span>
                      <strong>
                        A practical place to begin
                      </strong>
                    </div>

                    <div className="dw-ai-growth-section__result-status">
                      <span />
                      READY
                    </div>

                  </div>


                  {result.summary ? (
                    <div className="dw-ai-growth-section__result-summary">

                      <span>WHAT WE SEE</span>

                      <p>{result.summary}</p>

                    </div>
                  ) : null}


                  {result.priorities?.length ? (
                    <div className="dw-ai-growth-section__result-block">

                      <div className="dw-ai-growth-section__result-block-title">
                        <Target size={17} />
                        WHERE TO FOCUS
                      </div>

                      <div className="dw-ai-growth-section__result-list">

                        {result.priorities.map((item, index) => (
                          <div
                            key={`${item}-${index}`}
                            className="dw-ai-growth-section__result-list-item"
                          >
                            <Check
                              size={15}
                              strokeWidth={2}
                            />

                            <span>{item}</span>
                          </div>
                        ))}

                      </div>

                    </div>
                  ) : null}


                  {result.quickWins?.length ? (
                    <div className="dw-ai-growth-section__result-block">

                      <div className="dw-ai-growth-section__result-block-title">
                        <Zap size={17} />
                        WHAT YOU CAN IMPROVE FIRST
                      </div>

                      <div className="dw-ai-growth-section__result-list">

                        {result.quickWins.map((item, index) => (
                          <div
                            key={`${item}-${index}`}
                            className="dw-ai-growth-section__result-list-item"
                          >
                            <Check
                              size={15}
                              strokeWidth={2}
                            />

                            <span>{item}</span>
                          </div>
                        ))}

                      </div>

                    </div>
                  ) : null}


                  {result.nextStep ? (
                    <div className="dw-ai-growth-section__next-step">

                      <span>A GOOD NEXT STEP</span>

                      <p>{result.nextStep}</p>

                    </div>
                  ) : null}

                </div>
              ) : null}

            </div>
          </div>
        </div>


        {/* =====================================================
            FINAL MESSAGE
        ===================================================== */}

        <div className="dw-ai-growth-section__bottom-cta">

          <div>

            <div className="dw-ai-growth-section__mini-label">
              YOUR BUSINESS. YOUR GOALS. YOUR GROWTH.
            </div>

            <h3>
              Let us build marketing
              <span>that actually helps your business.</span>
            </h3>

          </div>

          <a
            href="#contact"
            className="dw-ai-growth-section__button dw-ai-growth-section__button--light"
          >
            Talk to DOWORK
            <ArrowUpRight size={17} strokeWidth={1.8} />
          </a>

        </div>

      </div>
    </section>
  );
}