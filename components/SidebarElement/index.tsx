import Image from "next/image";
import React, { useState } from "react";
import { SideNav } from "./../../utils/constant";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

const SidebarElement = () => {
    const router = useRouter();

    return (
        <>
            <div className="">
                <img
                    onClick={() => router.push("/pricing")}
                    src="/images/brand-logo-primary.svg"
                    alt="logo"
                    className="w-[132px] h-[38px] mx-auto mb-[49.73px] cursor-pointer"
                />
                {/* slide nav  */}
                <div className="flex flex-col gap-[29px] mt-[40px]">
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
                                            router.asPath === item.url
                                                ? "text-[#F92C5D]"
                                                : "text-[#DADCE0]"
                                        )}
                                    >
                                        <span>
                                            <item.Icon
                                                width={20}
                                                height={20}
                                                stroke={
                                                    router.asPath === item.url
                                                        ? "#F92C5D"
                                                        : "#DADCE0"
                                                }
                                            />
                                        </span>
                                        {item.title}
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SidebarElement;
