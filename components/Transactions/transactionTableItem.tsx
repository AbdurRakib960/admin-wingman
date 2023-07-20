/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { OutSideClick } from "../Shared/OutSideCilck";
import RefundModal from "../Modal/RefundModal";
import TransactionDetailsModal from "../Modal/TransactionDetailModal";
import Moment from "react-moment";
import Link from "next/link";

const TransactionTableItem = ({ item, index, isDashboard }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const [openRefundModal, setOpenRefundModal] = useState<boolean>(false);

    const [openTransactionModal, setOpenTransactionModal] =
        useState<boolean>(false);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleRefund = async (setLoading: any) => {
        setLoading(false);
        setOpenRefundModal(false);
    };

    return (
        <>
            <tr
                className={classNames(
                    "whitespace-nowrap",
                    index % 2 === 0 ? "bg-[#BDC1C6]" : "bg-[#E8EAED]"
                )}
            >
                <th
                    scope="row"
                    className="px-6 py-4  text-[#3B415A] text-[14px] font-normal"
                >
                    <p className="w-[100px] xl:w-[120px] truncate">
                        {item?.firstName} {item?.lastName}
                    </p>
                </th>
                <td className="px-6 py-4  text-[14px] font-normal">
                    <p className="w-[160px]  xl:w-[200px] truncate text-primary">
                        {item.email}
                    </p>
                </td>
                <td className="px-6 py-4 text-[#3B415A] text-[14px] font-normal">
                    {item?.name}
                </td>
                <td className="px-6 py-4 text-[#3B415A] text-[14px] font-normal">
                    <Moment format="Do MMM YYYY">{item?.start}</Moment>{" "}
                </td>
                <td className="px-6 py-4 text-[#3B415A] text-[14px] font-normal">
                    <Moment format="Do MMM YYYY">{item?.end}</Moment>{" "}
                </td>
                <td className="px-6 py-4 text-primary text-[14px] font-normal">
                    {item.left}  days
                </td>
                <td className="px-6 py-4 text-primary text-[14px] font-normal">
                    {item.expire === true ? "Yes" : "No"}
                </td>
                {/* <td className="px-6 py-4 text-[#3B415A] text-[14px] font-normal">
                    {item.amount}
                </td> */}
            </tr>

        </>
    );
};

export default TransactionTableItem;
