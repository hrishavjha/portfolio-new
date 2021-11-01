const { Container } = require("@layouts/Container");
const { ContainerFluid } = require("@layouts/Container");
import styles from "@components/HomePage/Home.module.scss";
import { Paragraph } from "@includes/Texts";
import Link from "next/link";

const Skills = () => {
  const Skills = [
    {
      name: "Front-end",
      perc: 90,
      color: "#3DB2FF"
    },
    {
      name: "Back-end",
      perc: 76,
      color: "#ff5930"
    },
    {
      name: "UI/UX",
      perc: 60,
      color: "#E1578A"
    },
    {
      name: "ReactJS",
      perc: 81,
      color: "#FF8243"
    }
  ];

  return (
    <ContainerFluid className={styles.skillContFluid}>
      <Container className={styles.skillCont}>
        <div className={styles.leftCont}>
          <div className={styles.skillSliders}>
            {Skills.map(skill => (
              <div key={skill.name} className={styles.slider}>
                <h3>{skill.name}</h3>
                <div className={styles.sliderBar}>
                  <div
                    className="h-full"
                    style={{ width: `${skill.perc}%`, background: skill.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.jobExp}>
            <div className={styles.jobCard}>
              <h3>Web Developer</h3>
              <p className={styles.company}>ChaosNative</p>
              <p className={styles.timeSpan}>May 2021 - Present</p>
            </div>
          </div>
        </div>
        <div className={styles.rightCont}>
          <h2>Skills & Experience</h2>
          <Paragraph dark className="mt-4 text-dark_hint">
            Since starting my journey as a web engineer almost 7 years prior,
            I've accomplished remote work for new companies, and teamed up with
            capable individuals to make web items for both business and customer
            use.
          </Paragraph>
          <Paragraph dark className="mt-2 text-dark_hint">
            I make effective responsive sites that are quick, simple to utilize,
            and worked with best practices. The fundamental space of my ability
            is front-end improvement, HTML, CSS, JS, fabricating little and
            medium web applications and coding intelligent designs.
          </Paragraph>
          <Paragraph dark className="mt-2 text-dark_hint">
            Visit my{" "}
            <Link href="https://www.linkedin.com/in/hrishavjha/">
              <a
                target="_blank"
                rel="noreferrer noopener"
                className="text-white"
              >
                LinkedIn
              </a>
            </Link>{" "}
            profile for more details or just{" "}
            <Link href="/contact">
              <a className="text-white">contact me</a>
            </Link>
            .
          </Paragraph>
        </div>
      </Container>
    </ContainerFluid>
  );
};

export default Skills;
