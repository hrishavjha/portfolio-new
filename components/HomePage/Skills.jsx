const { Container } = require("@layouts/Container");
const { ContainerFluid } = require("@layouts/Container");
import styles from "@components/HomePage/Home.module.scss";
import { Paragraph } from "@includes/Texts";

const Skills = () => {
  return (
    <ContainerFluid className={styles.skillContFluid}>
      <Container className={styles.skillCont}>
        <div className={styles.leftCont}>
          <h2>Skills & Experience</h2>
          <Paragraph dark className="mt-4">
            Since beginning my journey as a web developer nearly 7 years ago,
            I’ve done remote work for startups, and collaborated with talented
            people to create web products for both business and consumer use.
          </Paragraph>
          <Paragraph dark className="mt-2">
            I create successful responsive websites that are fast, easy to use,
            and built with best practices. The main area of my expertise is
            front-end development, HTML, CSS, JS, building small and medium web
            apps, animations, and coding interactive layouts.
          </Paragraph>
          <Paragraph dark className="mt-2">
            Visit my <span className="text-hint">LinkedIn</span> profile for
            more details or just <span className="text-hint">contact me</span>.
          </Paragraph>
        </div>
      </Container>
    </ContainerFluid>
  );
};

export default Skills;
