import styles from "@components/About/About.module.scss";
import { HeroHeading, Paragraph } from "@includes/Texts";
import { Container, ContainerFluid } from "@layouts/Container";

const AboutHero = () => {
  return (
    <ContainerFluid className={styles.aboutHeroContFluid}>
      <Container className={styles.aboutHeroCont}>
        <HeroHeading className="text-center">Me, Myself & I</HeroHeading>
        <div className="flex justify-between items-center gap-8 mt-8 md:mt-16 flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2">
            <Paragraph className="md:max-w-xl">
              The essential space of my advantage is front-end. My energy for
              code has started when PHP was still a thing, close by with CSS 1.0
              and HTML 4.01 as guidelines of the current web.
            </Paragraph>
            <Paragraph className="md:max-w-xl">
              Over the years I had numerous chances to work in a tremendous
              range of web advances what let me accumulate a lot of different
              experience. Working for organizations and people all throughout
              the planet I met and gained from astounding and goal-oriented
              individuals.
            </Paragraph>
          </div>
          <div className={styles.meCont}>
            <img
              className={styles.me}
              src="/about/self.webp"
              alt="Hrishav"
              draggable={false}
            />
          </div>
        </div>
      </Container>
    </ContainerFluid>
  );
};

export default AboutHero;
