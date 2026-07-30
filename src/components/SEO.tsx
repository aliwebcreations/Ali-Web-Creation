import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
};

export default function SEO({ title, description }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="AI, AI Tools, Automation, Web Development, SEO, Chatbot"
      />
      <meta name="author" content="Ali Web Creation" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://aliwebcreations.github.io/AIVAOS/"
      />

      <meta name="twitter:card" content="summary_large_image" />

      <link
        rel="canonical"
        href="https://aliwebcreations.github.io/AIVAOS/"
      />
    </Helmet>
  );
}