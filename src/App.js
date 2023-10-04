import './App.css';
import Header from './components/Header';
import characterResponse from './characters-response.json'
import CharacterGallery from "./components/CharacterGallery";
import {useState} from "react";

function App() {
    //const characters = characterResponse.results
    const [characters, setCharacters] = useState([])

    const handleClick = () => setCharacters(characterResponse.results)

    return <div>
        <Header title="Character Gallery"/>
        <button onClick={handleClick}>Load Characters</button>
        <CharacterGallery characters = {characters}/>
    </div>
}

export default App;