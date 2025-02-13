'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "./ui/navbar-menu";
import { cn } from "../utils/cn";

function Navbar({className}:{className?:string}) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Home">
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Our Courses">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/courses">All courses</HoveredLink>
                    <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                    <HoveredLink href="/courses">Advanced Composition</HoveredLink>
                    <HoveredLink href="/courses">Song Writing</HoveredLink>
                    <HoveredLink href="/courses">Music Production</HoveredLink>
                </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
                <HoveredLink href="/contact">Contact</HoveredLink>
            </MenuItem>
        </Menu>
    </div>
  )
}

export default Navbar
