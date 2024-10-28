import styled from "styled-components";

export const Container = styled.div`
  background: rgb(2, 0, 36);
`;

export const NavBar = styled.nav`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 1000;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  background: linear-gradient(180deg, #2b638e, #0a0e11);

  > a {
    color: #eff1f3;
    font-weight: bold;
    font-size: 24px;
  }
`;

export const Button = styled.button``;

export const Hero = styled.section`
  height: 100vh;
  width: 100%;

  background-color: #0a0e11;
`;

export const Skills = styled.section`
  height: 100vh;
  width: 100%;

  background-color: #2b638e;
  background: linear-gradient(180deg, #0a0e11, #2b638e);
`;

export const Projects = styled.section`
  height: 100vh;
  width: 100%;

  background-color: #0a0e11;
`;

export const About = styled.section`
  height: 100vh;
  width: 100%;

  background-color: #2b638e;
  background: linear-gradient(180deg, #0a0e11, #2b638e);
`;
