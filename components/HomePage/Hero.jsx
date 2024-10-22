import styles from "@components/HomePage/Home.module.scss";
import RegularButton from "@includes/Button";
import { HeroHeading, Paragraph } from "@includes/Texts";
import { HeroContainer } from "@layouts/Container";
import { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";

const Hero = () => {
  useEffect(() => {
    var tags = document.getElementById("typewriter");
    var typewriter = new Typewriter(tags, {
      loop: true,
      delay: 75
    });
    typewriter
      .typeString("Developer")
      .pauseFor(2000)
      .deleteChars(7)
      .typeString("signer")
      .pauseFor(2000)
      .deleteAll()
      .typeString("Gamer")
      .pauseFor(2000)
      .deleteAll()
      .typeString("Photographer")
      .pauseFor(2000)
      .deleteAll()
      .start();
  }, []);

  return (
    <HeroContainer className="flex items-center">
      <div className={styles.heroCont}>
        <div className={styles.leftCont}>
          <HeroHeading>Hi,</HeroHeading>
          <HeroHeading>I&apos;m Hrishav,</HeroHeading>
          <HeroHeading id="typewriter"></HeroHeading>
          <Paragraph hint className="sm:max-w-xl mt-4">
            I&apos;m a web developer based in India specializing in building
            (and occasionally designing) exceptional websites, applications, and
            everything in between.
          </Paragraph>
          <RegularButton
            href="mailto:jha2506@gmail.com"
            className={styles.heroButton}
          >
            Get in touch
          </RegularButton>
        </div>
        <div className={styles.rightCont}>
          <img src="/home/me.webp" alt="Hrishav" draggable={false} />
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;
