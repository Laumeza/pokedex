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

    const getBackground = () => {
        let type = pokemonDetail.types?.[0].type.name
        switch (type) {
            case "normal":
                return "#B19176"
                break;
            case "fighting":
                return "#C03636"
                break;
            case "flying":
                return "#568AA8"
                break;
            case "poison":
                return "#964BC2"
                break;
            case "ground":
                return "#722F03"
                break;
            case "rock":
                return "#81404B"
                break;
            case "bug":
                return "#0FCCB3"
                break;
            case "ghost":
                return "#CD40F8"
                break;
            case "steel":
                return "#D6D3D3"
                break;
            case "fire":
                return "#C51821"
                break;
            case "water":
                return "#2697F3"
                break;
            case "grass":
                return "#1F8A70"
                break;
            case "electric":
                return "#CAAF36"
                break;
            case "psychic":
                return "#FA7E93"
                break;
            case "ice":
                return "#B9E3F3"
                break;
            case "dragon":
                return "#FA4801"
                break;
            case "dark":
                return "gray"
                break;
            case "fairy":
                return "pink"
                break
        }
    }

    return (
        <div>
            <nav>
                <img className="pokedex__img" src="src/assets/images/pokedex-home.png" alt="" />
                <div className='container__footer-start'></div>
                <div className='container__footer-end'></div>
            </nav>
            <div style={{background: `linear-gradient(to bottom, white, #CAE099, ${getBackground()})`}}className='container__detail-pokemon'>
                <img width={"270px"} src={pokemonDetail.sprites?.other.home.front_default} alt=""/>
                <h1 style={{color: `${getBackground()}`}}>#{pokemonDetail.id}</h1>
                <h2 style={{color: `${getBackground()}`}}>{ pokemonDetail.name }</h2>
                <div className='section__info-pokemon'>
                    <h3>
                        Weight
                        <span>{pokemonDetail.weight}</span>
                    </h3>
                    <h3>
                        Height
                        <span>{pokemonDetail.height}</span>
                    </h3>
                </div>
                    <ul>
                        Type
                        <li>{pokemonDetail.types?.[0].type.name}</li>
                        <li>{pokemonDetail.types?.[1].type.name}</li>
                    </ul>
               
                <ul>
                    Abilities
                    <li>
                        {
                                pokemonDetail.abilities?.map(abilities => (
                                    abilities.ability.name
                                ))
                        }
                    </li>
                </ul>
                <div>
                    <h3>Stats</h3>
                    <ul>
                        <li>HP</li>
                        <li>Stroke</li>
                        <li>Defense</li>
                        <li>Velocity</li>
                    </ul>
                </div>
                <div>
                    <h3>Movements</h3>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetail;    