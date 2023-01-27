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

    const getBackground = () => {
        let type = pokemon.types?.[0].type.name
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
        <div style={{background: `linear-gradient(to bottom, white, #CAE099, ${getBackground()})`, border: "solid 6px white"}} className='card' onClick={() => navigate(`/pokemons/${pokemon.id}`)}>
            <div className='card' >
            <img className='card__img' src={pokemon.sprites?.other.home.front_default} alt="" />
            <b className='card__tittle' style={{color: getBackground()}}>{pokemon.name}</b>
            <ul className='card__section-type'>
                <li className='card__section-type'>
                    {pokemon.types?.map(nameType =>(
                        nameType.type.name
                    ))
                    }
                </li>
            </ul>
            <h2>Type</h2>
            <hr color='#E5E5E5' />
            </div>
            <div className='card__section-info'>
                <p><span>HP</span> 59</p>
                <p><span>STROKE</span> 20</p>
                <p><span>DEFENSE</span> 49</p>
                <p><span>VELOCITY</span> 45</p>
            </div>
            
        </div>
    );
};

export default PokemonCard;