import React from 'react';
import DefaultLayout from '../DefaultLayout';
import SocialCard from './SocialCard';
import useFooterQuery from '../../api-call/useFooterQuery';

const FooterSection = () => {
    const footerData = useFooterQuery();
    const data = footerData?.data?.[0]?.footerLinks;
    return (
        <DefaultLayout>
            <div className="px-[16px] lg:px-[24px] 3xl:px-[32px] pb-[16px] lg:pb-[76px]">
                <div className="lg:pt-[36px]">
                    <div className="flex flex-col lg:flex-row mb-[16px] lg:mb-[24px] 3xl:mb-[19px] justify-between">
                        <p className="text-text-primary lg:pt-[10px] text-[22px] leading-[30px] font-medium lg:text-[28px] lg:font-semibold capitalize 3xl:text-[32px] mb-[16px] lg:mb-0 mt-[16px]  lg:mt-0">
                            Footer
                        </p>

                    </div>
                </div>
                <div className="relative">
                    <SocialCard data={data} />
                </div>
            </div>
        </DefaultLayout>
    );
};

export default FooterSection;