import Container from "./components/Container";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <>
      <Container>
        <Hero />
        <SearchBar />
      </Container>
    </>
  );
};

export default App;
