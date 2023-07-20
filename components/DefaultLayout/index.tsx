import React from "react";
import MoboNav from "../MoboNav";
import Sidebar from "./Sidebar";

type ChildrenType = {
    children: React.ReactNode;
};

const DefaultLayout = ({ children }: ChildrenType) => {
    return (
        <>
            <div className="bg-[#18191C] min-h-screen w-full">
                {/* Side nav  */}
                <div className="hidden lg:block">
                    <Sidebar />
                </div>
                <div className="sticky top-0 z-50 lg:hidden">
                    <MoboNav />
                </div>
                <div className="w-[100%] min-h-full bg-[#18191C] lg:pl-[220px] 3xl:pl-[273px]">
                    {children}
                </div>
            </div>
        </>
    );
};

export default DefaultLayout;
