import {useState} from 'react';
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

function App () {
//piece of state to hold the array of images returned by api
//default value is empty array
const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        const result = await searchImages(term);

        //need to add await to pause here
        //use setter to update state
        setImages(result);
    } 
    return (
        <div>
            <SearchBar onSubmit ={handleSubmit} />
            <div>
                <ImageList images ={images}/>
            </div>
        </div>
    );
}

export default App;