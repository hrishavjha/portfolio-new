import styles from "@includes/Button.module.scss";
import Link from "next/link";

const RegularButton = props => {
  return (
    <Link href={props.href}>
      {props.external ? (
        <a
          className={`${styles.contactBtn} ${props.className}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          {props.children}
        </a>
      ) : (
        <a className={`${styles.contactBtn} ${props.className}`}>
          {props.children}
        </a>
      )}
    </Link>
  );
};

export default RegularButton;
