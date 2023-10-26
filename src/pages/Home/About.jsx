import React from "react";
import styled from "styled-components";
import { Heading2 } from "../../ui/Headings";
import AboutImg from "../../assets/about.png";
function About() {
  return (
    <Section>
      <ContentWrapper>
        <Left>
          <Heading2 style={{ color: "var(--grey-100)", textAlign: "left" }}>
            About Us
          </Heading2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Left>
        <Right>
          <img src={AboutImg} />
        </Right>
      </ContentWrapper>
      <Button>Contact Us</Button>
    </Section>
  );
}

const Section = styled.section`
  background-image: linear-gradient(
    to right,
    var(--brown-400) 64%,
    var(--grey-100) 64%,
    var(--grey-100)
  );
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-inline: clamp(2rem, -15rem + 31vw, 22rem);
  padding-block: var(--spacing-120);

  @media (max-width: 50rem) {
    background-image: linear-gradient(
      to right,
      var(--brown-400) 0%,
      var(--brown-400) 100%
    );
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  @media (max-width: 50rem) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  color: var(--grey-100);
  font-family: Poppins;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.4;
  flex: 1;
  display: flex;
  flex-direction: column;
  /* width: min-content; */
  h2 {
    margin-block-end: var(--spacing-130);
  }
`;
const Right = styled.div`
  flex: 1;
  img {
    width: 100%;
  }

  @media (max-width: 50rem) {
    img {
      width: 80%;
      margin-inline: auto;
    }
  }
`;
const Button = styled.button`
  font-family: Poppins;
  border-radius: 1.875rem;
  background: var(--yellow-500);
  color: var(--grey-100);
  text-transform: uppercase;
  padding: var(--spacing-50) var(--spacing-100);
  border: none;

  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 900;
  line-height: 1.3;
  transition: all 200ms ease-in;
  border: 1px solid transparent;
  margin-block-start: 3rem;
  align-self: start;
  &:hover {
    cursor: pointer;
    border: 1px solid var(--yellow-500);
    background-color: var(--grey-100);
    color: var(--yellow-500);
  }
  @media (max-width: 50rem) {
    align-self: center;
  }
`;
export default About;
