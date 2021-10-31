import styles from "@layouts/Container.module.scss";

const Container = props => {
  return (
    <div
      className={`${styles.container} ${props.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

const ContainerFluid = props => {
  return (
    <div
      className={`${styles.containerFluid} ${props.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

const HeroContainer = props => {
  return (
    <ContainerFluid className={styles.heroCont}>
      <Container>{props.children}</Container>
    </ContainerFluid>
  );
};

export { Container, ContainerFluid, HeroContainer };
