import styled from "styled-components";
import NavBar from "./navBar/navBar";
import WaveSVG from "./assets/wave4.svg";
import Home from "./home/home";
import About from "./about/about";
import { ContextGlobalProvider } from "./contextGlobal/contextGlobal";

const BackgroundHome = styled.section`
  background-image: url(${WaveSVG});
  background-repeat: no-repeat;

  padding-left: 1rem;
  padding-right: 1rem;
  background-size: cover;

  @media (min-width: 768px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media (min-width: 1200px) {
    padding-left: 13rem;
    padding-right: 13rem;
  }

  @media (min-width: 1900px) {
    padding-left: 25rem;
    padding-right: 25rem;
  }
`;

const BackgroundAbout = styled.section`
  background-color: #222831;

  padding-left: 1rem;
  padding-right: 1rem;
  background-size: cover;

  @media (min-width: 768px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media (min-width: 1200px) {
    padding-left: 13rem;
    padding-right: 13rem;
  }

  @media (min-width: 1900px) {
    padding-left: 25rem;
    padding-right: 25rem;
  }
`;

function App() {
  return (
    <ContextGlobalProvider>
      <NavBar />
      <BackgroundHome>
        <Home />
      </BackgroundHome>
      <BackgroundAbout>
        <About />
      </BackgroundAbout>
    </ContextGlobalProvider>
  );
}

export default App;
