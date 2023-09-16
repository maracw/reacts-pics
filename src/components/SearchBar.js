import {useState} from 'react';

function SearchBar ({onSubmit}) {

    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        //DON'T DO THIS WAY
        //const term = document.getElementById('searchInput').value;
        //onSubmit(document.querySelector('input').value);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input 
                    id='searchInput' 
                    value={term}
                    onChange={handleChange}
                />
            </form>
        </div>
    );
}

export default SearchBar;