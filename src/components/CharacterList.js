import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  const [query, setQuery] = useState("");
  useEffect(() => {
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {console.log(response.data)
          const data = response.data.results.filter(character =>
            character.name.toLowerCase().includes(query.toLowerCase())
          );
          setCharacters(data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getCharacters();
  }, [query]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
    <form className="search">
    <input
      type="text"
      onChange={handleInputChange}
      value={query}
      name="name"
      tabIndex="0"
      className="prompt search-name"
      placeholder="search by name"
      autoComplete="off"
    />
     </form>
    <section className="character-list">
      {characters.map(character => (
        <div>
        <CharacterCard
            name={character.name}
            image={character.image}
        />
        </div>
      ))}
    </section>
    </div>
    
  );
  
}
