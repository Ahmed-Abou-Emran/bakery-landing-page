import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
import socialIcon1 from "../../assets/social1.svg";
import socialIcon2 from "../../assets/social2.svg";
import socialIcon3 from "../../assets/social3.svg";
import socialIcon4 from "../../assets/social4.svg";
import heroBackground2 from "../../assets/hero-background2.png";
import qualityBread from "../../assets/qualityBread1.png";
function Hero() {
  return (
    <Header>
      <LogoWrapper>
        <img src={Logo} />
        <div>
          Peachy Pup <span>Bakery</span>
        </div>
      </LogoWrapper>
      <ContentWrapper>
        <Left>
          <h2>Tasty pastries</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
        </Left>
        <Right>
          <img src={qualityBread} />
        </Right>
      </ContentWrapper>
      <Button>See More</Button>
      <Footer>
        <SocialIconsWrapper>
          <img src={socialIcon1} />
          <img src={socialIcon2} />
          <img src={socialIcon3} />
          <img src={socialIcon4} />
        </SocialIconsWrapper>
        <PhoneWrapper>
          <span>Telephone:</span>
          <span>+7 700 000 00 00</span>
        </PhoneWrapper>
      </Footer>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-image: url("src/assets/hero-background2.png"),
    linear-gradient(
      to right,
      var(--brown-400) 64%,
      var(--grey-100) 64%,
      var(--grey-100)
    );
  background-size: contain;
  /* clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 24% 100%, 24% 80%, 0% 80%); */
  padding-inline: clamp(2rem, -15rem + 31vw, 22rem);
  padding-block: var(--spacing-60);

  @media (max-width: 50rem) {
    padding-inline: clamp(0.5rem, -0.5rem + 5vw, 2rem);
    background-image: linear-gradient(
      to bottom,
      var(--yellow-400),
      var(--brown-400) 40%,
      var(--brown-400) 80%,
      var(--yellow-700) 100%
    );
    justify-content: center;
    align-items: center;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  @media (max-width: 50rem) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Left = styled.div`
  h2 {
    color: var(--grey-100);
    font-family: Sen;
    font-size: clamp(2.5rem, 2.075rem + 2.125vw, 4.625rem);
    font-weight: 800;
    text-transform: uppercase;
    margin-block-end: 1.25rem;
    line-height: 1.1;
  }

  p {
    color: var(--grey-100);
    font-family: Poppins;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.4;
    max-width: 34rem;
    margin-block-end: 2.5rem;
  }
`;
const Right = styled.div`
  width: 100%;
  transform: translate(2rem, 0);
  img {
    transform: scale(1.1);
  }
  @media (max-width: 50rem) {
    transform: translate(0, 0);
    img {
      transform: scale(0.9);
    }
  }
`;

const LogoWrapper = styled.div`
  display: flex;

  align-items: center;
  gap: 1rem;
  margin-block-end: clamp(4rem, -3.2rem + 13.1vw, 12.5rem);
  div {
    display: flex;
    flex-direction: column;
    color: var(--grey-100);
    font-family: Sen;
    font-size: 1.75rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

const Button = styled.button`
  font-family: Poppins;
  border-radius: 1.875rem;
  background: var(--yellow-500);
  color: var(--grey-100);
  text-transform: uppercase;
  padding: var(--spacing-50) var(--spacing-130);
  border: none;

  text-align: center;
  font-size: 1.125rem;
  font-weight: 900;
  line-height: 1.5;
  transition: all 200ms ease-in;
  border: 1px solid transparent;
  margin-block-end: 4rem;
  align-self: flex-start;
  &:hover {
    cursor: pointer;
    border: 1px solid var(--yellow-500);
    background-color: var(--grey-100);
    color: var(--yellow-500);
  }
  @media (max-width: 50rem) {
    font-size: 1.2rem;
    padding: var(--spacing-40) var(--spacing-160);
    margin-block-start: 4rem;
    align-self: center;
  }
`;

const Footer = styled.div`
  position: relative;
  background-image: var(--grey-100);
  align-items: center;
  display: flex;
  gap: 3.5rem;
  /* transform: clamp(0rem, -8.5rem + 15.5vw, 10rem); */

  @media (max-width: 30rem) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* position: realtive; */
  background: var(--grey-100);
  /* position:absolute; */
  position: relative;
  svg {
    height: 24px;
    /* color: var(--yellow-300); */
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 30rem) {
    flex-direction: row;
  }
`;

const PhoneWrapper = styled.div`
  display: flex;
  gap: 1rem;
  color: var(--grey-100);
  font-family: Poppins;
  font-size: 1.125rem;
  line-height: 1.4;
  align-self: flex-end;
  span {
    font-weight: 700;
  }
  span:last-of-type {
    font-weight: 500;
    letter-spacing: 0.16875rem;
  }
`;

export default Hero;
