import { FC, InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type FooterInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    register: UseFormRegisterReturn;
    defaultValue?: string;
    value?: string;
    handleChange?: any
};

const FooterInput: FC<FooterInputProps> = ({
    label,
    register,
    defaultValue,
    value,
    handleChange,
    ...rest
}) => {
    const inputClass = "border border-[#BDC1C6] w-full h-[52px] rounded-[12px]  focus:outline-[#0E1013] text-[#000000] font-normal text-[16px] leading-[22px] p-[15px_16px_15px_16px] bg-[rgba(38,40,45,0.5)] !text-[#E8EAED] border !border-[#2D3035] focus:outline focus:!outline-[#80868B]";
    const labelClass = "text-[14px] leading-[20px] font-normal text-[#80868B]"
    return (
        <div className="mb-4">
            <label className={labelClass} htmlFor={rest.id}>
                {label}
            </label>
            <input
                className={inputClass}
                value={value}
                defaultValue={defaultValue}
                {...register}
                {...rest}
            />
        </div>
    );
};

export default FooterInput;
