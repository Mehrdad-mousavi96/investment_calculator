import axios from "axios";

export default async function searchImages (term) {

    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID ukfOiBw1ABzM0QWXmJCoKSL5xHpvHXbc7yo2jYwSd88'
        },
        params: {query: term}
    })

    return response.data.results 
    
}