import axios from 'axios';

import{API_END_POINTS} from "../../../services/index"

const searchTattoos = async (searchTerm, selectedPlacement, selectedCategory) => {
    try {
        const response = await axios.get(`${API_END_POINTS.SEARCH_TATTOOS}/${encodeURIComponent(searchTerm)}`);
        if (response.data.success) {
            return response.data.tattoos.filter((tattoo) => {
                const placementMatches = selectedPlacement ? tattoo.placement?.name === selectedPlacement : true;
                const categoryMatches = selectedCategory ? tattoo.categories?.name === selectedCategory : true;
                return placementMatches && categoryMatches;
            });
        }
    } catch (error) {
        console.error("Error searching tattoos:", error);
        throw error; 
    }
};

const sortTattoos = async (sortBy) => {
    try {
        const response = await fetch(`${API_END_POINTS.SORT_TATTOOS_FILTER}?sortBy=${sortBy}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching sorted tattoos:", error);
        throw error; 
    }
};

export { searchTattoos, sortTattoos };
