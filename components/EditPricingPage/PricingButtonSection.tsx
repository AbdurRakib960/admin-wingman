import React, { useState } from "react";
import useSinglePricingQuery from "../../api-call/useSinglePricingQuery";
import { toast } from "react-toastify";
import { api } from "../../api";
import { useRouter } from "next/router";
import { GetEditPricingContext } from "../../context/EditPricingContext";
import LoadingAnimation from "../../components/CustomSvg/LoadingAnimation2";

function PricingButtonSection() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [state] = GetEditPricingContext();
    const id: any = router.query.id;
    const { refetch } = useSinglePricingQuery(id);

    const handleUpdate = async () => {
        if (loading) return;
        setLoading(true);
        try {
            if (state?.title !== "Trial" && state?.title !== "Premium") {
                toast.error("Set the Subscription name either Trial or premium")
                setLoading(false);
            } else {
                await api.put(`/pricings/${id}`, state);
                refetch();
                setLoading(false);
                toast.success("Pricing updated successfully");
            }
        } catch (err: any) {
            const errMessage = err.response
                ? err.response.data.message
                : err.message;
            toast.error(errMessage);
            setLoading(false);
        }
    };

    return (
        <div className="lg:flex lg:flex-row lg:justify-end 2xl:flex-row 2xl:flex 2xl:justify-end xs:flex xs:flex-col xs:justify-center xs:w-full">
            <button
                onClick={() => refetch()}
                type="button"
                className="2xl:mr-8 lg:mr-8 xs:mr-0 px-[75px] py-3 rounded-[8px] bg-opacity-100 border-primary border-[1px] hover:bg-primary hover:border-primary hover:text-[white] transition-all duration-200 flex justify-center items-center gap-[11.33px] 2xl:mt-[40px] lg:mt-[40px] xs:mt-[24px] text-[14px] text-[white] min-w-[200px] h-[48px] font-semibold"
            >
                Cancel
            </button>
            <button
                type="submit"
                onClick={handleUpdate}
                className="2xl:mt-[40px] h-[48px] lg:mt-[40px] xs:mt-[24px] px-[75px] py-3 rounded-[8px] bg-primary hover:bg-[#BB2146] transition-all duration-200 flex justify-center items-center gap-[11.33px] text-[14px] text-[white] font-semibold min-w-[200px] xs:mb-[24px]"
            >
                {loading ? <LoadingAnimation color="#fff" /> : "Update"}
            </button>
        </div>
    );
}

export default PricingButtonSection;
