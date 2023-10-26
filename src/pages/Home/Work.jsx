import React from "react";
import styled from "styled-components";
import { Heading2 } from "../../ui/Headings";
import work1 from "../../assets/Work1.png";
import work2 from "../../assets/Work2.png";
import work3 from "../../assets/Work3.png";
import work4 from "../../assets/Work4.png";
function Work() {
  return (
    <Section>
      <TextWrapper>
        <Heading2 style={{ color: "var(--grey-100)", textAlign: "right" }}>
          How We Work
        </Heading2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </p>
      </TextWrapper>
      <ImagesWrapper>
        <img src={work1} />
        <img src={work2} />
        <img src={work3} />
        <img src={work4} />
      </ImagesWrapper>
      <Button>Contact Us</Button>
    </Section>
  );
}

const Section = styled.section`
  /* mix-blend-mode: multiply; */
  background-image: url("src/assets/work-background.png"),
    linear-gradient(
      to right,
      transparent,
      transparent 36%,
      var(--brown-400) 36%,
      var(--brown-400)
    );
  background-size: fill;
  background-position: center;
  /* linear-gradient(var(--grey-300), var(--grey-300)); */

  /* background-image: linear-gradient(
    to right,
    transparent,
    transparent 36%,
    var(--brown-400) 36%,
    var(--brown-400)
  ); */
  display: flex;
  flex-direction: column;
  gap: var(--spacing-130);
  padding-inline: clamp(2rem, -15rem + 31vw, 22rem);
  padding-block: var(--spacing-120);

  @media (max-width: 50rem) {
    background-image: 
  /* url("src/assets/hero-background2.png"), */ linear-gradient(
      to bottom,
      var(--yellow-400),
      var(--brown-400) 40%,
      var(--brown-400) 80%,
      var(--yellow-700) 100%
    );
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  p {
    color: var(--brown-400);
    font-family: Poppins;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.4;
    max-width: 17rem;
    align-self: flex-end;
  }

  @media (max-width: 50rem) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;

    p {
      color: var(--grey-100);
      align-self: flex-start;
      max-width: revert;
    }
  }
`;
const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: var(--spacing-30);
  justify-items: center;
  /* margin-inline: auto; */
  img {
    flex-grow: 1;
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
  margin-top: auto;
  align-self: center;
  &:hover {
    cursor: pointer;
    border: 1px solid var(--yellow-500);
    background-color: var(--grey-100);
    color: var(--yellow-500);
  }
  @media (max-width: 46rem) {
    font-size: 1.2rem;
    padding: var(--spacing-40) var(--spacing-160);
  }
`;

export default Work;
