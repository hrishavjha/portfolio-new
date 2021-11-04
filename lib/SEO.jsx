import { NextSeo } from "next-seo";
import Head from "next/head";

const SeoKeywords = () => {
  const keywords = [
    "hrishav",
    "kumar",
    "web",
    "web developer",
    "front-end developer",
    "front-end",
    "back-end developer",
    "backend",
    "freelancer",
    "hrishav kumar"
  ];

  return (
    <Head>
      <meta property="keywords" content={keywords} />
    </Head>
  );
};

const SeoData = [
  {
    // Home Page
    title: "Hrishav Kumar",
    description:
      "I'm a web developer based in India specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.",
    url: "https://www.hrishavkumar.com",
    ogImgUrl: "https://www.hrishavkumar.com/seo.png"
  },
  {
    // About
    title: "About | Hrishav Kumar",
    description:
      "I'm a web developer based in India specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.",
    url: "https://www.hrishavkumar.com",
    ogImgUrl: "https://www.hrishavkumar.com/seo.png"
  }
];

const SEO = ({ page }) => {
  const list = ["home", "about"];
  const { title, description, url, ogImgUrl } = SeoData[list.indexOf(page)];

  return (
    <>
      <SeoKeywords />
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url: [url],
          title: [title],
          description: [description],
          images: [
            {
              url: [ogImgUrl],
              width: "",
              height: "",
              alt: ""
            }
          ],
          site_name: "Hrishav Kumar"
        }}
        twitter={{
          handle: "@techquakie",
          site: "@techquakie",
          cardType: "summary_large_image"
        }}
      />
    </>
  );
};

export default SEO;
