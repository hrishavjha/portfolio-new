import styles from "@includes/Texts.module.scss";

const Paragraph = props => {
  return (
    <p
      className={`${props.className} ${styles.paragraph} ${
        props.hint ? "text-hint" : "text-primary"
      } ${
        props.bold
          ? "font-medium"
          : props.light
          ? "font-light"
          : props.dark
          ? "text-white"
          : "font-normal"
      }`}
      style={props.style}
    >
      {props.children}
    </p>
  );
};

const HeroHeading = props => {
  return (
    <h1 className={`${styles.heroHead} ${props.className}`} id={props.id}>
      {props.children}
    </h1>
  );
};

const BodyHead = props => {
  return (
    <h2
      className={`${styles.bodyHead} ${props.className} ${
        props.dark ? "text-white" : "text-primary"
      }`}
      id={props.id}
    >
      {props.children}
    </h2>
  );
};

export { Paragraph, HeroHeading, BodyHead };
