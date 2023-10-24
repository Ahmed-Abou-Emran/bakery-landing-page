import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
import socialIcon1 from "../../assets/social1.svg";
import socialIcon2 from "../../assets/social2.svg";
import socialIcon3 from "../../assets/social3.svg";
import socialIcon4 from "../../assets/social4.svg";
import heroBackground2 from "../../assets/hero-background2.png";
import lorem from "../../assets/lorem.png";
import quality from "../../assets/quality.svg";
import bread from "../../assets/bread.png";
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
          <Button>See More</Button>
        </Left>
        <Right>
          <img src={bread} />
          <img src={quality} />
          <img src={lorem} />
        </Right>
      </ContentWrapper>
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
  position: relative;
  background-image: url("src/assets/hero-background2.png"),
    linear-gradient(
      to right,
      var(--brown-400) 64%,
      var(--grey-100) 64%,
      var(--grey-100)
    );
  background-size: contain;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 24% 100%, 24% 80%, 0% 80%);
  padding-inline: 20rem;
  padding-block: var(--spacing-60);
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  h2 {
    color: var(--grey-100);
    font-family: Sen;
    font-size: 4.625rem;
    font-weight: 800;
    text-transform: uppercase;
    margin-block-end: 1.25rem;
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
  position: relative;
  transform: translate(0, 5%);
  img:nth-of-type(1) {
    /* position: absolute; */
    transform: translate(-10%);
  }
  img:nth-of-type(2) {
    position: absolute;
    transform: translate(108%, -50%);
  }
`;

const LogoWrapper = styled.div`
  display: flex;

  align-items: center;
  gap: 1rem;
  margin-block-end: 12.5rem;
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

const Footer = styled.div`
  position: relative;
  background-image: var(--grey-100);
  align-items: center;
  display: flex;
  gap: 3.5rem;
  transform: translateX(6rem);
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* position: realtive; */
  background: red;
  img {
    height: 24px;
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
