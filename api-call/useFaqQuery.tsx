import { useQuery } from "react-query";
import { api } from "../api";

const useFaqQuery = () =>
    useQuery(["get all faq"], {
        queryFn: async () => {
            const { data } = await api.get(`/faq`);
            return data;
        },
    });

export default useFaqQuery;