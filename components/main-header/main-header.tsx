import React from 'react';
import Link from "next/link";
import Image from "next/image";
import classes from "./main-header.module.css";

import logo from "@/assets/logo.png"
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "@/components/main-header/navLink";

const MainHeader = () => {

    return (
        <>
            <MainHeaderBackground />
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
                <Image src={logo} alt={"Plate with food"} priority={true}/>
                <p>NextLevel Food</p>
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
}

export default MainHeader;