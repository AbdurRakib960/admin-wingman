import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";

import useTransactionsQuery from "../api-call/useTransactionsQuery";
import { useQuery } from "react-query";
import TransactionPageTable from "../components/TransactionsPage/TransactionPageTable";

const transOptions = [
    { value: "month", label: "This month" },
    { value: "hour", label: "Last hour" },
    { value: "week", label: "Last week" },
    { value: "year", label: "Last year" },
];

export const BILLING_KEY = "BillingHistory";

const Transactions = () => {

    const { data, isLoading } = useTransactionsQuery();

    return (
        <DefaultLayout>
            <div className="px-[16px] lg:px-[24px] 3xl:px-[32px] pb-[16px] lg:pb-[76px]">
                <div className="lg:pt-[36px]">
                    <div className="flex flex-col lg:flex-row mb-[16px] lg:mb-[24px] 3xl:mb-[19px] justify-between">
                        <div className="flex items-center gap-[24px]">
                            <p className="text-text-primary lg:pt-[10px] text-[22px] leading-[30px] font-medium lg:text-[28px] lg:font-semibold capitalize 3xl:text-[32px] mb-[16px] lg:mb-0 mt-[16px]  lg:mt-0">
                                Transactions
                            </p>
                            <div className="text-text-primary lg:pt-[10px] text-[18px] leading-[22px] font-medium lg:text-[20px] lg:font-semibold capitalize 3xl:text-[28px] mb-[16px] lg:mb-0 mt-[16px]  lg:mt-0">Sold plan : <span className="text-[16px] text-text-primary bg-primary p-[4px] rounded-full">10</span> </div>
                        </div>

                    </div>
                </div>
                <div className="relative">
                    <TransactionPageTable data={data} isLoading={isLoading} />
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Transactions;
