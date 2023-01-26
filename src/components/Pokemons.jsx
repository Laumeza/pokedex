import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';

const Pokemons = () => {

    const userName = useSelector(state => state.userName);
    const navigate = useNavigate();

    const [ pokemons, setPokemons ] = useState([]);
    const [ inputSearch, setInputSearch ] = useState("");
    const [ pokemonsTypes, setPokemonsTypes] = useState([]);
    
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&&limit=1279/`)
            .then(res => setPokemons(res.data.results));

        axios.get(`https://pokeapi.co/api/v2/type/`)
            .then(res => setPokemonsTypes(res.data.results));
    }, [])

    const search = () =>{
        navigate(`/pokemons/${inputSearch.toLowerCase()}`)
    }
    
    const filterTypes = e => {
        axios.get(e.target.value)
            .then(res => setPokemons(res.data.pokemon))
    }

    const [page, setPage] = useState(1);
    const pokemonsPerPage = 20
    const lastIndex = pokemonsPerPage * page
    const pokemonspaginated = pokemons.slice(lastIndex-pokemonsPerPage, lastIndex)
    const lastPage = Math.ceil(pokemons.length/pokemonsPerPage)

    return (
        <div>
            <nav>
                <img className="pokedex__img" src="src/assets/images/pokedex-home.png" alt="" />
                <div className='container__footer-start'></div>
                <div className='container__footer-end'></div>
            </nav>
                <p><span>Welcome {userName}</span>, here you will find your favorite pokemon!</p>
            
            <div className='container__search-filter'>
                <div className='container__search'>
                    <input 
                        className='input__search'
                        type="text"
                        placeholder='Search Pokemon'
                        value={inputSearch}
                        onChange={e => setInputSearch(e.target.value)}
                    />
                    <button
                        className='input__button'
                        onClick={search}
                    >
                        Search
                    </button>
                    </div >
                    <div className='container__filter'>
                        <select onChange={filterTypes} name="" id="">
                            {pokemonsTypes.map(type => (
                                    <option value={type.url} key={type.url}>
                                        {type.name}
                                    </option>
                            ))}
                    
                        </select>
                    </div>
            </div>
            <ul className='list__pokemons'>
                {
                    pokemonspaginated.map(pokemon => (
                        <PokemonCard 
                            url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                            key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                        />
                    ))
                }
            </ul>
            <button 
                onClick={() => setPage(page-1)}
                disabled={page===1}
            >
                <i className='bx bxs-skip-previous-circle' ></i>
            </button>
            {page}
            {"/"}
            {lastPage}
            <button 
                onClick={() => setPage(page+1)}
                disabled={page===lastPage}
            >
                <i className='bx bxs-skip-next-circle'></i>
            </button>
        </div>
    );
};

export default Pokemons;