import React from "react";
import styled from "styled-components";
function Footer() {
  return <StyledFooter></StyledFooter>;
}

const StyledFooter = styled.footer`
  margin-block-start: 3.1rem;
  /* position: absolute;
  left: 0; */
  height: 9rem;
  width: 100%;
  background-color: var(--brown-950);
`;
export default Footer;
