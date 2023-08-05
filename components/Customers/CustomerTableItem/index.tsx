/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import React, { useState } from "react";
import { OutSideClick } from "../../Shared/OutSideCilck";
import BannedUserModal from "../../Modal/BannedUser";
import CustomerDetailsModal from "../../Modal/CustomerDetailsModal";
import { AnimatePresence } from "framer-motion";
import { api } from "../../../api";
import { useQuery } from "react-query";
import useCustomerQuery, {
    CustomerDataType,
} from "../../../api-call/userCustomerQuery";
import Moment from "react-moment";
import { toast } from "react-toastify";

type TableItemType = {
    item: any;
    index: number;
};

const TableItem = ({ item, index }: TableItemType) => {
    const [isOpen, setIsOpen] = useState(false);
    const { refetch } = useCustomerQuery();
    const [openBannedModal, setOpenBannedModal] = useState<boolean>(false);
    const [openCustomerDetailModal, setOpenCustomerDetailModal] =
        useState<boolean>(false);

    const handleMenu = (id: any) => {
        setIsOpen(!isOpen);
    };

    const handleBannedUser = async (data: any, setLoading: any) => {
        console.log(data, "_banned user data..")
        const status = data?.status;
        const plan = data?.name;
        setLoading(true);
        try {
            if (status === "active" || "inactive") {
                await api.put(`/user/status/${data?._id}`, {
                    status: "banned",
                });
            }
            // if (!plan && status === "banned") {
            //     await api.put(`/users/${data?._id}`, {
            //         status: "inactive",
            //     });
            // }
            if (status === "banned") {
                await api.put(`/user/status/${data?._id}`, {
                    status: "active",
                });
            }
            refetch();
            setLoading(false);
            setOpenBannedModal(false);
        } catch (error) {
            setLoading(false);
            toast.error(`Something went wrong`)
            console.log("Failed to banned user");
        }
    };


    return (
        <>
            <tr
                className={classNames(
                    "whitespace-nowrap ",
                    index % 2 === 0 ? "bg-[#BDC1C6]" : "bg-[#E8EAED]"
                )}
            >
                <th
                    scope="row"
                    className="px-6 py-4  text-[#3B415A] text-[14px] font-normal"
                >
                    <p className="w-[100px] xl:w-[120px] truncate">{`${item?.firstName} ${item?.lastName}`}</p>
                </th>

                <td className="px-6 py-4 text-primary text-[14px] font-normal">
                    <p className="w-[160px]  xl:w-[200px] truncate">
                        {item?.email}
                    </p>
                </td>
                <td className="px-6 py-4 text-[#3B415A] text-[14px] font-normal">
                    <Moment format="DD MMM YYYY">{item.createdAt}</Moment>
                </td>
                <td className="relative px-6 py-4 text-primary text-[14px] font-normal">
                    <div className="flex items-center justify-between ">
                        <h1>
                            {item?.customer ? item?.customer : "Unverified user"}
                        </h1>
                        <img
                            src="/images/three-dot.svg"
                            alt="edit"
                            onClick={() => handleMenu(item?._id)}
                            className="cursor-pointer w-[16px] h-[16px]"
                        />
                    </div>
                </td>
                <td>
                    <AnimatePresence initial={false}>
                        {isOpen && (
                            <OutSideClick
                                onOutSideClick={() => setIsOpen(false)}
                            >
                                <div
                                    className="bg-[#ffffff] w-[209px] rounded-[6px] absolute mt-[12px] right-[70px] lg:right-[88px] z-[1]"
                                    style={{
                                        boxShadow:
                                            "2px 2px 16px rgba(0, 0, 0, 0.08)",
                                    }}
                                >
                                    <ul className="text-normal text-[14px] flex flex-col  leading-[22px] text-[#3B415A]">
                                        <li
                                            onClick={() => {
                                                setOpenCustomerDetailModal(
                                                    !openCustomerDetailModal
                                                );
                                                setIsOpen(!isOpen);
                                            }}
                                            className="p-[16px] cursor-pointer transition-all duration-100 hover:bg-primary hover:text-[white]"
                                        >
                                            Customer Details
                                        </li>
                                        <li
                                            onClick={() => {
                                                setOpenBannedModal(
                                                    !openBannedModal
                                                );
                                                setIsOpen(!isOpen);
                                            }}
                                            className="p-[16px] cursor-pointer transition-all duration-100 hover:bg-primary hover:text-[white]"
                                        >
                                            {item?.status === "banned"
                                                ? "Unbanned User"
                                                : "Banned User"}
                                        </li>
                                    </ul>
                                </div>
                            </OutSideClick>
                        )}
                    </AnimatePresence>
                </td>
            </tr>
            <div>
                <div>
                    <BannedUserModal
                        data={item}
                        isOpen={openBannedModal}
                        onYesClick={handleBannedUser}
                        handleModal={() => setOpenBannedModal(!openBannedModal)}
                    />
                </div>
                <div>
                    <CustomerDetailsModal
                        data={item}
                        isOpen={openCustomerDetailModal}
                        handleModal={() =>
                            setOpenCustomerDetailModal(!openCustomerDetailModal)
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default TableItem;
