import './App.css';
import Header from './components/Header';
import CharacterGallery from './components/CharacterGallery';
import { useEffect, useState } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://rickandmortyapi.com/api/character');
      const jsonResult = await result.json();

      setCharacters(jsonResult.results);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header title="Character Gallery" />
      <CharacterGallery characters={characters} />
    </div>
  );
}

export default App;
