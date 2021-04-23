import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Images from "../SpeciesImg";
import SpeciesCard from "../Components/Species-card";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
  background: url("https://images.alphacoders.com/107/107763.jpg");
  height: 100vh;
  background-size: cover;
  overflow-y: scroll;
`;

const Species = () => {
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://swapi.dev/api/species/");
      const speciesImg = Images;
      const result = res.data.results.map((item, index) => {
        return {
          ...item,
          img: speciesImg[index],
        };
      });
      setSpecies(result);
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Header />
      {species &&
        species.map((data) => {
          return (
            <SpeciesCard
              img={data.img.img}
              name={data.name}
              classi={data.classification}
              height={data.average_height}
              life={data.average_lifespan}
              lang={data.language}
              skin={data.skin_colors}
              eye={data.eye_colors}
              hair={data.hair_colors}
              des={data.designation}
              key={data.name}
            />
          );
        })}
    </Wrapper>
  );
};

export default Species;
