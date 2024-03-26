import { useEffect, useState } from 'react';
import Pokemon from '../pokemon/index.jsx';
import styled from 'styled-components';
import ButtonAddPokes from '../button-add-pokes/index.jsx';

const limit = 10

async function getPokes() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
  const data = await response.json()
  return data.results
}

const PokesList = () => {

  const [ pokeList, setPokeList] = useState({
    pokemons: []
  })

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokes()
      setPokeList({
        pokemons: data
      })
    }
    fetchData()
  }, [])

  const addPokes = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${pokeList.pokemons.length}`);
      const data = await response.json();
      setPokeList(prevState => ({
        pokemons: [...prevState.pokemons, ...data.results]
      }));
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  }


  return(
    <SectionPokes>
      <PokemonList>
        {
          pokeList.pokemons.map((poke, index) => {
                return (
                    <Pokemon 
                    key={index}
                    name={poke.name}
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                    />
                )
          })
        }
      </PokemonList>

      <ButtonAddPokes addPokes={addPokes}/>
    </SectionPokes>
  )
}

const SectionPokes = styled.section`
  text-align: center;
`;

const PokemonList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center; 
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export default PokesList;
