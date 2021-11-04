import AboutHero from "@components/About/Hero";
import SEO from "lib/SEO";

const About = () => {
  return (
    <>
      <SEO page={"about"} />
      <AboutHero />
    </>
  );
};

export default About;
