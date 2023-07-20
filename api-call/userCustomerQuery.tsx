import { useQuery } from "react-query";
import { api } from "../api";
import { CustomerFilterType } from "../context/CustomerFilterContext";

const CUSTOMER_QUERY_KEY = "customer-query-key";

const useCustomerQuery = (filterData?: CustomerFilterType) =>
    useQuery<any[]>([CUSTOMER_QUERY_KEY], {
        queryFn: async () => {
            const { data } = await api.get(`/user`);
            return data;
        },
        select(data) {
            if (!filterData) return data;
            let newData = data;



            if (filterData.status) {
                newData =
                    filterData.status === "all"
                        ? newData
                        : newData.filter(
                            (v) => v.status == filterData.status
                        );
            }



            return newData;
        },
    });

interface UserId {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    profile: string;
    googleAuth: boolean;
    status: string;
    userStore: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

interface CurrentPlan {
    _id: string;
    userId: string;
    planName: string;
    planPrice: number;
    interval: string;
    downloadLimit: number;
    planStart: Date;
    planEnd: Date;
    priceId: string;
    isTrial: boolean;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export interface CustomerDataType {
    _id: string;
    userId: UserId;
    customerId: string;
    notifications: any[];
    wishList: any[];
    downloadProducts: any[];
    freebieUse: boolean;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    currentPlan?: CurrentPlan;
}

export default useCustomerQuery;
