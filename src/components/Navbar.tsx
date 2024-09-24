'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null);
    return(
        <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem item="Home" setActive={setActive} active={active}></MenuItem>
                </Link>
                <MenuItem item="Our Courses" setActive={setActive} active={active}>
                <div className="flex flex-col space-y-4">
                    <HoveredLink href="/courses">All courses</HoveredLink>
                    <HoveredLink href="/basic-music">Basic Music</HoveredLink>
                    <HoveredLink href="/advance-composition">Advanced Composition</HoveredLink>
                    <HoveredLink href="/song-writing">SongWriting</HoveredLink>
                    <HoveredLink href="/music-production">Music Production</HoveredLink>
                </div>
                </MenuItem>
                <Link href={"/contact"}>
                    <MenuItem item="Contact Us" setActive={setActive} active={active}></MenuItem>
                </Link>
                
            </Menu>
        </div>
    )
}

export default Navbar;