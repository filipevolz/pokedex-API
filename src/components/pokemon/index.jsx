import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PokeContainer = styled.li`
  margin-bottom: 20px;
  padding: 35px;
  border-radius: 10px;
  box-shadow: 10px 10px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  color:red;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PokeImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const PokeName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

const Pokemon = ({ name, image }) => {


  return (
    <PokeContainer>
      <Link to={`/pokemon/${name}`}>
        <PokeImage src={image} alt={name} />
        <PokeName>{name}</PokeName>
      </Link>
    </PokeContainer>
  );
};

export default Pokemon;
