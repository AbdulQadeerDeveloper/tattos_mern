import { useEffect, useState } from 'react';
import axios from 'axios';
import {API_END_POINTS} from "../../../../services/index"
const useSearchFilter = (currentTattoos, backendUrl) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredTattoos, setFilteredTattoos] = useState(currentTattoos); 

    useEffect(() => {
        const filterTattoos = async () => {
            try {
                // Assuming your backend does the heavy lifting of filtering
                const { data: backendFilteredTattoos } = await axios.get(`${API_END_POINTS.SEARCH_TATTOOS}/${encodeURIComponent(searchTerm)}`);
                setFilteredTattoos(backendFilteredTattoos);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (searchTerm) {
            filterTattoos();
        } else {
            // If searchTerm is empty, show all tattoos
            setFilteredTattoos(currentTattoos);
        }
    }, [searchTerm, currentTattoos, backendUrl]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return { filteredTattoos, handleSearch };
};

export default useSearchFilter;
