import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({url}) => {

    const [pokemon, setPokemon] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data));
    }, []);

    return (
        <div className='card' onClick={() => navigate(`/pokemons/${pokemon.id}`)}>
            <img className='card__img' src={pokemon.sprites?.other.home.front_default} alt="" />
            <b className='card__tittle'>{pokemon.name}</b>
            <div className='card__type'>
                <p className='card__type'>{pokemon.types[0]?.type?.name}</p>
                /
                <p className='card__type'>{pokemon.types[1]?.type?.name}</p>
            </div>
            <div>
                <p>HP 59</p>
                <p>STROKE 20</p>
                <p>DEFENSE 49</p>
                <p>VELOCITY 45</p>
            </div>
        </div>
    );
};

export default PokemonCard;