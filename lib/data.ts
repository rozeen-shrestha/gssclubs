import { Description } from "@radix-ui/react-toast";
import { describe } from "node:test";

export const navLinks = [
  { href: "/mun", label: "Home" },
  { href: "/mun/about-us", label: "About Us" },
  { href: "/mun/our-team", label: "Our Team" },
  { href: "/mun/past-editions", label: "Past Editions" },
  { href: "/mun/resources", label: "Resources" },
  { href: "/mun/newsletter", label: "Newsletter" },
  { href: "/mun/faqs", label: "FAQs" },
];

export const committees = [
  {
    name: "United Nations Security Council",
    tagline: "Addressing global peace and security.",
    agenda: "The Situation in the Sahel Region; Cybersecurity and International Peace",
    chairs: "Anika Singh & Rohan Gupta",
    imageId: "committee-unsc",
  },
  {
    name: "World Health Organization",
    tagline: "Tackling global health crises.",
    agenda: "Pandemic Preparedness and Response; Mental Health in Post-Conflict Zones",
    chairs: "Priya Koirala & David Chen",
    imageId: "committee-who",
  },
  {
    name: "Human Rights Council",
    tagline: "Protecting and promoting human rights.",
    agenda: "Protecting Freedom of Speech in the Digital Age; The Rights of Climate Refugees",
    chairs: "Fatima Al-Jamil & Samrat Thapa",
    imageId: "committee-hrc",
  },
];

export const teamMembers = [
  { name: 'Jaya Bhattarai', role: 'Secretary-General', imageId: 'team-member-1' },
  { name: 'Spandan Maraseni', role: 'Club-President', imageId: 'team-member-2' },
  { name: 'Suhani Pathak', role: 'Deputy-Secretary-General', imageId: 'team-member-3' },
  { name: 'Sharadip Pokhreal', role: 'Director-General of Committees', imageId: 'team-member-4' },
  { name: 'Prajwolika Baral', role: 'Director-General of Operations', imageId: 'team-member-5' },
  { name: 'Prayosh K. Gurung', role: 'USG of Delegate Affairs', imageId: 'team-member-6' },
  { name: 'Manil Adhikari ', role: 'USG of Outreach', imageId: 'team-member-7' },
  { name: 'Sameep Adhikari', role: 'USG of Conference Management', imageId: 'team-member-8' },
  { name: 'Rohan S. Rajput', role: 'USG of Logistics', imageId: 'team-member-9' },
];

export const faqs = [
  {
    question: "What is the dress code for the conference?",
    answer: "Day 1 requires traditional attire, Day 2 semi-formal attire, and Day 3 formal attire.",
  },
  {
    question: "Are meals provided during the conference?",
    answer: "Yes, meals are provided three times a day throughout the conference.",
  },
  {
    question: "Is there an age limit for delegates?",
    answer: "Yes, the conference is open to delegates aged 13 years and above.",
  },
  {
    question: "What are the registration fees?",
    answer: "The registration fee is NPR 3,300 and is all-inclusive.",
  },
  {
    question: "How can I prepare for my committee?",
    answer: "Delegates should review the background guide, research their country’s position, and familiarize themselves with the agenda and Rules of Procedure prior to the conference.",
  },
];

export const pastEditions = [
    { year: 2025, theme: "Innovating for a Sustainable Future", imageId: "past-edition-1", description:"The 2025 edition represented a significant milestone in the GSSMUN journey, marked by a higher standard of debate, increased delegate participation, and a stronger emphasis on practical, solution-oriented diplomacy. The conference facilitated in-depth discussions on pressing global concerns, encouraging delegates to engage critically, negotiate effectively, and produce comprehensive resolutions reflective of contemporary international challenges." },
    { year: 2024, theme: "Bridging Divides, Building Unity", imageId: "past-edition-2", description:"The 2024 edition served as a phase of consolidation and growth, building upon the successes of the inaugural conference. With improved committee structures, more refined agendas, and enhanced executive oversight, the conference fostered meaningful dialogue and analytical debate. Delegates demonstrated notable improvement in research, policy formulation, and collaborative negotiation throughout the sessions." },
    { year: 2023, theme: "Navigating a Post-Pandemic World", imageId: "past-edition-3", description: "The inaugural GSSMUN conference in 2023 marked the formal establishment of the platform, providing students with an introduction to diplomatic procedure and multilateral discussion. Despite being the first edition, the conference successfully cultivated an environment of intellectual exchange, encouraging participants to explore global issues through structured debate, cooperation, and consensus-building." },
]

export const galleryImages = [
    { imageId: "gallery-1" },
    { imageId: "gallery-2" },
    { imageId: "gallery-3" },
    { imageId: "gallery-4" },
    { imageId: "newsletter-cover" },
    { imageId: "newsletter-page-2" },
    { imageId: "newsletter-page-3" },
]

export const sponsors = [
    { name: "Sponsor 1", imageId: "sponsor-1" },
    { name: "Sponsor 2", imageId: "sponsor-2" },
    { name: "Sponsor 3", imageId: "sponsor-3" },
    { name: "Sponsor 4", imageId: "sponsor-4" },
    { name: "Sponsor 5", imageId: "sponsor-5" },
]

export const resources = [
  { name: "Study Guide - Delegate Handbook", type: "PDF", link: "/resources/Delegate Handbook GSSMUN 4.0.pdf" },
  { name: "Study Guide - UNSC", type: "PDF", link: "/resources/United Nations Security Council ( UNSC ).pdf" },
  { name: "Study Guide - UNHRC", type: "PDF", link: "/resources/United Nations Human Rights Council ( UNHRC ).pdf" },
  { name: "Study Guide - DISEC", type: "PDF", link: "/resources/Disarmament and International Security Committee ( DISEC )_.pdf" },
  { name: "Study Guide - NATO", type: "PDF", link: "/resources/North Atlantic Treaty Organization ( NATO ).pdf" },
  { name: "Study Guide - UNCSW", type: "PDF", link: "/resources/United Nations Commission on the Status of Women ( UNCSW ).pdf" },
  { name: "Study Guide - IPC", type: "PDF", link: "/resources/International Press Corps ( IPC ).pdf" },
  { name: "Study Guide - House of Lords", type: "PDF", link: "/resources/House of Lords.pdf" },
  { name: "Study Guide - Crisis Committee", type: "PDF", link: "/resources/Crisis Committee_.pdf" },

]
