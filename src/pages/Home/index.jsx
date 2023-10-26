import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import About from "./About";
import ContactUs from "./ContactUs";
import Recipes from "./Recipes";
import Testimonials from "./Testimonials";
import Work from "./Work";
import Footer from "./Footer";
function Home() {
  return (
    <Wrapper>
      <HeroWorktWrapper>
        <Hero />
        <Work />
      </HeroWorktWrapper>
      <Main>
        <About />
        <Recipes />
        <Testimonials />
        <ContactUs />
      </Main>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* padding-inline: 20rem; */
  /* background-image: url("src/assets/Testimonials-background.png"); */
`;
const HeroWorktWrapper = styled.div`
  /* background-image: url("src/assets/hero-background2.png"); */
  /* background-size: cover; */
  background-size: fill;
  background-repeat: round;
`;
const Main = styled.main``;
export default Home;
