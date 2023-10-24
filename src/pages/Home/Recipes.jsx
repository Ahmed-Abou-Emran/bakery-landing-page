import React from "react";
import styled from "styled-components";
import { Heading2 } from "../../ui/Headings";
import useFetch from "../../hooks/useFetch";
function Recipes() {
  const { loading, error, data } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
  );

  return (
    <Section>
      <Heading2>Recipes</Heading2>
      <ContentWrapper>
        {data?.meals.map(
          ({ strMeal: mealName, strMealThumb: mealImg, idMeal: id }) => {
            return (
              <Card key={id}>
                <div>
                  <img src={mealImg} />
                </div>
                <TextWrapper>
                  <h3>{mealName}</h3>
                  <p>
                    Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled
                  </p>
                </TextWrapper>
              </Card>
            );
          }
        )}
      </ContentWrapper>
      <Button>Contact Us</Button>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-120);
  padding-inline: 20rem;
  padding-block: var(--spacing-120);
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  gap: var(--spacing-100);
  margin-inline: auto;

  @media (max-width: 30rem) {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }
`;

const Card = styled.div`
  border-radius: 1.875rem;
  border: 1px solid var(--brown-200);
  background: var(--grey-100);
  overflow: hidden;
  transition: all 300ms ease-in;

  h3 {
    margin-block-end: var(--spacing-25);
    font-size: 1rem;
    font-weight: 900;
    line-height: 1.5;
  }

  p {
    font-family: Poppins;
    font-size: 0.875rem;
    line-height: 1.4;
  }

  /* img {
    transition: all 300ms ease-in;
  }
  img:hover {
    transform: scale(1.1);
  } */

  &:hover {
    cursor: pointer;
    transform-origin: bottom;
    transform: scale(1.05);
  }
`;

const TextWrapper = styled.div`
  padding: var(--spacing-70);
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
  border: 1px solid var(--grey-100);
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

export default Recipes;