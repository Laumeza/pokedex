import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUserName } from '../store/Slices/userName.slice';

const InputName = () => {

    const dispatch = useDispatch();
    const [inputChangeUserName, setInputChangeUserName] = useState("");

    const navigate = useNavigate();

    const clickButton = () => {
        dispatch(changeUserName(inputChangeUserName));
        navigate('/pokemons')
    }
    
    return (
        <div className='home__container'>
            <img className="home__img" src="src/assets/images/pokedex-home.png" alt="" />
            <h1 className='home__title'>Hi trainer!</h1>
            <h2 className='home__message-instruccion'>Your first mision is: Write your name</h2>
            <div className='home__container-input-button'>
                <input
                    className='home__input' 
                    type="text" 
                    placeholder='Your name...'
                    value={inputChangeUserName}
                    onChange={e => setInputChangeUserName(e.target.value)}
                />
                <button
                    className='home__button' 
                    onClick={clickButton}
                >
                Go
                </button>
            </div>
            <div className='container__footer'>
                <div className='container__footer-start'></div>
                <div className='container__footer-end'></div>
                <div className='footer__circle-ext'></div>
                <div className='footer__circle-med'></div>
                <div className='footer__circle-center'></div>
            </div>
        </div>
    );
};

export default InputName;