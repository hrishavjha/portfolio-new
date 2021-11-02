import Hero from "@components/HomePage/Hero";
import Skills from "@components/HomePage/Skills";
import SEO from "lib/SEO";

const Home = () => {
  return (
    <>
      <SEO page={"home"} />
      <Hero />
      <Skills />
    </>
  );
};

export default Home;
