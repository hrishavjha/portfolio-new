import styles from "@includes/Footer.module.scss";
import { Container, ContainerFluid } from "@layouts/Container";
import Link from "next/link";
import { Paragraph } from "./Texts";

const Footer = () => {
  return (
    <ContainerFluid className={styles.footerContFluid}>
      <Container className={styles.footerCont}>
        <Link href="/">
          <a aria-label="Hrishav">
            <svg
              width="40"
              height="50"
              viewBox="0 0 40 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="15" height="20" fill="#fff" />
              <rect x="25" width="15" height="50" fill="#fff" />
              <rect y="30" width="15" height="20" fill="#fff" />
            </svg>
          </a>
        </Link>
        <ul className="flex gap-2 mt-4">
          <li>
            <Link href="https://github.com/hrishavjha">
              <a target="_blank" rel="noopener noreferrer" aria-label="Github">
                <img
                  src="/footer/git.svg"
                  alt="Github"
                  height={24}
                  width={24}
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/__hrishav__">
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img
                  src="/footer/insta.svg"
                  alt="Instagram"
                  height={24}
                  width={24}
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/jhahrishav">
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img
                  src="/footer/fb.svg"
                  alt="Facebook"
                  height={24}
                  width={24}
                />
              </a>
            </Link>
          </li>
        </ul>
        <Paragraph dark className="mt-4 md:mt-6">
          &copy;2022 Hrishav Kumar
        </Paragraph>
      </Container>
    </ContainerFluid>
  );
};

export default Footer;
