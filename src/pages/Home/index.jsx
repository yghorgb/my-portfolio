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
        <a href="#hero">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
      </NavBar>
      <Hero id="hero">
        <img src="https://github.com/yghorgb.png" alt="avatar" />
        <h2>Yghor Gabriel</h2>
        <span>Eu sou um Desenvolvedor Front-End</span>
        <Button>Baixar CV</Button>
        <Button>Contato</Button>
      </Hero>
      <Skills id="skills"></Skills>
      <Projects id="projects"></Projects>
      <About id="about"></About>
    </Container>
  );
};
