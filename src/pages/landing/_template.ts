export type LandingConfig = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  h1Accent: string;
  intro: string;
  keyword: string;
  audience: string;
  faqs: { q: string; a: string }[];
  benefits: { title: string; body: string }[];
};
