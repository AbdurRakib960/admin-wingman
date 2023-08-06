import React, { useEffect, useState } from 'react';
import SliderWrapper from '../SliderWrapper/SliderWrapper';
import { useFieldArray, useForm } from 'react-hook-form';
import classNames from 'classnames';
import CustomInput from '../CustomInput';
import Image from 'next/image';
import { ShowHiddenField } from '../../utils/ShowHideIcon';
import LoadingAnimation from '../CustomSvg/LoadingAnimation2';
import { useRouter } from 'next/router';
import FooterInput from '../FooterSection/FooterInput';
import { api } from '../../api';
import { toast } from 'react-toastify';

const CardAction = ({ data }: any) => {
    console.log(data, "data___card data")
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


    const [wrapIndex, setWrapIndex] = useState(NaN);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [defaultValue, setDefaultValue] = useState<any>({

    })

    useEffect(() => {
        if (data !== undefined) {
            setDefaultValue({
                card_title: data?.[0] && data?.[0]?.card_title,
                button_text: data?.[0] && data?.[0]?.button_text,
                redirect_url: data?.[0] && data?.[0]?.redirect_url,
            })
        }

    }, [data])


    const onSubmit = async (data: any) => {
        try {
            setIsLoading(true)
            const res = await api.post("/card-data", { cardData: [data] });
            if (res.status === 201 || res.status === 200) {
                toast.success("Card data updated successfully !")
                setIsLoading(false);
            } else {
                setIsLoading(false);
                toast.error("Someting went wrong to post data !")
            }

        } catch (err) {
            setIsLoading(false);
            toast.error("Something went wrong")
        }
    };
    return (
        <div>
            <div className=" w-full  rounded-[6px] text-text-primary">
                <div className="">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='bg-[#202124] rounded-[12px] mb-[30px] px-[30px] py-[22px] flex flex-col gap-[16px]'>

                            <FooterInput
                                label="Card Title"
                                register={register('card_title')}
                                defaultValue={data?.[0]?.card_title}
                                value={defaultValue?.card_title}
                                onChange={(e) => setDefaultValue({ ...defaultValue, card_title: e.target.value })}
                                id="cardTitle"
                                type="text"
                                placeholder=""
                            />
                            <FooterInput
                                label="Button Text"
                                register={register('button_text')}
                                defaultValue={data?.[0]?.button_text}
                                value={defaultValue?.button_text}
                                onChange={(e) => setDefaultValue({ ...defaultValue, button_text: e.target.value })}
                                id="cardTitle"
                                type="text"
                                placeholder=""
                            />
                            <FooterInput
                                label="Redirect URL"
                                register={register('redirect_url')}
                                defaultValue={data?.[0]?.redirect_url}
                                value={defaultValue?.redirect_url}
                                onChange={(e) => setDefaultValue({ ...defaultValue, redirect_url: e.target.value })}
                                id="cardTitle"
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <div className="flex justify-end">
                            <button className=' h-[56px] bg-primary text-[white] rounded-[12px] w-[100px]'>{isLoading ? <div className="flex items-center justify-center"><LoadingAnimation color='white' /> Submitting</div> : "Submit"}</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default CardAction;