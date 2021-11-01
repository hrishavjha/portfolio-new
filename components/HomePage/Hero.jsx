import styles from "@components/HomePage/Home.module.scss";
import { Paragraph } from "@includes/Texts";
import { HeroContainer } from "@layouts/Container";
import Link from "next/link";
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
      .deleteChars(8)
      .typeString("esigner")
      .pauseFor(2000)
      .deleteAll()
      .typeString("Gamer")
      .pauseFor(2000)
      .deleteAll()
      .start();
  }, []);

  return (
    <HeroContainer className="flex items-center">
      <div className={styles.heroCont}>
        <div className={styles.leftCont}>
          <h1>Hi,</h1>
          <h1>I'm Hrishav,</h1>
          <h1 id="typewriter"></h1>
          <Paragraph className="max-w-xl mt-4">
            I'm a web developer based in India specializing in building (and
            occasionally designing) exceptional websites, applications, and
            everything in between.
          </Paragraph>
          <Link href="mailto:jha2506@gmail.com">
            <a
              className={styles.contactBtn}
              target="_blank"
              rel="noreferrer noopener"
            >
              Get in touch
            </a>
          </Link>
        </div>
        <div className={styles.rightCont}>
          <img src="/home/me.png" alt="Hrishav" />
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;
