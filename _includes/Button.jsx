import styles from "@includes/Button.module.scss";
import Link from "next/link";

const RegularButton = props => {
  return (
    <Link
      href={props.href}
      className={`${styles.contactBtn} ${props.className}`}
      target={props.external ? "_blank" : "_self"}
      rel={props.external ? "noopener noreferrer" : ""}
      aria-label={props.children}
    >
      {props.children}
    </Link>
  );
};

export default RegularButton;
