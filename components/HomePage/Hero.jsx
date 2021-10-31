import styles from "@components/HomePage/Home.module.scss";
import { Paragraph } from "@includes/Texts";
import { HeroContainer } from "@layouts/Container";
import Link from "next/link";

const Hero = () => {
  return (
    <HeroContainer className="flex items-center py-10 md:py-0">
      <div className={styles.heroCont}>
        <h1>Hi,</h1>
        <h1>I'm Hrishav,</h1>
        <h1>Developer.</h1>
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
            Contact Me
          </a>
        </Link>
      </div>
    </HeroContainer>
  );
};

export default Hero;
