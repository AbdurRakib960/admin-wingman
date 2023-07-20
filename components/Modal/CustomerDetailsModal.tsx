/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import CusstomerDetailCustomModal from "./CustomerCustomModal";
import CustomerInfo from "../Customers/CustomerInfo/index";
import { CustomerDataType } from "../../api-call/userCustomerQuery";
import usePaymentMethod from "../../api-call/usePaymentMethod";
import CrossIcon from "../CustomSvg/CrossIcon";

type CustomerDetailModalType = {
    isOpen: boolean;
    handleModal: () => void;
    data: CustomerDataType;
};

function CustomerDetailsModal({
    isOpen,
    handleModal,
    data,
}: CustomerDetailModalType) {

    return (
        <CusstomerDetailCustomModal
            isOpen={isOpen}
            onRequestClose={handleModal}
            className="w-[calc(100vw-40px)] max-w-[479px] bg-white rounded-[6px] modal-scroll overflow-hidden bg-[#2E3134]"
        >
            <div className="p-[24px]">
                <div className="flex items-center justify-between">
                    <h1 className="text-[18px] lg:text-[22px] leading-[30px] font-medium text-text-primary">
                        Customer Details
                    </h1>
                    <div onClick={handleModal} className="cursor-pointer">
                        <CrossIcon width={15} height={15} stroke="white" />
                    </div>
                </div>
                {/* <ProductDetails/> */}
                <CustomerInfo customer={data} />

            </div>
        </CusstomerDetailCustomModal>
    );
}

export default CustomerDetailsModal;
