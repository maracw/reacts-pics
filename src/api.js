// all the code related to api request to unsplash
import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID bOOVZHKeOqMFLCsct0BSrauIa_c6Lc1H_Vt8m7ejWKs'
        },
        params:{
            query: term,
        },
    });

    //after the await but inside the searchImages arrow function
    return response.data.results;
};

export default searchImages;