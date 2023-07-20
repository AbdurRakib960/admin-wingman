import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import SliderWrapper from '../SliderWrapper/SliderWrapper';
import classNames from 'classnames';
import CustomInputField from '../CustomInputField';
import { useFieldArray, useForm } from 'react-hook-form';
import { ShowHiddenField } from '../../utils/ShowHideIcon';
import CustomInput from '../CustomInput';
import Textarea from '../Textarea';
import useFaqQuery from '../../api-call/useFaqQuery';
import { api } from '../../api';
import { faqDataType } from '../../utils/dataTypes';
import { toast } from 'react-toastify';
import LoadingAnimation from '../CustomSvg/LoadingAnimation2';
import { useRouter } from 'next/router';
import SliderDeleteModal from '../Modal/SliderDeleteModal';



const Faq = ({ data, refetch }: any) => {
    console.log(data, "data___")
    const {
        handleSubmit,
        register,
        control,
        watch,
        formState: { errors },
        reset,
    } = useForm<any>({
        // resolver: yupResolver(MenuSchema),
        defaultValues: data,
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'FAQ',
    });
    const [wrapIndex, setWrapIndex] = useState(NaN);
    const [deleteLink, setDeleteLink] = useState(NaN);
    const [isLoading, setIsLoading] = useState(false);
    const [deleteResource, setDeleteResource] = useState(NaN);
    const [faqIndex, setFaqIndex] = useState<number>();
    const [faqId, setFaqId] = useState('');
    const [fieldId, setFieldId] = useState('')
    const router = useRouter();

    const handleAppend = () => {
        append({
            title: "",
            description: "",
        });
        setWrapIndex(fields.length);
    };
    useEffect(() => {
        data?.map((item: any) => (
            append({
                title: `${item.title}`,
                description: `${item.description}`,
                hidden: item.hidden,
                _id: `${item._id}`
            })
        ))
    }, [data])



    const onSubmit = async (data: any) => {
        const submitdata = data?.FAQ;
        const updateData = submitdata?.map((object: any) => {
            const { _id, ...updateObject } = object;
            return updateObject
        })

        setIsLoading(true);
        try {
            const obj = {
                faqData: updateData
            };
            const res = await api.post('/faq', obj);
            toast.success("Faq Added successfully")
            setIsLoading(false);
            router.reload()
            // refetch()


        } catch (err) {
            toast.error('something went wrong');
            setIsLoading(false);
            router.reload()
            // refetch()
        }
    };

    const handleDeleteModal = async (id: string, fieldId: string, index: number) => {
        console.log("id:", id, "fieldid:", fieldId)
        setFaqIndex(index);
        setFaqId(id);
        setFieldId(fieldId)
        setDeleteResource(deleteResource ? NaN : index);


    }
    const handleFaqDelete = async () => {
        if (faqId !== "" && fieldId !== "") {
            if (faqId !== undefined) {
                await api.delete(`/faq/${faqId}`)
                toast.success('FAQ deleted successfully')
                // refetch();
                router.reload()
            } else {

                remove(faqIndex)
                // refetch();
                router.reload()
            }
        }
    }

    return (
        <>
            <div className=" w-full  rounded-[6px] text-text-primary">
                <div className="">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {fields.map((field: any, index) => (
                            <SliderWrapper
                                wrap={index === wrapIndex}
                                key={field.id}
                                onWrapClick={() => {
                                    setWrapIndex(index == wrapIndex ? NaN : index);
                                }}
                                isHidden={watch(`FAQ.${index}.hidden`)}
                                head={`${field.title}`}
                            >
                                <div>
                                    <div
                                        className={classNames(
                                            'flex flex-col gap-[20px] border-y border-y-[#2E3134] py-[30px]',
                                            watch(`FAQ.${index}.hidden`) &&
                                            'opacity-50 [&>*]:pointer-events-none'
                                        )}
                                    >
                                        <CustomInput
                                            name={`FAQ.${index}.title`}
                                            placeholder=""
                                            control={control}
                                            label="Faq title"
                                            labelClassName="text-[14px] leading-[20px] font-normal text-[#80868B]"
                                            inputClassName="bg-[rgba(38,40,45,0.5)] !text-[#E8EAED] border !border-[#2D3035] focus:outline focus:!outline-[#80868B]"
                                            rules={{ required: 'Full Name is required' }}
                                        />
                                        <textarea  {...register(`FAQ.${index}.description`)} className=" rounded-[12px] [#BDC1C6]  p-[15px_36px_15px_16px] bg-[rgba(38,40,45,0.5)] !text-[#E8EAED] border !border-[#2D3035] focus:outline focus:!outline-[#80868B]" cols={30} rows={10}></textarea>


                                    </div>
                                    <div className="flex justify-between mt-[16px] items-center">
                                        <ShowHiddenField
                                            name={`FAQ.${index}.hidden`}
                                            control={control}
                                        />
                                        <div
                                            onClick={() => handleDeleteModal(field._id, field.id, index)}
                                            className="flex gap-[10px] items-center cursor-pointer"
                                        >
                                            <Image
                                                src="/images/trash.svg"
                                                width={24}
                                                height={24}
                                                alt="trash"
                                            />
                                            <h3 className="text-[18px] font-semibold text-[#EC4242]">
                                                Delete
                                            </h3>
                                        </div>

                                    </div>
                                </div>
                            </SliderWrapper>
                        ))}
                        <div

                            onClick={handleAppend}
                            className="w-full  rounded-[12px] gap-[6px] cursor-pointer transition-all duration-200 border border-primary  group bg-white h-[56px] flex items-center justify-center text-[white]"
                        >
                            {/* <PlusIcon groupClassName=" transition-all duration-200" /> */}
                            <div className="text-[20px] leading-6 transition-all duration-200 text-[white] font-semibold">
                                Add custom link
                            </div>
                        </div>

                        {fields.length > 0 && <div className="flex justify-end mt-8">
                            <div className="flex items-center justify-center gap-4">
                                <button onClick={() => router.reload()} type='button' className='w-[120px] h-[56px] border border-primary text-[white] rounded-[12px]'>Cancel</button>
                                <button className='w-[120px] h-[56px] bg-primary text-[white] rounded-[12px]'>{isLoading ? <div className="flex items-center justify-center"><LoadingAnimation color='white' /> Submitting..</div> : "Submit"}</button>
                            </div>
                        </div>}
                    </form>
                </div>

            </div>
            <SliderDeleteModal
                header="Delete FAQ ?"
                description="Are you sure you want to Delete this FAQ? This cannot be undone."
                handleOnClick={handleFaqDelete}
                open={isNaN(deleteResource) ? false : true}
                setOpen={() => {
                    setDeleteResource(deleteResource ? NaN : faqIndex !== undefined ? faqIndex : 0);
                }}
            />
        </>
    );
};

export default Faq;