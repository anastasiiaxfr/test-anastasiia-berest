import { useState } from "react";

import styles from "./styles.module.sass";
import Link from "next/link";
import Auth from "../auth";

import IconMenuOpen from "../../assets/icons/menu-open.svg"
import IconMenuClose from "../../assets/icons/menu-close.svg"

const nav = [
    {
        link: "Home",
        url: "/",
    },
    {
        link: "Features",
        url: "/",
    },
    {
        link: "Blog",
        url: "/",
    },
    {
        link: "Shop",
        url: "/",
    },
    {
        link: "About",
        url: "/",
    },
    {
        link: "Contact",
        url: "/",
    },
]

export default function Header() {
    const [show, setShow] = useState(false)

    const onMenuToggle = () => {
        setShow((prev) => !prev)
    }

    return (
        <header className={`${styles.header} ${show ? styles.open : ''}`}>
           <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>Logo Here</Link>

                <button className={`${styles.menu_toggle}`} onClick={onMenuToggle}>
                    <IconMenuOpen className={styles.menu_toggle_open}/>
                    <IconMenuClose className={styles.menu_toggle_close}/>
                </button>

                <div className={`${styles.menu}`}>
                <nav className={styles.nav}>
                    {nav.map((i, k) => <Link href={i.url}>{i.link}</Link>)}
                </nav>
                <Auth />
                </div>
           </div>
        </header>
    )
}