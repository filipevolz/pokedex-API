import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PokemonList } from './PokemonList.jsx'
import { PokemonDetails } from "./PokemonDetails.jsx"

const AppRoutes = () => (
        <BrowserRouter>
               <Routes>
                    <Route exact path='/pokedex-API' element={ <PokemonList /> } />
                    <Route exact path='/pokemon/:name' element={ <PokemonDetails /> } />
                </Routes>
        </BrowserRouter>
)

export { AppRoutes }