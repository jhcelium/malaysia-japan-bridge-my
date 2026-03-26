import { siteConfig } from "../content/site.config";

const BASE_URL = `https://${siteConfig.domain}`;
const DATE_PUBLISHED = "2026-03-02";
const DATE_MODIFIED = "2026-03-16";

/** Build canonical URL — trailing slash on root only */
export function canonicalUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (clean === "/") return `${BASE_URL}/`;
  return `${BASE_URL}${clean.replace(/\/+$/, "")}`;
}

/** Build full page title */
export function pageTitle(subtitle?: string): string {
  if (!subtitle) return `${siteConfig.brandLine} | ${siteConfig.siteName}`;
  return `${subtitle} | ${siteConfig.siteName}`;
}

// ── Shared sub-schemas ──────────────────────────────────────

function speakable(cssSelectors: string[] = ["h1", ".lead-paragraph"]) {
  return {
    "@type": "SpeakableSpecification",
    cssSelector: cssSelectors,
  };
}

function publisherRef() {
  return {
    "@type": "Organization",
    name: siteConfig.company,
    url: BASE_URL,
  };
}

// ── JSON-LD: Organization (GEO 13) ─────────────────────────

export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company,
    url: BASE_URL,
    description: siteConfig.primaryIntent,
    inLanguage: "en-MY",
    knowsAbout: [
      ...siteConfig.mainKeywords,
      ...siteConfig.supportingKeywords,
      "Malaysia–Japan bilateral trade",
      "Japan B2B distribution",
      "MJEPA tariff frameworks",
      "halal export compliance",
    ],
    areaServed: [
      { "@type": "Country", name: "Malaysia" },
      { "@type": "Country", name: "Japan" },
    ],
    ...(siteConfig.localPresence && {
      address: {
        "@type": "PostalAddress",
        addressLocality: "Osaka",
        addressRegion: "Osaka",
        addressCountry: "JP",
      },
    }),
  };
}

// ── JSON-LD: WebSite (GEO 14 + AEO 7) ─────────────────────

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.brandLine} | ${siteConfig.siteName}`,
    url: BASE_URL,
    description: siteConfig.primaryIntent,
    inLanguage: "en-MY",
    publisher: publisherRef(),
    about: {
      "@type": "Thing",
      name: "Malaysia–Japan Business Bridge",
      description:
        "Cross-border trade coordination connecting Malaysian exporters with Japan-side distributors, compliance framing, and follow-up systems.",
    },
    speakable: speakable(),
    keywords: [
      ...siteConfig.mainKeywords,
      ...siteConfig.supportingKeywords,
    ].join(", "),
  };
}

// ── JSON-LD: WebPage (AEO 7) ───────────────────────────────

export function webPageJsonLd(path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: canonicalUrl(path),
    inLanguage: "en-MY",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    publisher: publisherRef(),
    isPartOf: {
      "@type": "WebSite",
      url: BASE_URL,
    },
    speakable: speakable(),
  };
}

// ── JSON-LD: FAQPage (AEO 7+8) ─────────────────────────────

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    speakable: speakable(["h1", "dt", "dd"]),
  };
}

/** Single-question FAQPage for /faq/:slug answer assets */
export function singleFaqPageJsonLd(question: string, answerText: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answerText,
        },
      },
    ],
    speakable: speakable(["h1", ".faq-direct-answer"]),
  };
}

// ── JSON-LD: HowTo (AEO 10) ────────────────────────────────

export function howToJsonLd(
  name: string,
  description: string,
  steps: { title: string; body: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.body,
    })),
  };
}

// ── JSON-LD: DefinedTermSet (AEO 9) ────────────────────────

export function definedTermSetJsonLd(
  name: string,
  terms: { term: string; description: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name,
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.description,
    })),
  };
}
