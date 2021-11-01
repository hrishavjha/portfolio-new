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

export { Paragraph };
