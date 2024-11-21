import { Outlet } from "react-router-dom";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import BigWrapper from "../components/BigWrapper";
import LittleWrapper from "../components/LittleWrapper";
import Container from "../components/Container";
import SearchBar from "../components/SearchBar";

const MainLayout = () => {
  return (
    <>
      <BigWrapper>
        <LittleWrapper>
          <Container>
            <Hero />
            <SearchBar />
            <Outlet />
          </Container>
        </LittleWrapper>
        <Footer />
      </BigWrapper>
    </>
  );
};

export default MainLayout;
