import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import images from "../Data";
import MoviesCard from "../Components/Movies-Card";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
  background: url("https://images.alphacoders.com/107/107763.jpg");
  height: 100vh;
  background-size: cover;
  overflow-y: scroll;
`;

const ContentWrapper = styled.div`
  width: 49.4%;
  height: auto;
  margin: 20px auto;
  opacity: 0.9;

  span {
    line-height: 40px;
    font-weight: bold;
    font-size: 18px;
  }

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 90%;
    span {
      line-height: 20px;
    }
  }
`;

const Movies = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://swapi.dev/api/films/");
      const movieImg = images;
      const result = res.data.results.map((item, index) => {
        return {
          ...item,
          img: movieImg[index],
        };
      });
      setMovies(result);
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        {movies &&
          movies.map((mov) => {
            return (
              <MoviesCard
                title={mov.title}
                picture={mov.img.img}
                director={mov.director}
                produc={mov.producer}
                date={mov.release_date}
                about={mov.opening_crawl}
                key={mov.title}
              />
            );
          })}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Movies;
