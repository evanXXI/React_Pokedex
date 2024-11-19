import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import CardHolder from "./components/CardHolder";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Wrapper>
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
      </Wrapper>
      <Footer />
    </>
  );
};

export default App;
