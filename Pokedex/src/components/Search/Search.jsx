import useDebounce from '../../hooks/useDebounce';
import './Search.css';

function Search({updateSearchTerm}){

    const debounceUPdateSearch = useDebounce((e) => updateSearchTerm(e.target.value));

    return (
        <input 
            id='sarch-pokemon'
            type='text'
            placeholder='which pokemon are you looking for?'
            onChange={debounceUPdateSearch}
        />
    )
}

export default Search;