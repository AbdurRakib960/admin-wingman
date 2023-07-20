import LoadingAnimation from "../../components/CustomSvg/LoadingAnimation2";
import Pagination from "../../components/Pagination";
import TransactionTableItem from "../../components/Transactions/transactionTableItem";
import { transactionsTableHead } from "../../utils/constant";
import React from "react";

function TransactionPageTable({ data, isLoading }: any) {
    return (
        <Pagination
            className="pt-[40px] pb-[52px] !justify-end "
            dataArr={data || []}
            itemsPerPage={10}
        >
            {(currentItems) => (
                <div className="bg-[#202124] relative p-[16px] lg:p-[24px] rounded-[6px]">
                    <div className="modal-scroll rounded-[6px]">
                        <table className="w-full text-[14px] text-left text-text-primary">
                            <thead className="text-[14px] text-text-primary font-semibold capitalize bg-[#110C19]">
                                <tr>
                                    {transactionsTableHead.map(
                                        (item, index) => (
                                            <th
                                                key={index}
                                                scope="col"
                                                className="whitespace-nowrap px-[20px] py-[18px] text-[14px] font-semibold text-text-primary"
                                            >
                                                {item}
                                            </th>
                                        )
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.length ? (
                                    currentItems.map((item, index) => (
                                        <TransactionTableItem
                                            item={item}
                                            index={index}
                                            key={index}
                                        />
                                    ))
                                ) : isLoading ? (
                                    <tr>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-3 item-center">
                                                <LoadingAnimation color="#F92C5D" />
                                                <div>Loading...</div>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    <tr>
                                        <td className="px-6 py-4">
                                            <div>No Data Found</div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </Pagination>
    );
}

export default TransactionPageTable;
