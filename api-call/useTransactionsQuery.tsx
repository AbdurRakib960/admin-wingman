import { useQuery } from "react-query";
import { api } from "../api";

const CUSTOMER_QUERY_KEY = "transaction-query-key";

const useTransactionsQuery = () =>
    useQuery<any[]>([CUSTOMER_QUERY_KEY], {
        queryFn: async () => {
            const { data } = await api.get(`/payment/billing`);
            return data;
        },
    });


export default useTransactionsQuery;
