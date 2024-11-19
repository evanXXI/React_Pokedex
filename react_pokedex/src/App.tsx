import { useEffect } from "react";
import BigWrapper from "./components/BigWrapper";
import LittleWrapper from "./components/LittleWrapper";
import Container from "./components/Container";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import CardHolder from "./components/CardHolder";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App: React.FC = () => {
  useEffect(() => {
    const rootElement = document.getElementById("root");

    rootElement && rootElement.classList.add("bg-dark");
  }, []);

  return (
    <>
      <BigWrapper>
        <LittleWrapper>
          <Container>
            <Hero />
            <SearchBar />

            <CardHolder>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </CardHolder>
          </Container>
        </LittleWrapper>
        <Footer />
      </BigWrapper>
    </>
  );
};

export default App;
