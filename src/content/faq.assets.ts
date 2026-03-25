/**
 * Malaysia–Japan bridge FAQ answer assets (this site only).
 * Each entry powers /faq/:slug answer pages and the /faq index previews.
 */

export type FaqAsset = {
  slug: string;
  /** Must match site.config FAQ question for index JSON-LD alignment */
  question: string;
  /** One-line preview on /faq index */
  preview: string;
  directAnswer: string;
  whyMatters: string;
  keyFactors: string[];
  commonMistakes: string[];
  relatedSlugs: string[];
};

export const FAQ_ASSETS: FaqAsset[] = [
  {
    slug: "what-does-malaysia-japan-business-bridge-do",
    question: "What does a Malaysia–Japan business bridge actually do?",
    preview:
      "Translates export intent into Japan-side execution: mapping, introductions, and follow-up cadence.",
    directAnswer:
      "A Malaysia–Japan business bridge is an operational layer on the Japan side. It turns your export goal into concrete steps: which distributor or buyer category fits your product, how introductions are framed, and how follow-up continues after first contact so the relationship does not go quiet.",
    whyMatters:
      "Malaysian exporters often lose deals in the gap between interest and execution. Time zones, language, and Japan B2B norms mean that without a Japan-side coordinator, first meetings rarely convert. The bridge exists to close that execution gap—not to replace your product team or legal counsel.",
    keyFactors: [
      "Category-fit mapping before outreach: the bridge aligns your offer with the channel Japanese buyers actually use.",
      "Introduction discipline: briefings and meeting setup are structured so distributors receive a coherent story.",
      "Follow-up cadence: the Japan side maintains contact rhythm so samples, pricing, and next steps do not stall.",
      "Bilateral context: the coordinator carries Malaysia-side facts and Japan-side expectations in the same conversation.",
    ],
    commonMistakes: [
      "Treating the bridge as a mailing list or generic lead service.",
      "Expecting a signed deal after one meeting without a documented follow-up path.",
      "Delegating Japan outreach entirely to email from Malaysia with no local continuity.",
    ],
    relatedSlugs: [
      "find-japan-distributor-trading-company",
      "malaysia-japan-culture-trust-building",
      "prepare-before-qualification-call",
    ],
  },
  {
    slug: "japan-market-entry-malaysian-smes-vs-large-brands",
    question: "Is Japan market entry different for Malaysian SMEs vs large brands?",
    preview:
      "Yes—SMEs need active outreach, longer qualification, and Japan-side momentum; large brands often get inbound interest.",
    directAnswer:
      "Yes. Large brands with international traction are often approached by major distributors or retailers. Malaysian SMEs usually enter with no Japan-side recognition, so they need structured outreach, a longer qualification window, and consistent Japan-side follow-up to keep conversations alive.",
    whyMatters:
      "If you plan like a global brand but operate as an SME, you will misread timelines and damage trust. The bridge model is built for exporter reality: limited brand pull, high need for category-fit introductions, and dependence on relationship continuity.",
    keyFactors: [
      "Recognition asymmetry: SMEs rarely get inbound distributor queues without prior Japan exposure.",
      "Qualification depth: smaller suppliers face more scrutiny on supply, documentation, and repeatability.",
      "Trust velocity: without a Japan-side contact, response delays read as low commitment.",
      "Bridge role: sustain momentum across meetings, samples, and internal approvals on the buyer side.",
    ],
    commonMistakes: [
      "Compressing Japan B2B timelines to match domestic sales cycles.",
      "Assuming a single trade show contact equals a distribution path.",
      "Under-investing in written follow-up and next-step clarity after first meetings.",
    ],
    relatedSlugs: [
      "what-does-malaysia-japan-business-bridge-do",
      "timeline-outreach-to-first-deals",
      "malaysia-japan-culture-trust-building",
    ],
  },
  {
    slug: "halal-export-to-japan-from-malaysia",
    question: "How do you approach halal export to Japan from Malaysia?",
    preview:
      "Match certifications to what Japanese buyers recognise; align claims and channel before introductions.",
    directAnswer:
      "Halal export from Malaysia to Japan starts with buyer-side recognition of your certification body, not only your domestic halal status. Documentation, ingredient claims, and channel fit are checked before distributor meetings. Partner selection targets distributors who can actually handle halal categories and buyer expectations in your target channel.",
    whyMatters:
      "Japan does not apply one national halal rule across retail, food service, and specialty importers. Misaligned certification or claims surfaces late and kills distributor confidence. Bridge execution front-loads this so introductions happen with aligned expectations.",
    keyFactors: [
      "Certification mapping: which bodies your target channel and distributors accept.",
      "Label and claim discipline: what can be stated in-market versus what is certified.",
      "Channel-specific requirements: supermarket, convenience, and food service differ.",
      "Distributor capability: not every F&B distributor runs halal-capable logistics and buyer relationships.",
    ],
    commonMistakes: [
      "Leading with certification logos without confirming buyer acceptance.",
      "Treating halal as a single checkbox instead of a channel-by-channel review.",
      "Starting outreach before ingredient and documentation packs are Japan-ready.",
    ],
    relatedSlugs: [
      "malaysia-japan-fta-entry-approach",
      "find-japan-distributor-trading-company",
      "japan-market-entry-malaysian-smes-vs-large-brands",
    ],
  },
  {
    slug: "malaysia-japan-fta-entry-approach",
    question: "Do Malaysia–Japan FTA frameworks change the entry approach?",
    preview:
      "MJEPA can improve landed cost for qualifying goods; it does not create distributor interest or replace compliance.",
    directAnswer:
      "The Malaysia–Japan Economic Partnership Agreement (MJEPA) can reduce tariffs for qualifying goods with correct origin documentation. It does not replace distributor fit, labelling, or import procedures. Entry approach still starts with channel and partner alignment; FTA benefits apply once commercial terms and compliance are in motion.",
    whyMatters:
      "Exporters who lead with “FTA pricing” without a willing buyer misunderstand the sequence. The bridge keeps commercial sequencing honest: partner and compliance first, tariff optimisation as a formalisation step with MITI-issued Certificate of Origin where applicable.",
    keyFactors: [
      "Rules of origin: category eligibility and Form MJEPA preparation via MITI.",
      "Tariff impact versus shelf price: preferential rates help only after channel economics work.",
      "Importer of record: Japanese customs still requires a compliant import path.",
      "Documentation timing: origin paperwork follows distributor commitment, not before it.",
    ],
    commonMistakes: [
      "Assuming FTA status alone opens retail or food-service listings.",
      "Omitting rules-of-origin checks when quoting Japan landed cost.",
      "Confusing tariff preference with exemption from Japan food or product standards.",
    ],
    relatedSlugs: [
      "halal-export-to-japan-from-malaysia",
      "find-japan-distributor-trading-company",
      "prepare-before-qualification-call",
    ],
  },
  {
    slug: "find-japan-distributor-trading-company",
    question: "How do you find the right Japan-side distributor or trading company?",
    preview:
      "Category fit first, then coverage and stability—introductions only after pre-qualification, not bulk lists.",
    directAnswer:
      "The right Japan-side partner handles your product category and sells through your target channel. Candidates are screened for geographic coverage, financial stability, and willingness to onboard new overseas suppliers. Introductions follow only after that filter—there is no generic list handoff.",
    whyMatters:
      "Malaysia–Japan trade fails when exporters meet the wrong category of partner or burn credibility on scattershot outreach. Bridge execution conserves trust by matching product, channel, and distributor capability before the first meeting.",
    keyFactors: [
      "Category fit: product type, temperature chain, and retail vs wholesale focus.",
      "Channel alignment: where the end buyer sits versus where the distributor actually sells.",
      "Operational readiness: MOQ, lead times, and documentation the distributor expects.",
      "Introduction quality: one well-briefed meeting beats ten cold emails.",
    ],
    commonMistakes: [
      "Chasing the largest distributor name without category overlap.",
      "Skipping a written brief and expecting the distributor to infer positioning.",
      "Treating trading companies and specialty importers as interchangeable.",
    ],
    relatedSlugs: [
      "what-does-malaysia-japan-business-bridge-do",
      "timeline-outreach-to-first-deals",
      "halal-export-to-japan-from-malaysia",
    ],
  },
  {
    slug: "timeline-outreach-to-first-deals",
    question: "What is the typical timeline from first outreach to first deals?",
    preview:
      "Often 6–12 months to a first agreement—internal reviews, samples, and pricing cycles cannot be rushed safely.",
    directAnswer:
      "A realistic range from first qualified outreach to a signed commercial agreement is often six to twelve months. Japan B2B involves internal reviews, sample evaluation, pricing passes, and approval layers. Pressing for speed usually erodes trust rather than accelerating outcomes.",
    whyMatters:
      "Malaysian exporters who plan cash flow and inventory on shorter cycles create pressure that Japan-side partners read as inexperience. The bridge sets expectations early and maintains cadence so progress is visible without damaging the relationship.",
    keyFactors: [
      "Multi-step buyer process: category managers, compliance, and logistics rarely decide in one meeting.",
      "Sample and trial phases: quality consistency matters more than volume promises.",
      "Documentation gates: labels, certificates, and import paperwork align with timeline milestones.",
      "Trust pacing: consistent follow-up signals reliability; aggressive deadlines do not.",
    ],
    commonMistakes: [
      "Promising headquarters or retail timelines that Japan teams cannot commit to.",
      "Going silent between milestones because no Japan-side owner is assigned.",
      "Confusing distributor “interest” with a binding commercial commitment.",
    ],
    relatedSlugs: [
      "japan-market-entry-malaysian-smes-vs-large-brands",
      "malaysia-japan-culture-trust-building",
      "find-japan-distributor-trading-company",
    ],
  },
  {
    slug: "malaysia-japan-culture-trust-building",
    question: "How do you handle Malaysia–Japan business culture and trust building?",
    preview:
      "Consistency over intensity: response cadence, meeting prep, written follow-up, and single-point continuity.",
    directAnswer:
      "Trust in Malaysia–Japan B2B is built through predictable behaviour: timely responses, prepared meetings, written recap after discussions, and the same Japan-side contact across interactions. The bridge manages that cadence so the Malaysian team is not fighting time zones and tone gaps alone.",
    whyMatters:
      "Cultural difference is often overstated; operational difference is not. Japan-side partners infer reliability from how quickly questions are answered and whether next steps are documented. Without bilateral execution discipline, good products still lose to competitors who simply follow through.",
    keyFactors: [
      "Response cadence: delays signal deprioritisation in Japan B2B contexts.",
      "Meeting preparation: clear asks, pricing bands, and product facts reduce rework.",
      "Documentation habit: verbal agreements are insufficient for distributor internal approvals.",
      "Single contact continuity: rotating exporters without handover confuses Japanese counterparts.",
    ],
    commonMistakes: [
      "Relying on informal chat apps without structured follow-up notes.",
      "Switching spokespersons between meetings without a documented transition.",
      "Interpreting silence as rejection instead of checking in through a Japan-side channel.",
    ],
    relatedSlugs: [
      "what-does-malaysia-japan-business-bridge-do",
      "timeline-outreach-to-first-deals",
      "prepare-before-qualification-call",
    ],
  },
  {
    slug: "prepare-before-qualification-call",
    question: "What should we prepare before the qualification call?",
    preview:
      "Product overview, target channel, any Japan leads, and a realistic readiness timeline—mutual fit, not a pitch.",
    directAnswer:
      "Bring a concise product overview (category, pricing range, certifications), your target Japan channel, any existing contacts or enquiries from Japan, and a realistic view of export readiness and timeline. The call assesses mutual fit; specificity on both sides produces a direct read on whether bridge execution makes sense.",
    whyMatters:
      "Generic discovery calls waste bilateral time. Malaysia-to-Japan execution requires enough detail to judge channel fit, compliance surface area, and whether Japan-side follow-up will have material to work with.",
    keyFactors: [
      "Product facts: specs, MOQ, shelf life, and existing export markets if any.",
      "Channel intent: retail, food service, B2B wholesale, or trading-company route.",
      "Certification and label status: what exists today versus what Japan will require.",
      "Internal bandwidth: who owns decisions and samples on the Malaysia side.",
    ],
    commonMistakes: [
      "Arriving with only marketing language and no commercial data.",
      "Omitting known Japan contacts, then rediscovering them later in outreach.",
      "Treating the call as a hard sell instead of a scoped feasibility check.",
    ],
    relatedSlugs: [
      "what-does-malaysia-japan-business-bridge-do",
      "find-japan-distributor-trading-company",
      "japan-market-entry-malaysian-smes-vs-large-brands",
    ],
  },
];

const bySlug = new Map(FAQ_ASSETS.map((a) => [a.slug, a]));

export function getFaqAssetBySlug(slug: string): FaqAsset | undefined {
  return bySlug.get(slug);
}

export function getFaqAssetSlugs(): string[] {
  return FAQ_ASSETS.map((a) => a.slug);
}

/** Plain-text block for JSON-LD Answer on answer pages */
export function faqAssetAnswerForSchema(asset: FaqAsset): string {
  return [
    asset.directAnswer,
    asset.whyMatters,
    "Key factors: " + asset.keyFactors.join(" "),
    "Common mistakes: " + asset.commonMistakes.join(" "),
  ].join(" ");
}
