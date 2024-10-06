// CSS imports
import useDebounce from '../../hooks/useDebounce';
import './Search.css';

function Search({ updateSearchTerm }) {
    const debounceUpdateSearch = useDebounce((e) => updateSearchTerm(e.target.value));
    return (
        <input 
        className='text-4xl'
            id='search-pokemon'
            type="text" 
            placeholder=" Search Your favourite Pokeomn ... " 
            onChange={debounceUpdateSearch}
        />
    )
}

export default Search;