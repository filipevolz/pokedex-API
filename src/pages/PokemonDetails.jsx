import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const PokemonDetails = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                const data = await response.json();
                setPokemon(data);
            } catch (error) {
                console.error('Error fetching Pokemon details:', error);
            }
        };

        fetchPokemon();
    }, [name]);

    const fetchAbilityDetails = async (abilityUrl) => {
        try {
            const response = await fetch(abilityUrl);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching ability details:', error);
            return null;
        }
    };

    const [abilityDetails, setAbilityDetails] = useState([]);

    useEffect(() => {
        if (pokemon) {
            const fetchData = async () => {
                const details = await Promise.all(
                    pokemon.abilities.map(async (ability) => {
                        const data = await fetchAbilityDetails(ability.ability.url);
                        return data;
                    })
                );
                setAbilityDetails(details);
            };
            fetchData();
        }
    }, [pokemon]);

    if (!pokemon) {
        return <Loading>Loading...</Loading>;
    }

    return (
        <Container>
            <Title>{pokemon.name}</Title>
            <Image src={pokemon.sprites.front_default} alt={pokemon.name} />
            <Section>
                <Subtitle>Moves:</Subtitle>
                <List>
                    {pokemon.moves.map((move, index) => (
                        <ListItem key={index}>{move.move.name}</ListItem>
                    ))}
                </List>
            </Section>
            <Section>
                <Subtitle>Abilities:</Subtitle>
                <List>
                    {abilityDetails.map((ability, index) => (
                        <ListItem key={index}>
                            {ability ? (
                                <>
                                    <strong style={{fontSize: 20}}>{ability.name}:</strong> {ability.effect_entries[0].short_effect}
                                </>
                            ) : (
                                'Loading...'
                            )}
                        </ListItem>
                    ))}
                </List>
            </Section>
            <Section>
                <Subtitle>Type:</Subtitle>
                <List>
                    {pokemon.types.map((type, index) => (
                        <ListItem key={index}>{type.type.name}</ListItem>
                    ))}
                </List>
            </Section>
                <Link to='/teste-teste'>
                    <CustomButton>Voltar para home</CustomButton>
                </Link>
        </Container>
    );
};

const Container = styled.div`  
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px;
`;

const Title = styled.h2`
    font-size: 40px;
    text-align: center;
    margin-bottom: 20px;
`;

const Image = styled.img`
    display: block;
    width: 200px;
    height: auto;
`;

const Section = styled.div`
    margin-bottom: 30px;
`;

const Subtitle = styled.h3`
    font-size: 24px;
    text-align: center;
    margin-bottom: 10px;
`;

const List = styled.ul`
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5px;
`;

const ListItem = styled.li`
    font-size: 18px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 10px;
    padding: 10px;
    color: #${props => props.theme.colors.primary};
`;

const Loading = styled.div`
    text-align: center;
    font-size: 20px;
    color: #666;
`;

const CustomButton = styled.button`
font-size: 20px;
border: 1px solid;
border-radius: 5px;
padding: 5px;
transition: 0.2s ease-in-out;
background: ${props => props.theme.colors.background};
color: ${props => props.theme.colors.text};

&:hover {
  cursor: pointer;
  transform: scale(1.2);
`

export {PokemonDetails};
