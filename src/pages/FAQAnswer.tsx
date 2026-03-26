import { Link, Navigate, useParams } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import {
  faqAssetAnswerForSchema,
  getFaqAssetBySlug,
  FAQ_ASSETS,
} from "../content/faq.assets";

function relatedTitle(slug: string): string {
  const a = FAQ_ASSETS.find((x) => x.slug === slug);
  return a?.question ?? slug;
}

export default function FAQAnswer() {
  const { slug } = useParams<{ slug: string }>();
  const asset = slug ? getFaqAssetBySlug(slug) : undefined;

  if (!slug || !asset) {
    return <Navigate to="/faq" replace />;
  }

  const title = `${asset.question} | FAQ | ${siteConfig.siteName}`;
  const description =
    asset.preview.length > 155
      ? asset.preview.slice(0, 152).trim() + "…"
      : asset.preview;
  const path = `/faq/${slug}`;
  const schemaAnswer = faqAssetAnswerForSchema(asset);

  return (
    <>
      <SEOHead
        path={path}
        title={title}
        description={description}
        singleFaq={{ question: asset.question, answer: schemaAnswer }}
      />

      <main className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        <nav className="text-xs text-neutral-500 flex flex-wrap gap-x-3 gap-y-1">
          <Link to="/" className="underline underline-offset-2 hover:text-neutral-900">
            Home
          </Link>
          <span aria-hidden className="hidden sm:inline">
            ·
          </span>
          <Link to="/faq" className="underline underline-offset-2 hover:text-neutral-900">
            Bridge FAQ
          </Link>
          <span aria-hidden className="hidden sm:inline">
            ·
          </span>
          <a
            href={siteConfig.hubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-neutral-900"
          >
            Japan Market Hub →
          </a>
        </nav>

        <article>
          <h1 className="text-2xl md:text-3xl font-semibold text-neutral-900 leading-tight mb-6">
            {asset.question}
          </h1>

          <p className="text-sm text-neutral-700 leading-relaxed faq-direct-answer mb-10">
            {asset.directAnswer}
          </p>

          <section className="border-t border-neutral-200 pt-8">
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              Why this matters for Malaysia–Japan execution
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {asset.whyMatters}
            </p>
          </section>

          <section className="border-t border-neutral-200 pt-8">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">
              Key bridge-related factors
            </h2>
            <ul className="space-y-2 text-sm text-neutral-700 leading-relaxed">
              {asset.keyFactors.map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-neutral-200 pt-8">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">
              Common mistakes
            </h2>
            <ul className="space-y-2 text-sm text-neutral-700 leading-relaxed">
              {asset.commonMistakes.map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-neutral-200 pt-8">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">
              Related questions
            </h2>
            <ul className="space-y-2">
              {asset.relatedSlugs.map((rs) => (
                <li key={rs}>
                  <Link
                    to={`/faq/${rs}`}
                    className="text-sm text-neutral-700 underline underline-offset-2 hover:text-neutral-900"
                  >
                    {relatedTitle(rs)}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-neutral-200 pt-10">
            <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
              If this matches your situation, a short qualification call clarifies
              whether bridge execution is appropriate before any commitment.
            </p>
            <CTA />
          </section>

          <section className="border-t border-neutral-200 pt-10 flex flex-col gap-3 text-sm">
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
              <Link
                to="/faq"
                className="text-neutral-700 font-medium underline underline-offset-2 hover:text-neutral-900"
              >
                ← All bridge questions
              </Link>
              <Link
                to="/"
                className="text-neutral-500 underline underline-offset-2 hover:text-neutral-900"
              >
                Malaysia–Japan Bridge — Home
              </Link>
              <a
                href={siteConfig.hubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 underline underline-offset-2 hover:text-neutral-900"
              >
                Japan Market Hub →
              </a>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
