import Pagination from "../../../components/Pagination";
import React from "react";
import { customerTableHead } from "../../../utils/constant";
import TableItem from "../CustomerTableItem";
import LoadingAnimation from "./../../CustomSvg/LoadingAnimation2";
import useCustomerQuery from "../../../api-call/userCustomerQuery";
import { GetCustomerFilter } from "../../../context/CustomerFilterContext";

const CustomersTable = () => {
    const [state] = GetCustomerFilter();
    const { isLoading, data } = useCustomerQuery(state);
    console.log(data, "customer data ____")

    return (
        <>
            <Pagination
                dataArr={data || []}
                itemsPerPage={10}
                className="!justify-end pt-5 lg:pt-[40px]"
            >
                {(data) => (
                    <div className="bg-[#202124] p-[16px] lg:p-[24px] rounded-[6px]">
                        <div className="modal-scroll rounded-[6px]">
                            <table className="w-full text-[14px] text-left text-text-primary">
                                <thead className="text-[14px] text-text-primary font-semibold capitalize bg-[#110C19]">
                                    <tr>
                                        {customerTableHead.map(
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
                                    {data && data?.length > 0 ? (
                                        data?.map((item, i) => (
                                            <TableItem
                                                item={item}
                                                index={i}
                                                key={i}
                                            />
                                        ))
                                    ) : isLoading ? (
                                        <tr>
                                            <td className="px-6 py-4">
                                                <div className="flex gap-3 item-center">
                                                    <LoadingAnimation color="#333" />
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
        </>
    );
};

export default CustomersTable;
