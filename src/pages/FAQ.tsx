import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { pageTitle } from "../lib/seo";
import { FAQ_ASSETS } from "../content/faq.assets";

export default function FAQ() {
  const title = pageTitle("Malaysia–Japan Bridge FAQ — Execution Q&A");
  const description =
    "Bridge-specific FAQ for Malaysian exporters: Japan market entry execution, distributor fit, halal and MJEPA context, timelines, trust building, and qualification-call preparation. Each question links to a full answer.";

  return (
    <>
      <SEOHead path="/faq" title={title} description={description} isFaq={true} />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            FAQ
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            Malaysia–Japan Bridge FAQ
          </h1>
          <p className="text-base text-neutral-600 leading-relaxed lead-paragraph mb-6">
            This section answers common{" "}
            <strong className="font-semibold text-neutral-800">
              Malaysia-to-Japan market entry
            </strong>{" "}
            and{" "}
            <strong className="font-semibold text-neutral-800">
              bridge-execution
            </strong>{" "}
            questions—distributor alignment, bilateral trust and follow-up,
            halal and FTA context, and what exporters should expect in practice.
            It is not a generic export guide; each answer is scoped to the
            bridge model and exporter-side reality.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link
              to="/"
              className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
            >
              ← Home — Malaysia–Japan Business Bridge
            </Link>
            <a
              href={siteConfig.hubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
            >
              NeoiDigital Japan Market Hub →
            </a>
          </div>
        </header>

        <section className="border-t border-neutral-200 pt-10" aria-labelledby="faq-list-heading">
          <h2 id="faq-list-heading" className="text-xl font-semibold text-neutral-900 mb-8">
            All questions
          </h2>
          <ul className="space-y-0 divide-y divide-neutral-200">
            {FAQ_ASSETS.map((item) => (
              <li key={item.slug} className="py-8 first:pt-0">
                <h3 className="text-base font-semibold text-neutral-900 mb-2">
                  <Link
                    to={`/faq/${item.slug}`}
                    className="hover:underline underline-offset-2"
                  >
                    {item.question}
                  </Link>
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-3 max-w-3xl">
                  {item.preview}
                </p>
                <Link
                  to={`/faq/${item.slug}`}
                  className="text-xs font-medium text-neutral-500 uppercase tracking-wide hover:text-neutral-900"
                >
                  Read full answer →
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-neutral-200 pt-10">
          <p className="text-sm text-neutral-600 mb-4 max-w-2xl leading-relaxed">
            For the hub-wide intake and other Japan market resources, use the
            main NeoiDigital hub. This FAQ stays focused on bilateral bridge
            execution for Malaysian exporters.
          </p>
          <a
            href={siteConfig.hubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-neutral-900 text-neutral-900 text-sm px-4 py-2 hover:bg-neutral-900 hover:text-white"
          >
            Open Japan Market Hub →
          </a>
        </section>

        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              Not finding your scenario?
            </h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              Request a qualification call. We respond to enquiries promptly
              and scope fit before recommending any engagement.
            </p>
            <CTA />
          </div>
        </section>
      </main>
    </>
  );
}
