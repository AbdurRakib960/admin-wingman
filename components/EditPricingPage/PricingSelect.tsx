import React from "react";
import Select, { ActionMeta, StylesConfig, Props } from "react-select";

type PricingSelectType = {
    label?: string;
} & Props;

export type SelectOption = {
    value: string;
    label: string;
};

function PricingSelect({ label, ...props }: PricingSelectType) {
    const styles: StylesConfig = {
        control: (base: any, state: any) => ({
            ...base,
            border: "1px solid #BDC1C6",
            borderRadius: "6px",
            paddingLeft: "15px",
            paddingRight: "0px",
            cursor: "pointer",
            boxShadow: "none",
            ":focus": {
                borderColor: "#BDC1C6",
            },
            minWidth: 155,
            minHeight: 48,
            background: "#18191C",
            ":hover": {
                borderColor: "#BDC1C6",
            },
        }),
        singleValue: (styles) => ({
            ...styles,
            lineHeight: 1,
            fontSize: 14,
            fontWeight: 400,
            color: "#FDFCFF",
        }),
        input: (styles) => ({
            ...styles,
            opacity: 0,
            padding: 0,
            margin: 0,
            fontSize: 14,
            ":focus": {
                outline: "none",
            },
            placeContent: "Filter",
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            fontSize: "14px",
            paddingLeft: "20px",
            backgroundColor: state.isSelected ? "#202124" : "#BDC1C6",
            fontWeight: 400,
            color: state.isSelected ? "#E8EAED" : "#3B415A",
            width: "100%",
            lineHeight: 1,
            margin: "0 auto",
            cursor: "pointer",
            ":hover": {
                background: state.isSelected ? "#110C19" : "#110C19",
                color: state.isSelected ? "#E8EAED" : "#E8EAED",
            },
        }),
        indicatorSeparator: (provided: any) => ({
            display: "none",
        }),
        menu: (styles) => ({
            ...styles,
            marginTop: 2,
        }),
        dropdownIndicator: (base, state: any) => ({
            ...base,
            transform: state.selectProps.menuIsOpen && "rotate(180deg)",
            color: "#E8EAED",
            fontWeight: 200,
            ":hover": {},
        }),
        placeholder: (base) => ({ ...base, fontSize: 14, color: "#E8EAED" }),
        valueContainer: (styles) => ({
            ...styles,
            paddingTop: 5,
            paddingBottom: 5,
            paddingRight: 0,
            paddingLeft: 0,
        }),
        container: (styles) => ({
            ...styles,

            ":focus": { outline: "none" },
        }),
        menuList: (base) => ({ ...base, padding: 0, margin: 0 }),
    };

    return (
        <div>
            <label className="lg:leading-[30px] lg:text-[22px] xs:leading-[22px] xs:text-[14px] font-[500] text-text-primary mb-2">
                {label}
            </label>
            {label && <div className="pt-[8px]"></div>}
            <div>
                <Select
                    instanceId={"2a9ab63359466724"}
                    styles={styles}
                    {...props}
                />
            </div>
        </div>
    );
}

export default PricingSelect;
