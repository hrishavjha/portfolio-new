import styles from "@includes/Navbar.module.scss";
import { Container } from "@layouts/Container";
import Link from "next/link";
import { useState } from "react";
import RegularButton from "./Button";
import NavLinks from "./Navbar.data";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const SetNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <nav
      className={`${styles.navbarContFluid} ${
        navbar ? styles.navbarContFluidOpen : ""
      }`}
    >
      <Container className={styles.navbarCont}>
        <Link href="/" aria-label="Hrishav">
          <img
            src="/navbar/logo.svg"
            alt="Hrishav"
            draggable={false}
            className="h-10 md:h-12 w-auto"
          />
        </Link>
        <ul className="gap-4 items-center hidden md:flex">
          {NavLinks.map(link => (
            <li key={link.linkText} className="inline-block">
              <Link
                href={link.linkTo}
                className="text-light_primary text-sm md:text-base hover:text-primary transition-all"
                aria-label={link.linkText}
              >
                {link.linkText}
              </Link>
            </li>
          ))}
          <li>
            <RegularButton href="mailto:jha2506@gmail.com">
              Contact me
            </RegularButton>
          </li>
        </ul>
        <div
          className={`${styles.hamMenu} ${navbar ? styles.hamMenuOpen : ""}`}
          onClick={SetNavbar}
        >
          <span className={navbar ? "" : "mb-1"}></span>
          <span></span>
        </div>
      </Container>
      {navbar ? (
        <Container className={`py-4 block md:hidden ${styles.mobileNavCont}`}>
          <ul className="flex flex-col gap-4">
            {NavLinks.map(link => (
              <li key={link.linkText} className="inline-block">
                <Link
                  href={link.linkTo}
                  className="text-light_primary block p-2 text-center text-sm md:text-base hover:text-primary transition-all"
                  aria-label={link.linkText}
                >
                  {link.linkText}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="mailto:jha2506@gmail.com"
                className="text-sm md:text-base bg-primary p-2 text-center text-white rounded-md block"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Contact Me"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </Container>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
