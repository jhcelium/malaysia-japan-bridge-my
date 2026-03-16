import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { pageTitle, definedTermSetJsonLd } from "../lib/seo";

const ABOUT_TERMS_JSONLD = definedTermSetJsonLd(
  "Bridge Model Operations",
  [
    {
      term: "Business Bridge",
      description:
        "An operational function on the Japan side that translates a Malaysian exporter's offer into structured introductions, follow-up cadence, and relationship continuity with Japanese distributors.",
    },
    {
      term: "Follow-up Cadence",
      description:
        "A scheduled post-meeting contact programme maintained by a Japan-based coordinator—response management, next-step documentation, and proactive relationship upkeep.",
    },
    {
      term: "Entry Framing",
      description:
        "The scoping stage that sets offer positioning, target channel, and compliance constraints before Japan-side partner outreach begins.",
    },
  ],
);

const DELIVERABLES = [
  {
    title: "Entry Brief",
    body: "A written summary of your positioning, target channel assumptions, and key constraints—agreed before any partner outreach begins.",
  },
  {
    title: "Partner Shortlist",
    body: "3–5 distributor or trading company candidates pre-screened for category fit, channel coverage, and willingness to engage with new overseas suppliers.",
  },
  {
    title: "Outreach + Meeting Setup",
    body: "Briefing materials prepared, introductions made, and meetings arranged. Status tracked in an outreach log shared with your team.",
  },
  {
    title: "Follow-up System",
    body: "Post-introduction cadence: next-step documentation, response management, and a decision memo after each significant interaction.",
  },
];

const DIFFERENTIATORS = [
  {
    label: "Not a consultant list",
    body: "We do not provide advice and step back. We manage the Japan-side execution until there is a clear next commercial step.",
  },
  {
    label: "Not a translation service",
    body: "Language is part of the work, but the core function is relationship continuity—keeping conversations from going silent after first contact.",
  },
  {
    label: "Not a trade directory",
    body: "We do not send you a list of distributors. We identify, qualify, approach, and introduce specific candidates for your product and channel.",
  },
  {
    label: "Not remote-only",
    body: "Coordination is Japan-based. Distributor visits, trade show attendance, and in-person follow-up are part of the model when relevant.",
  },
];

export default function About() {
  const title = pageTitle("About the Malaysia–Japan Business Bridge");
  const description =
    "How the Malaysia–Japan business bridge works in operational terms: NeoiDigital connects Malaysian exporters with Japan-side distributors, manages compliance framing, and maintains follow-up after first contact.";

  return (
    <>
      <SEOHead path="/about" title={title} description={description} extraJsonLd={[ABOUT_TERMS_JSONLD]} />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        {/* Page header */}
        <section className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            About
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            How the Malaysia–Japan Business Bridge Works
          </h1>
          <p className="text-base text-neutral-600 leading-relaxed lead-paragraph">
            {siteConfig.primaryIntent}
          </p>
        </section>

        {/* The bridge concept */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            The Bridge Concept
          </h2>
          <div className="max-w-2xl space-y-4 text-sm text-neutral-700 leading-relaxed">
            <p>
              A business bridge between Malaysia and Japan is not a broker
              arrangement. It is an operational function: someone on the Japan
              side who understands the Malaysian exporter's offer and can
              represent it accurately to distributors, answer follow-up
              questions in real time, and keep the relationship from going
              quiet.
            </p>
            <p>
              Malaysia-to-Japan export conversations typically stall after first
              contact. The reasons are consistent: time zone gaps, communication
              style differences, unclear next steps, and no one on the Japan
              side maintaining momentum. The bridge model addresses this
              directly.
            </p>
            <p>
              Context matters on both sides. The Malaysian exporter brings
              product knowledge, pricing, and certifications. The Japan-side
              coordinator brings channel knowledge, distributor relationships,
              and cultural fluency. Neither side can fully substitute for the
              other.
            </p>
          </div>
        </section>

        {/* Who we help */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            Who We Help
          </h2>
          <div className="max-w-2xl space-y-4 text-sm text-neutral-700 leading-relaxed">
            <p>
              We work with Malaysian SMEs and exporters who have a product ready
              for Japan and need structured support on the Japan side—not
              feasibility research or generic market reports.
            </p>
            <p>
              Common categories: food and beverage (including halal products),
              health and wellness, consumer goods, and industrial components. We
              confirm category fit during the initial qualification call.
            </p>
            <p>
              We also work with ASEAN-based companies using the Malaysia–Japan
              corridor as their first entry into a developed B2B market.
            </p>
          </div>
        </section>

        {/* What makes this different */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            How This Differs from Generic Consultants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DIFFERENTIATORS.map((item) => (
              <div key={item.label} className="border-l-2 border-neutral-200 pl-4">
                <p className="text-sm font-semibold text-neutral-900 mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What we deliver */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            What We Deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DELIVERABLES.map((item) => (
              <div key={item.title} className="border border-neutral-200 p-5">
                <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Trust and follow-up */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            Why Trust and Follow-up Are the Core Variables
          </h2>
          <div className="max-w-2xl space-y-4 text-sm text-neutral-700 leading-relaxed">
            <p>
              In Japan B2B, the first meeting rarely decides anything. Trust is
              built through consistent follow-through: timely responses, meeting
              documentation, and the same point of contact across interactions.
            </p>
            <p>
              Most Malaysia–Japan expansion attempts fail not at the product
              evaluation stage but at the follow-up stage. The distributor
              expresses interest, receives a sample, and then hears nothing for
              three weeks. The relationship cools. A Japan-based coordinator
              prevents this by maintaining the cadence without waiting for the
              Malaysian team to prompt it.
            </p>
            <p>
              This is the operational case for a bridge model. It is not about
              cultural sensitivity training. It is about accountability and
              continuity on the Japan side.
            </p>
          </div>
        </section>

        {/* Where we operate */}
        {siteConfig.localPresence && (
          <section className="border-t border-neutral-200 pt-10">
            <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
              Where We Operate
            </h2>
            <div className="max-w-2xl space-y-4 text-sm text-neutral-700 leading-relaxed">
              <p>
                Japan-side coordination is based in{" "}
                <strong className="text-neutral-900">Osaka, Japan</strong> — a
                central commercial hub with direct access to Tokyo, Nagoya, and
                key distribution networks across western Japan.
              </p>
              <p>
                Osaka-based coordination means distributor visits, trade show
                attendance, and in-person follow-up are practical, not
                exceptional. Clients do not need to relocate or establish a
                Japan entity to maintain active relationships.
              </p>
            </div>
          </section>
        )}

        {/* Hub link */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            Part of NeoiDigital Japan Market Hub
          </h2>
          <p className="text-sm text-neutral-600 mb-5 max-w-xl leading-relaxed">
            This site is one node in a broader set of Japan market entry
            resources for Malaysian companies. The hub aggregates tools, guides,
            and consulting pathways across the full export journey.
          </p>
          <a
            href={siteConfig.hubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-neutral-900 text-neutral-900 text-sm px-4 py-2 hover:bg-neutral-900 hover:text-white"
          >
            Visit Japan Market Hub →
          </a>
        </section>

        {/* Internal link to Home */}
        <section className="border-t border-neutral-200 pt-10">
          <p className="text-sm text-neutral-500 mb-2">
            See how the bridge is structured in practice:
          </p>
          <Link
            to="/"
            className="text-sm text-neutral-700 font-medium underline underline-offset-2 hover:text-neutral-900"
          >
            ← Back to the Malaysia–Japan Bridge overview
          </Link>
        </section>

        {/* CTA */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Start with a direct conversation.
            </h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              We review your product and situation before recommending any
              specific path. Tell us what you are working with.
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}
