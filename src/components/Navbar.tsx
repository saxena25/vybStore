'use client'//when we have use react hooks we have add use client
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useRouter } from "next/router";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return ( 
        <div  className={cn("fixed top-10 inset-x-0 max-w-7xl mx-auto z-50 text-center border border-black rounded-full", className)}>
            <Menu setActive={setActive}>
                <div className="">
                    <p className="pb-0">VYB</p>
                    <p className="pt-0">Store</p>
                </div>
                <div className="relative max-w-md mx-auto">
                    <input type="text" name="" id="" placeholder="Search Creator" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-2xl outline-none"/>
                    <FiSearch size={20} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black" />
                </div>
                <Link href={"#"} className="flex justify-between items-center">
                    <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
                </Link>
                <Link href={"#"} className="flex justify-between items-center">
                    <MenuItem setActive={setActive} active={active} item="About Us"></MenuItem>
                </Link>
                <Link href={"#"} className="flex justify-between items-center">
                    <MenuItem setActive={setActive} active={active} item="Policies"></MenuItem>
                </Link>
                <button className="border border-black float-right pt-1 pb-1 pl-2 pr-2 rounded-md">Login</button>
            </Menu>
        </div>
     );
}

export default Navbar;