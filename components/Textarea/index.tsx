import React from 'react';
import { Control, FieldErrors } from 'react-hook-form';

interface CustomTextareaProps {
    label: string;
    name: string;
    placeholder?: string;
    control: Control<any, any>;
    errors: FieldErrors<any>;
}

const Textarea: React.FC<CustomTextareaProps> = ({
    label,
    name,
    placeholder,
    control,
    errors,
}) => {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <textarea
                id={name}
                {...control.register(name, { required: true })}
                placeholder={placeholder}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors[name] ? 'border-red-500' : ''
                    }`}
            />
            {errors[name] && (
                <p className="mt-2 text-sm text-red-500">Field is required.</p>
            )}
        </div>
    );
};

export default Textarea;
