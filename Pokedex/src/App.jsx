import { Routes, Route } from "react-router-dom"
import Pokedex from "./components/Pokedex/Pokedex"
import PokemonDetails from "./components/PokemonDetails/PokemonDetails"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  )
}

export default App
