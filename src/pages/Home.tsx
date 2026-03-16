import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import KeywordBlock from "../components/KeywordBlock";
import { siteConfig } from "../content/site.config";
import { pageTitle } from "../lib/seo";

const HOME_FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a Malaysia–Japan business bridge actually do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Malaysia–Japan business bridge translates your export intent into Japan-side action: identifying the right distributor or buyer category, making structured introductions, and maintaining follow-up cadence so conversations do not stall after first contact.",
      },
    },
    {
      "@type": "Question",
      name: "How do you approach halal export to Japan from Malaysia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Halal export to Japan from Malaysia requires checking which halal certification bodies your target buyers recognise, preparing compliant documentation early, and selecting distributors with halal product handling experience. Not all Japanese distributors are set up for halal categories.",
      },
    },
    {
      "@type": "Question",
      name: "How do you find the right Japan-side distributor or trading company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We start with category fit—not all distributors handle all product types. We then screen for channel coverage, financial stability, and willingness to work with new overseas suppliers. Introductions are made only after pre-qualification.",
      },
    },
  ],
};

const HOW_WE_WORK = [
  {
    step: "1",
    title: "Entry Framing",
    body: "We clarify your offer, target channel, and key constraints. This sets the scope before any outreach begins.",
  },
  {
    step: "2",
    title: "Partner Mapping",
    body: "We identify distributor and trading company categories that match your product and channel requirements.",
  },
  {
    step: "3",
    title: "Outreach + Introduction",
    body: "We prepare briefing materials and set up qualified introductory meetings. No cold lists.",
  },
  {
    step: "4",
    title: "Follow-up System",
    body: "We document next steps, maintain contact cadence, and reduce the drop-off that typically follows first introductions.",
  },
];

const HOME_FAQ_PREVIEW = [
  {
    question: "What does a Malaysia–Japan business bridge actually do?",
    answer:
      "A Malaysia–Japan business bridge translates your export intent into Japan-side action: identifying the right distributor or buyer category, making structured introductions, and maintaining follow-up cadence so conversations do not stall after first contact.",
  },
  {
    question: "How do you approach halal export to Japan from Malaysia?",
    answer:
      "Halal export to Japan from Malaysia requires checking which halal certification bodies your target buyers recognise, preparing compliant documentation early, and selecting distributors with halal product handling experience. Not all Japanese distributors are set up for halal categories.",
  },
  {
    question: "How do you find the right Japan-side distributor or trading company?",
    answer:
      "We start with category fit—not all distributors handle all product types. We then screen for channel coverage, financial stability, and willingness to work with new overseas suppliers. Introductions are made only after pre-qualification.",
  },
];

export default function Home() {
  const title = pageTitle();
  const description =
    "NeoiDigital provides a Malaysia–Japan business bridge for Malaysian exporters: entry planning, partner outreach, and Osaka-based follow-up. Malaysia to Japan market entry support without building a local team.";

  return (
    <>
      <SEOHead path="/" title={title} description={description} />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(HOME_FAQ_JSONLD)}
        </script>
      </Helmet>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* A — Hero */}
        <section className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            {siteConfig.domain}
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            Malaysia–Japan Business Bridge
          </h1>
          <p className="text-sm text-neutral-600 leading-relaxed mb-8">
            NeoiDigital provides a malaysia japan business bridge for exporters
            who need Japan-side structure, partner outreach, and
            follow-up—without building a local team.
          </p>
          <div className="flex flex-wrap gap-3">
            <CTA />
            <a
              href={siteConfig.hubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-neutral-300 text-neutral-700 text-sm font-medium px-6 py-3 hover:border-neutral-600 hover:text-neutral-900"
            >
              Japan Market Hub →
            </a>
          </div>
        </section>

        {/* B — What a Malaysia–Japan Business Bridge Means */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-6">
            What a Malaysia–Japan Business Bridge Means
          </h2>
          <ul className="space-y-3 text-sm text-neutral-700 leading-relaxed">
            {[
              "The malaysia japan business bridge for exporters is an operational layer: distributor identification, introduction structure, and follow-up discipline managed from the Japan side.",
              "It reduces the drop-off that follows first contact—where most Malaysia–Japan business conversations stall before reaching a commercial discussion.",
              "It aligns compliance requirements, channel selection, and relationship cadence before outreach begins, not after.",
              "It is not a sales agency or a trade directory. It is coordination discipline applied to a specific trade corridor.",
              "The bridge model assumes the Malaysian side knows its product. The japan side needs structure to receive, evaluate, and advance it.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* C — When This Model Fits */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3">
            When This Model Fits
          </h2>
          <p className="text-sm text-neutral-500 mb-5">
            This is a malaysia to japan market entry service for exporters who already have a product ready and need Japan-side execution—not feasibility research.
          </p>
          <ul className="space-y-3 text-sm text-neutral-700 leading-relaxed">
            {[
              "You have product interest from Japan but no confirmed distribution path.",
              "Conversations stall after a first introduction and do not progress.",
              "Compliance or labelling questions are blocking distributor discussions.",
              "Trade show leads from FOODEX or similar exhibitions did not convert.",
              "You need Osaka-based follow-up to maintain momentum without relocating.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* D — How We Work */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-8">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {HOW_WE_WORK.map((item) => (
              <div key={item.step}>
                <p className="text-xs font-semibold text-neutral-400 mb-2">
                  Step {item.step}
                </p>
                <p className="text-sm font-semibold text-neutral-900 mb-1">
                  {item.title}
                </p>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* E — Halal Products: Practical Path to Japan */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">
            Halal Products: Practical Path to Japan
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed max-w-3xl">
            Japan market entry for malaysian halal products requires preparation
            beyond obtaining a certification. Japan does not have a single
            national halal standard, and buyer expectations vary by
            channel—convenience retail, supermarket, food service, and specialty
            importers each recognise different bodies and apply different
            standards. For halal export to japan from malaysia, documentation
            and product claims must be reviewed before distributor meetings, not
            after. The halal certification bodies that Japanese distributors
            recognise differ from those common in Malaysia, so early
            verification avoids late-stage setbacks. Partner selection for halal
            products also differs from general food and beverage: not all
            F&amp;B distributors have the operational setup to handle halal
            category requirements. Positioning the halal credentials
            correctly—what is certified, what is not, and what a Japanese buyer
            can reasonably claim in-market—is part of the pre-introduction
            brief.
          </p>
        </section>

        {/* F — Malaysia–Japan FTA and Export Frameworks */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">
            Malaysia–Japan FTA and Export Frameworks
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed max-w-3xl">
            The malaysia japan fta and export frameworks—specifically the
            Malaysia–Japan Economic Partnership Agreement (MJEPA)—provide
            preferential tariff access for qualifying goods with Malaysian
            origin. This can improve pricing competitiveness in Japan. However,
            tariff reduction alone does not create distributor interest.
            Frameworks reduce friction for exporters who already have channel
            fit and compliance in order; they do not substitute for it. Rules of
            origin documentation (Form MJEPA issued by MITI) must be prepared
            correctly. Exporters should confirm category eligibility and origin
            requirements before relying on FTA benefits as part of their pricing
            model.
          </p>
        </section>

        {/* G — Business Culture and Trust Building */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">
            Business Culture and Trust Building
          </h2>
          <p className="text-sm text-neutral-500 mb-5">
            Malaysia–Japan business culture and trust building operates on
            consistent signals, not relationship shortcuts.
          </p>
          <ul className="space-y-3 text-sm text-neutral-700 leading-relaxed">
            {[
              "Response cadence matters: delayed replies signal low priority to Japan-side partners.",
              "Meeting preparation is expected—arrive with a product brief, pricing structure, and clear asks.",
              "Documentation is preferred over verbal commitments; written follow-up after meetings is standard.",
              "Decision cycles in Japan are longer than in Malaysia; pressing for fast answers damages credibility.",
              "Relationship continuity—same point of contact, consistent updates—is a trust signal in Japan B2B.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* H — Deliverables */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-6">
            Deliverables
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Entry brief (positioning + channel assumptions)",
              "Partner shortlist with rationale",
              "Outreach log + contact status",
              "Meeting brief pack",
              "Follow-up cadence plan",
              "Next-step decision memo",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span className="text-sm text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Social Proof */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            What We Bring
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {siteConfig.socialProofBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span className="text-sm text-neutral-700">{bullet}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Site Identity */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            Site Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-2 border-neutral-900 pl-4">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">
                Primary Intent
              </p>
              <p className="text-sm text-neutral-800 leading-relaxed">
                {siteConfig.primaryIntent}
              </p>
            </div>
            <div className="border-l-2 border-neutral-300 pl-4">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">
                Who We Serve
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Malaysian exporters and SMEs expanding into Japan's B2B market.
              </p>
            </div>
            {siteConfig.localPresence && (
              <div className="border-l-2 border-neutral-300 pl-4">
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">
                  Where We Operate
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Osaka, Japan — Japan-side coordination to keep distributor
                  conversations moving after first contact.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Internal navigation — About */}
        <section className="border-t border-neutral-200 pt-6">
          <p className="text-sm text-neutral-500 mb-2">
            For the operational case behind the bridge model:
          </p>
          <Link
            to="/about"
            className="text-sm text-neutral-700 font-medium underline underline-offset-2 hover:text-neutral-900"
          >
            How the Malaysia–Japan Business Bridge Works →
          </Link>
        </section>

        {/* I — Coverage Map */}
        <KeywordBlock />

        {/* J — FAQ Preview + link to /faq */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            Common Questions
          </h2>
          <dl className="divide-y divide-neutral-200">
            {HOME_FAQ_PREVIEW.map((item) => (
              <div key={item.question} className="py-6">
                <dt className="text-sm font-semibold text-neutral-900 mb-2">
                  {item.question}
                </dt>
                <dd className="text-sm text-neutral-600 leading-relaxed">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-6">
            <a
              href="/faq"
              className="text-sm text-neutral-700 font-medium underline underline-offset-2 hover:text-neutral-900"
            >
              View all questions →
            </a>
          </div>
        </section>

        {/* K — Final CTA */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Ready to start?
            </h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              The qualification call is 30 minutes. Bring a product overview,
              your target channel, and any existing Japan contacts. You will be
              routed to the hub intake.
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}
