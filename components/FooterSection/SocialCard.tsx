import { yupResolver } from '@hookform/resolvers/yup';
import { useFieldArray, useForm, } from 'react-hook-form';
import { useEffect, useState } from 'react';
import FooterSectionWrapper from '../FooterSectionComponent/FooterSectionWrapper';
import CustomInput from '../CustomInput';
import Image from 'next/image';
import FooterInput from './FooterInput';
import { api } from '../../api';
import { toast } from 'react-toastify';
import LoadingAnimation from '../CustomSvg/LoadingAnimation2';
import TiktokIcon from '../CustomSvg/TiktokIcon';

function SocialCard({ data }: any) {
    const links = data?.[0]?.tiktok
    const [defaultValue, setDefaultValue] = useState<any>({

    })
    const { register, handleSubmit, watch, formState, getValues } = useForm();
    const { isSubmitted, dirtyFields } = formState;
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (data !== undefined) {
            setDefaultValue({
                tiktok: data?.[0] && data?.[0]?.tiktok,
                instagram: data?.[0] && data?.[0]?.instagram,
                twitter: data?.[0] && data?.[0]?.twitter,
                cookie_settings: data?.[0] && data?.[0]?.cookie_settings,
                terms_service: data?.[0] && data?.[0]?.terms_service,
                privacy_policy: data?.[0] && data?.[0]?.privacy_policy,
            })
        }

    }, [data])


    const onSubmit = async (d: any) => {
        setIsLoading(true);
        try {
            const res = await api.post(`/footer`, { footerLinks: [defaultValue] });
            if (res.status === 201) {
                setIsLoading(false);
                toast.success("Links updated successfully");
            } else {
                setIsLoading(false);
                toast.error("Something went wrong")

            }

        } catch (err) {
            setIsLoading(false)
        }

    };

    const [openTab, setOpenTab] = useState(1);
    const [openLinkTab, setOpenLinkTab] = useState(1);


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="overflow-x-hidden bg-[#202124] p-[20px] rounded-[6px] text-text-primary">
                <FooterSectionWrapper
                    wrap={openTab === 3}
                    onWrapClick={() => {
                        setOpenTab(openTab != 3 ? 3 : NaN);
                    }}
                    title="Social Links"
                >
                    <div className="px-[4px]">
                        <div className="flex items-center justify-between py-5 ">
                            {/* <Image src="/social/facebook.svg" alt="facebook" width={40} height={40} className="mt-4" /> */}
                            <div className='mt-4'>
                                <TiktokIcon width={40} height={40} stroke='#555555' />
                            </div>
                            <div className="w-[calc(100%-89px)]">
                                <FooterInput
                                    label="Tiktok link"
                                    register={register('tiktok')}
                                    // defaultValue={data?.[0]?.facebook}
                                    value={defaultValue?.tiktok}
                                    onChange={(e) => setDefaultValue({ ...defaultValue, tiktok: e.target.value })}
                                    id="tiktok"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-5 ">
                            <Image src="/social/instagram.svg" alt="instagram" width={40} height={40} className="mt-4" />
                            <div className="w-[calc(100%-89px)]">
                                <FooterInput
                                    label="Instagram link"
                                    register={register('instagram')}
                                    // defaultValue={data?.[0]?.instagram}
                                    value={defaultValue?.instagram}
                                    onChange={(e) => setDefaultValue({ ...defaultValue, instagram: e.target.value })}
                                    id="instagram"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-5 ">

                            <Image src="/social/twitter.svg" alt="twitter" width={40} height={40} className="mt-4" />
                            <div className="w-[calc(100%-89px)]">
                                <FooterInput
                                    label="Twitter link"
                                    register={register('twitter')}
                                    // defaultValue={data?.[0]?.twitter}
                                    value={defaultValue?.twitter}
                                    onChange={(e) => setDefaultValue({ ...defaultValue, twitter: e.target.value })}
                                    id="twitter"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        </div>
                    </div>

                </FooterSectionWrapper>

            </div>
            <div className='mt-[40px] overflow-x-hidden bg-[#202124] p-[20px] rounded-[6px] text-text-primary'>
                <FooterSectionWrapper
                    wrap={openLinkTab === 3}
                    onWrapClick={() => {
                        setOpenLinkTab(openLinkTab != 3 ? 3 : NaN);
                    }}
                    title="Footer Links"
                >

                    <div className="px-[4px]">

                        <div className="flex items-center justify-between py-5 ">
                            <div className="w-[100%]">
                                <FooterInput
                                    label="Cookie_settings link"
                                    register={register('cookie_settings')}
                                    // defaultValue={data?.[0]?.cookie_settings}
                                    value={defaultValue?.cookie_settings}
                                    onChange={(e) => setDefaultValue({ ...defaultValue, cookie_settings: e.target.value })}
                                    id="cookie_settings"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-5 ">
                            <div className="w-[100%]">
                                <FooterInput
                                    label="Terms_service link"
                                    register={register('terms_service')}
                                    // defaultValue={data?.[0]?.terms_service}
                                    value={defaultValue?.terms_service}
                                    onChange={(e) => setDefaultValue({ ...defaultValue, terms_service: e.target.value })}
                                    id="terms_service"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-5 ">
                            <div className="w-[100%]">
                                <FooterInput
                                    label="Privacy_policy link"
                                    register={register('privacy_policy')}
                                    // defaultValue={data?.[0]?.privacy_policy}
                                    value={defaultValue?.privacy_policy}
                                    onChange={(e) => setDefaultValue({ ...defaultValue, privacy_policy: e.target.value })}
                                    id="privacy_policy"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        </div>
                    </div>

                </FooterSectionWrapper>
            </div>
            <div className="flex justify-end">
                <button className="w-[120px] h-[56px] rounded-[10px] bg-primary text-[white] mt-8">
                    {isLoading ? <span className="flex items-center justify-center"><LoadingAnimation color="white" /> Updating..</span> : "update"}
                </button>
            </div>
        </form>
    );
}

export default SocialCard;


