import React from "react";
import Image from "next/image";
import SidebarElement from "./../SidebarElement/index";

const Sidebar = () => {
    return (
        <>
            <div className="bg-[#1F2024]">
                <div className="fixed z-[99] top-0 left-0 h-screen bg-[#1F2024] container1 drawer ">
                    <div className="3xl:w-[273px] w-[220px] py-[43px] container2 h-screen">
                        <SidebarElement />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
