const { Container } = require("@layouts/Container");
const { ContainerFluid } = require("@layouts/Container");
import styles from "@components/HomePage/Home.module.scss";
import { BodyHead, Paragraph } from "@includes/Texts";
import Link from "next/link";

const Skills = () => {
  const Skills = [
    {
      name: "Front-end",
      tech: ["jquery", "js", "next", "gatsby", "sass", "react"]
    },
    {
      name: "Back-end",
      tech: ["django", "node", "laravel"]
    },
    {
      name: "UI/UX",
      tech: ["xd", "figma"]
    }
  ];

  return (
    <ContainerFluid className={styles.skillContFluid}>
      <Container className={styles.skillCont}>
        <div className={styles.leftCont}>
          <div className={styles.skillSliders}>
            {Skills.map(skill => (
              <div key={skill.name} className={styles.slider}>
                <p>{skill.name}</p>
                <div className={styles.logoBar}>
                  {skill.tech.map(lang => (
                    <img
                      key={lang}
                      src={`/home/skills/${lang}.svg`}
                      alt={lang}
                      draggable={false}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.jobExp}>
            <div className={styles.jobCard}>
              <h3>Frontend Developer</h3>
              <p className={styles.company}>Harness</p>
              <p className={styles.timeSpan}>Mar 2022 - Present</p>
            </div>
          </div>
        </div>
        <div className={styles.rightCont}>
          <BodyHead>Skills & Experience</BodyHead>
          <Paragraph hint className="mt-6">
            Since starting my journey as a web developer almost 5 years prior,
            I&apos;ve accomplished remote work for new companies, and teamed up
            with capable individuals to make web items for both business and
            customer use.
          </Paragraph>
          <Paragraph hint className="mt-2">
            I make effective responsive sites that are quick, simple to utilize,
            and worked with best practices. The fundamental space of my ability
            is front-end improvement, HTML, CSS, JS, fabricating little and
            medium web applications and coding intelligent designs.
          </Paragraph>
          <Paragraph hint className="mt-2">
            Visit my{" "}
            <Link href="https://www.linkedin.com/in/hrishavjha/">
              <a
                target="_blank"
                rel="noreferrer noopener"
                className="underline"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </Link>{" "}
            profile for more details or just{" "}
            <Link href="mailto:me@hrishavkumar.com">
              <a className="underline" aria-label="Contact me">
                contact me
              </a>
            </Link>
            .
          </Paragraph>
        </div>
      </Container>
    </ContainerFluid>
  );
};

export default Skills;
