import styles from "@components/HomePage/Home.module.scss";
import { BodyHead, Paragraph } from "@includes/Texts";
import { Container, ContainerFluid } from "@layouts/Container";
import Link from "next/link";

const Projects = () => {
  const ProjectData = [
    {
      title: "CodeVox",
      desc: "A free portal for coding assignments, a collaborative tool to help students and teachers to assess coding skills efficiently.",
      link: "https://codevox.herokuapp.com/"
    },
    {
      title: "Ano",
      desc: "A platform to send message anonymously to your desired person",
      link: "http://anomessage.herokuapp.com/"
    },
    {
      title: "RhythmBox",
      desc: "A simple Discord music bot which plays songs on user demand.",
      git: "https://github.com/hrishavjha/RhythmBox"
    },
    {
      title: "LitmusChaos Website",
      desc: "Website for an open-source Chaos Engineering platform.",
      link: "https://litmuschaos.io/"
    }
  ];

  return (
    <ContainerFluid className={styles.projectsContFluid}>
      <Container className={styles.projectsCont}>
        <BodyHead className="text-center">Recent work</BodyHead>
        <Paragraph hint className="sm:max-w-xl text-center mx-auto mt-2">
          A small gallery of recent projects made by me. I've done them all
          together with amazing people. It's only a drop in the ocean compared
          to the entire list.
        </Paragraph>
        <div className={styles.projectList}>
          {ProjectData.map(project => (
            <div key={project.title} className={styles.projectCard}>
              <div>
                <img
                  src={`/home/projects/${project.title}.webp`}
                  alt={project.title}
                  draggable={false}
                />
                <p className="text-sm md:text-base mt-3 text-primary font-medium">
                  {project.title}
                </p>
                <p className="text-xs md:text-sm text-hint mt-1">
                  {project.desc}
                </p>
              </div>
              {project.link ? (
                <Link href={project.link}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm md:text-base"
                    aria-label={project.title}
                  >
                    Visit Link
                  </a>
                </Link>
              ) : (
                <Link href={project.git}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm md:text-base"
                    aria-label={project.title}
                  >
                    Check Repository
                  </a>
                </Link>
              )}
            </div>
          ))}
        </div>
      </Container>
    </ContainerFluid>
  );
};

export default Projects;
