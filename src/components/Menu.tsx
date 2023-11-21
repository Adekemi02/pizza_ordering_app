"use client";

import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';


const links = [
    { id: 1, title: "HOME", url: "/"},
    { id: 2, title: "PRODUCTS", url: "/products"},
    { id: 3, title: "PAGES", url: "/pages"},
    { id: 4, title: "BLOG", url: "/blog"},
    { id: 5, title: "CONTACT", url: "/contact"}
]

const Menu = () => {
    const [open, setOpen] = useState(false);
    const user = false
    return (
        <div>
            {!open ? (
                <Image src = "/images/menu_icon.png" alt = "" width = {30} height = {30}
                onClick = {() => setOpen(true)} />
            ) : (
                <Image src = "/images/close_icon.png" alt = "" width={30} height={30}
                onClick = {() => setOpen(false)} />
            )}

            {open && (
                <div className = "absolute left-0 top-24 w-full h-[calc{100vh-3rem}] flex flex-col gap-8 items-center justify-center z-10">
                    {links.map((item) => (
                        <Link href={item.url} key={item.id} className={item.title === "HOME" ? "text-yellow-400" : ""} onClick = {() => setOpen(false)}>
                            {item.title}
                        </Link>
                    ))}

                    {!user ? (
                        <Link href = "/login" onClick = {() => setOpen(false)}> LOGIN </Link>
                    ) : (
                        <Link href = "/orders" onClick = {() => setOpen(false)}> ORDERS </Link>
                    )}

                </div>
            )}
        </div>
    )
}

export default Menu;