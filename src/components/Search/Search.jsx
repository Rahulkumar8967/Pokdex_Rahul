import { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import './Search.css';

const pokemonSuggestions = [
    'Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle', 'Eevee', 
    'Jigglypuff', 'Snorlax', 'Gengar', 'Meowth', 'Psyduck'
];

function Search({ updateSearchTerm }) {
    const [suggestions, setSuggestions] = useState([]);
    const debounceUpdateSearch = useDebounce((e) => {
        const searchTerm = e.target.value.toLowerCase();
        updateSearchTerm(searchTerm);

        // Filter suggestions based on input
        const filteredSuggestions = pokemonSuggestions.filter(pokemon => 
            pokemon.toLowerCase().includes(searchTerm)
        );
        setSuggestions(filteredSuggestions);
    }, 300);

    return (
        <div className="suggestions-container">
            <input 
                id='search-pokemon'
                type="text" 
                placeholder="Search Your favourite Pokemon ..." 
                onChange={debounceUpdateSearch}
            />
            {suggestions.length > 0 && (
                <ul className="suggestions-list">
                    {suggestions.map((pokemon, index) => (
                        <li key={index} className="suggestion-item">
                            {pokemon}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Search;
