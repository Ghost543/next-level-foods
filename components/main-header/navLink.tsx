'use client';
import React, {FC} from 'react';
import classes from "./navLink.module.css";
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavLink: FC<{href: string, children: React.ReactNode}> = ({href, children}) => {
    const path = usePathname()
    return(
        <Link href={href} className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}>{children}</Link>
    );
}

export default NavLink;