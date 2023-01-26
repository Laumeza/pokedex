import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {

    const { id } = useParams();

    const [pokemonDetail, setPokemonDetail] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemonDetail(res.data))
            .catch(() => alert("!Pokemon doesn't found! Try again"))
    }, [ ])

    return (
        <div>
            <h1>Detalle del Pokemon</h1>
            <h2>{ pokemonDetail.name }</h2>
            <img src={pokemonDetail.sprites?.front_shiny
} alt="" />
        </div>
    );
};

export default PokemonDetail;    