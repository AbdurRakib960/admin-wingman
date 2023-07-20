import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
  useController,
} from 'react-hook-form';

type CustomInputProps<TFieldValues extends FieldValues = FieldValues> = {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label?: string;
  placeholder: string;
  inputClassName?: string;
  labelClassName?: string;
  rules?: RegisterOptions<TFieldValues>;
  isPassword?: boolean;
  isEdit?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const CustomInput = <TFieldValues extends FieldValues = FieldValues>({
  control,
  name,
  label,
  rules,
  placeholder,
  inputClassName,
  labelClassName,
  isPassword,
  isEdit,
  ...rest
}: CustomInputProps<TFieldValues>) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController<TFieldValues>({
    name,
    control,
    rules: rules || {},
    defaultValue: (rest.value as any) || '',
  });
  const router = useRouter();

  const inputClass = classNames(
    'border border-[#BDC1C6] w-full h-[52px] rounded-[12px]  focus:outline-[#0E1013] text-[#000000] font-normal text-[16px] leading-[22px]',
    isPassword ? 'p-[15px_36px_15px_16px]' : 'p-[15px_16px_15px_16px]',
    isEdit && 'p-[15px_48px_15px_16px]',
    inputClassName
  );
  const eyeIcon =
    'absolute top-[16px] right-[16px] w-[20px] h-[20px] cursor-pointer';
  const editIcon =
    'absolute top-[15px] right-[18px] w-[20px] h-[20px] cursor-pointer text-[16px] font-normal text-primary';

  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="w-full">
      {label && <label className={classNames(labelClassName)}>{label}</label>}
      <div className="relative">
        <input
          placeholder={placeholder}
          className={`${inputClass}`}
          value={value}
          type={
            isPassword ? `${passwordVisible ? 'text' : 'password'}` : 'text'
          }
          onChange={onChange}
          {...rest}
        />
        {isEdit && (
          <button
            onClick={() => router.push('/create-account')}
            className={editIcon}
          >
            Edit
          </button>
        )}
        {isPassword && (
          <Image
            onClick={() => setPasswordVisible(!passwordVisible)}
            className={`${eyeIcon}`}
            src={`/icons/${passwordVisible ? 'eye' : 'eye-slash'}.svg`}
            alt="eye icon"
            width={20}
            height={20}
          />
        )}
      </div>
      {error && (
        <span className="text-[#FC6C62] text-[12px] leading-[16px] font-normal">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default CustomInput;
