import React, { InputHTMLAttributes } from "react";

type PricingInputType = {
    label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

function PricingInput({ label, className, ...rest }: PricingInputType) {
    return (
        <div>
            <label className="lg:leading-[30px] lg:text-[22px] xs:leading-[22px] xs:text-[14px] font-[500] text-text-primary mb-2">
                {label}
            </label>
            {label && <div className="pt-[8px]"></div>}
            <div>
                <input
                    className={`rounded-[6px]  w-full h-[48px] bg-[#18191C]  focus:outline-[#0E1013] text-text-primary placeholder:text-text-primary placeholder:font-[400] placeholder:text-[14px] text-[14px] font-[400] px-4 py-3 border-[#BDC1C6] border-[1px] focus:outline-none ${className} `}
                    {...rest}
                />
            </div>
        </div>
    );
}

export default PricingInput;
