import React, { useState } from "react";
import classNames from "classnames";

type NavProps = {
    title: string;
    setFilterValue?: any;
};
const TopNav = ({
    title,
    setFilterValue,
}: NavProps) => {
    const handleFilterChange = (newValue: any) => {
        setFilterValue(newValue.value);
        console.log(newValue, "new value");
    };
    const handleChange = (newValue: any) => { };
    return (
        <div
            className={classNames(
                "flex flex-col lg:flex-row mb-[16px] lg:mb-[24px] 3xl:mb-[19px]",
                title ? "justify-between" : "justify-end"
            )}
        >
            {title && (
                <p className="text-[#252C48] lg:pt-[10px] text-[22px] leading-[30px] font-medium lg:text-[28px] lg:font-semibold capitalize 3xl:text-[32px] mb-[16px] lg:mb-0 mt-[16px]  lg:mt-0">
                    {title}
                </p>
            )}
        </div>
    );
};

export default TopNav;
