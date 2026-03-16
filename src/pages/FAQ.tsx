import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import FAQList from "../components/FAQList";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { pageTitle } from "../lib/seo";

export default function FAQ() {
  const title = pageTitle("FAQ: Malaysia–Japan Business Bridge");
  const description =
    "Common questions about the Malaysia–Japan business bridge: halal export to Japan from Malaysia, FTA frameworks, distributor selection, trust building, and what to prepare before a qualification call.";

  return (
    <>
      <SEOHead path="/faq" title={title} description={description} isFaq={true} />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">

        {/* Page header */}
        <section className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            FAQ
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-neutral-600 leading-relaxed lead-paragraph">
            Questions about how the Malaysia–Japan business bridge works, who it
            is for, and what to expect from the process.
          </p>
          <div className="mt-5">
            <Link
              to="/"
              className="text-sm text-neutral-500 hover:text-neutral-900 underline underline-offset-2"
            >
              ← Malaysia–Japan Bridge overview
            </Link>
          </div>
        </section>

        {/* All FAQs */}
        <section className="border-t border-neutral-200 pt-2">
          <FAQList items={siteConfig.faq} />
        </section>

        {/* Back to Home */}
        <section className="border-t border-neutral-200 pt-8">
          <p className="text-sm text-neutral-500 mb-3">
            For the full operational overview, see the home page:
          </p>
          <Link
            to="/"
            className="text-sm text-neutral-700 font-medium underline underline-offset-2 hover:text-neutral-900"
          >
            ← Malaysia–Japan Business Bridge — Home
          </Link>
        </section>

        {/* CTA */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Have a question not answered here?
            </h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              Reach out directly. We respond to all enquiries within one
              business day.
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}
