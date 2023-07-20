import Eye from "../../components/CustomSvg/Eye";
import EyeOff from "../../components/CustomSvg/EyeOff";
import NewCloseIcon from "../../components/CustomSvg/NewCloseIcon";
import { GetEditPricingContext } from "../../context/EditPricingContext";
import React from "react";

type ItemDataType = {
    index: number;
    data: {
        text: string;
        isValid: boolean;
    };
};

function PricingFeatureItem({ data, index }: ItemDataType) {
    const [state, dispatch] = GetEditPricingContext();
    return (
        <div>
            <div className="group justify-between items-center flex p-3 bg-[#18191C]  border border-[#BDC1C6]  rounded-[6px] mb-4 text-text-primary text-[14px] font-[400]">
                <div className="flex flex-row items-center w-[calc(100%-24px)]">
                    <div
                        className="w-6 h-6"
                        onClick={() => {
                            dispatch({
                                type: `features[${index}].isValid`,
                                value: !data.isValid,
                            });
                        }}
                    >
                        {data.isValid ? (
                            <div className="cursor-pointer ">
                                <Eye color="#6B7280"></Eye>
                            </div>
                        ) : (
                            <div className="cursor-pointer">
                                <EyeOff color="#6B7280" />
                            </div>
                        )}
                    </div>
                    <div className="w-[calc(100%-46px)]">
                        <input
                            type="text"
                            className="text-sm ml-4 focus:outline-none text-text-primary font-[400] bg-transparent w-full bg-[#18191C] "
                            value={data.text}
                            onChange={(e) => {
                                dispatch({
                                    type: `features[${index}].text`,
                                    value: e.target.value,
                                });
                            }}
                        />
                    </div>
                </div>
                <div
                    onClick={() => {
                        const features = state.features;
                        features.splice(index, 1);
                        dispatch({
                            type: `features`,
                            value: features,
                        });
                    }}
                >
                    <NewCloseIcon
                        groupClassName="fill-[#6B7280] "
                        className="cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
}

function removeItem<T>(arr: Array<T>, value: T): Array<T> {
    const index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

export default PricingFeatureItem;
