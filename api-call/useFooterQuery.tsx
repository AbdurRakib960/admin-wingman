import { UseQueryOptions, useQuery } from "react-query";
import { api } from "../api";

const FOOTER_KEY = "footer-query-key";

const useFooterQuery = () =>
    useQuery<any>([FOOTER_KEY], {
        queryFn: async () => {
            const { data } = await api.get(`/footer`);
            return data;
        }
    });

export default useFooterQuery;
