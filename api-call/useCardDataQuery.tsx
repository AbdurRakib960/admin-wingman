import { useQuery } from 'react-query';
import { api } from "../api";

const CARD_KEY = 'card-data-key';

const useCardDataQuery = () =>
    useQuery<any>([CARD_KEY], {
        queryFn: async () => {
            const { data } = await api.get(`/card-data`);
            return data;
        },
    });

export default useCardDataQuery;
