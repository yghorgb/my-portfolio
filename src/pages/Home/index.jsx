import {
  Container,
  NavBar,
  Hero,
  Button,
  Skills,
  Projects,
  About,
} from "./styles";

export const Home = () => {
  return (
    <Container>
      <NavBar>
        <a href="#">About</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
      </NavBar>
      <Hero>
        <img src="https://github.com/yghorgb.png" alt="avatar" />
        <h2>Yghor Gabriel</h2>
        <span>Eu sou um Desenvolvedor Front-End</span>
        <Button>Baixar CV</Button>
        <Button>Contato</Button>
      </Hero>
      <Skills></Skills>
      <Projects></Projects>
      <About></About>
    </Container>
  );
};
