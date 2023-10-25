import React from "react";
import Star from "../../assets/star.svg";
import { Heading2 } from "../../ui/Headings";
import Loader from "../../ui/Loader";
import styled from "styled-components";
import useFetch from "../../hooks/useFetch";

function Testimonials() {
  const {
    loading,
    error,
    data: testimonials,
  } = useFetch(`https://reqres.in/api/users?page=1`);

  const stars = [1, 2, 3, 4, 5];
  return (
    <Section>
      <Heading2 style={{ color: "var(--brown-50)" }}>Testimonials</Heading2>
      {loading && <Loader />}
      {!loading && error && (
        <Error>
          Something Went Wrong 😢 . Sorry We Couldn't load Testimonials
        </Error>
      )}
      {!loading && !error && (
        <>
          <TestimonialsWrapper>
            {testimonials?.data?.map(
              ({ id, first_name: firstName, last_name: lastName, avatar }) => (
                <Card key={id}>
                  <div>
                    <h3>
                      {firstName} {lastName}
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </p>
                    <StarRating>
                      {stars.map((index) => {
                        return <img src={Star} key={index} />;
                      })}
                    </StarRating>
                  </div>
                </Card>
              )
            )}
          </TestimonialsWrapper>
        </>
      )}
      <Button>Contact Us</Button>
    </Section>
  );
}

const Section = styled.section`
  /* background-image: linear-gradient(
    hsl(32, 56%, 52%, 0.8),
    hsl(32, 56%, 52%, 0.8)
    ), */
  position: relative;
  background-image: url("src/assets/Mask Group2.png"),
    linear-gradient(var(--brown-400), var(--brown-400));
  /* background-repeat: no-repeat; */
  background-size: fill;
  margin-block-start: 3.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 5rem 3rem;
  padding-inline: clamp(1rem, -3.2rem + 21vw, 22rem);

  /* &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(
      255,
      255,
      255,
      0.1
    ); Adjust the last value (0.5) for the desired opacity
    z-index: 1;
  } */
`;
const TestimonialsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: var(--spacing-120);
  margin-block-start: var(--spacing-240);

  @media (max-width: 47rem) {
    grid-template-columns: 1fr;
  }
`;
const Card = styled.div`
  font-family: Poppins;
  min-width: 18rem;
  width: clamp(17rem, 100%, 1fr);
  max-width: 100%;
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-35);
  border-radius: 40px;
  padding-inline: var(--spacing-120);
  padding-block: var(--spacing-50);
  border: 1px solid var(--blue-300);
  background: var(--grey-100);

  h3 {
    color: var(--brown-400);
    font-size: 1rem;
    font-weight: 900;
    line-height: 1.5;
    margin-block-end: var(--spacing-25);
  }

  p {
    color: var(--blue-600);
    font-size: 0.875rem;
    font-style: normal;
    line-height: 1.6;
    margin-block-end: var(--spacing-50);
  }
  @media (max-width: 62rem) {
    h3 {
      text-align: center;
    }
    div {
      justify-content: center;
    }
  }

  @media (max-width: 62rem) {
    flex-direction: column;
    width: 100%;
  }
`;

const StarRating = styled.div`
  display: flex;
  gap: var(--spacing-15);
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
  margin-block-start: 2rem;
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

const Error = styled.div`
  color: red;
  font-size: 1.5rem;
`;

export default Testimonials;
