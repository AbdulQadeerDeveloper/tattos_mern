import { useEffect, useState, useCallback } from 'react';
import axios from "axios";
import { API_END_POINTS } from "../../../../services/index";

const useTattoos = (activePage, pageSize) => {
    const [data, setData] = useState([]);
    const [totalRecords, setTotalRecords] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const fetchTattoos = useCallback(() => {
        setIsLoading(true);
        axios.get(API_END_POINTS.GET_TATTOOS_PAGINATION, {
            params: {
                page: activePage,
                size: pageSize
            }
        }).then(({ data }) => {
            setData(data.records);
            setTotalRecords(data.total);
            setIsLoading(false);
        }).catch(error => {
            console.error("Error fetching paginated tattoos:", error);
            setIsLoading(false);
        });
    }, [activePage, pageSize]);

    useEffect(() => {
        fetchTattoos();
    }, [fetchTattoos]);

    return { data, totalRecords, isLoading, refetch: fetchTattoos };
};

export default useTattoos