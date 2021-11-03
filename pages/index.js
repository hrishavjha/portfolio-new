import Hero from "@components/HomePage/Hero";
import Projects from "@components/HomePage/Projects";
import Skills from "@components/HomePage/Skills";
import SEO from "lib/SEO";

const Home = () => {
  return (
    <>
      <SEO page={"home"} />
      <Hero />
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
