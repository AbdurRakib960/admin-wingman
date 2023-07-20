/* eslint-disable @next/next/no-img-element */

import classNames from "classnames";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import "react-modern-drawer/dist/index.css";
import { SideNav } from "../../utils/constant";
import CrossIcon from "../CustomSvg/CrossIcon";

const Drawer = dynamic(() => import("react-modern-drawer"), { ssr: false });

const MoboDraer = ({ toggleDrawer, isOpen, setIsOpen }: any) => {

    const router = useRouter();

    return (
        <>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="left"
                className="!w-[100%] "
                // size="100%"

                style={{ backgroundColor: "#202020" }}
            >
                <div className="w-[100%] container2 h-screen drawer pb-[30px] drawer container1 mx-auto text-[#252C48] bg-white text-[16px] font-semibold pt-[12px] relative ">
                    <div className=" container2">
                        <div className="">
                            <div className="flex justify-between px-[20px]">
                                <img
                                    src="/images/brand-logo-primary.svg"
                                    alt="logo"
                                    className="w-[132px] h-[38px]  mb-[49.73px]"
                                    onClick={() => router.push("/")}
                                />
                                <div onClick={() => setIsOpen(false)} className="mt-[13px] cursor-pointer">
                                    <CrossIcon width={15} height={15} stroke="#FFFFFF" />
                                </div>

                            </div>

                            {/* slide nav  */}
                            <div className="flex flex-col gap-[16px] mt-[40px]">
                                {SideNav.map((item: any) => (
                                    <div key={item.id}>
                                        <ul
                                            className={classNames(
                                                router.asPath === item.url
                                                    ? "bg-[#2D3035]"
                                                    : ""
                                            )}
                                        >
                                            <Link href={item.url}>
                                                <li
                                                    className={classNames(
                                                        "py-[13px] px-[40px] flex gap-[14px] text-[18px] font-semibold items-center capitalize",
                                                        router.asPath ===
                                                            item.url
                                                            ? "text-[#F92C5D]"
                                                            : "text-[#DADCE0]"
                                                    )}
                                                >
                                                    <span>
                                                        <item.Icon
                                                            width={20}
                                                            height={20}
                                                            stroke={
                                                                router.asPath ===
                                                                    item.url
                                                                    ? "#F92C5D"
                                                                    : "#DADCE0"
                                                            }
                                                        />
                                                    </span>
                                                    {""}
                                                    {item.title}
                                                </li>
                                            </Link>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Drawer>

        </>
    );
};

export default MoboDraer;
