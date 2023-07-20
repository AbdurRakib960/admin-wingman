import { customersTabTitles, dateFilterOptions } from "../../utils/constant";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import usePricingQuery from "../../api-call/usePricingQuery";
import { GetCustomerFilter } from "../../context/CustomerFilterContext";

function CustomerTopSection() {
    const [state, dispatch] = GetCustomerFilter();
    return (
        <div>
            <div className="flex flex-col lg:flex-row flex-wrap gap-[16px] justify-between mb-[16px] 3xl:mb-[27px]">
                <div className="">
                    <h2 className="text-[22px] leading-[30px] font-medium lg:text-[28px] lg:leading-[40px] 3xl:text-[32px] 3xl:leading-[42px] lg:font-semibold text-text-primary">
                        Customers
                    </h2>
                </div>
            </div>
            {/* tab */}
            <ScrollContainer className="scroll-container">
                <ul className="flex gap-[32px] mb-[20px]">
                    {customersTabTitles.map((item, i) => (
                        <li
                            onClick={() => {
                                dispatch({ type: "status", value: item.value });
                            }}
                            key={i}
                            className={`${item.value === state.status
                                ? "text-primary border-b-2 border-indigo-500"
                                : "text-text-primary border-b-0"
                                } inline-block cursor-pointer px-[15px] py-[8px]  capitalize font-semibold text-[16px] sm:text-[18px] leading-[30px] whitespace-nowrap`}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            </ScrollContainer>
        </div>
    );
}



export default CustomerTopSection;
