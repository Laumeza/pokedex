import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import InputName from './components/InputName'
import Pokemons from './components/Pokemons'
import PokemonDetail from './components/PokemonDetail'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {


  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<InputName />}/>

        <Route element={<ProtectedRoutes />}> 
        <Route path='/pokemons' element={<Pokemons />}/>
        <Route path='/pokemons/:id' element={<PokemonDetail />}/>
        </Route>
        
      </Routes>
    </HashRouter>
  )
}

export default App
