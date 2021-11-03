import styles from "@includes/Footer.module.scss";
import { Container, ContainerFluid } from "@layouts/Container";
import Link from "next/link";
import { Paragraph } from "./Texts";

const Footer = () => {
  return (
    <ContainerFluid className={styles.footerContFluid}>
      <Container className={styles.footerCont}>
        <Link href="/">
          <a>
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
        <Paragraph dark className="mt-4 md:mt-6">
          &copy; 2021 Hrishav Kumar
        </Paragraph>
      </Container>
    </ContainerFluid>
  );
};

export default Footer;
