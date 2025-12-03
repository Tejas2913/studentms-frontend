"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl 
      bg-white/50 border-b border-gray-200 shadow-md">

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <h1 className="text-2xl font-extrabold text-blue-700 tracking-wide">
                    StudentMS
                </h1>

                <button
                    className="md:hidden text-3xl text-blue-700"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>

                <ul
                    className={`md:flex md:space-x-8 absolute md:static left-0 w-full md:w-auto 
          bg-white shadow-lg md:shadow-none transition-all duration-300 
          ${open
                            ? "top-16 opacity-100"
                            : "top-[-400px] opacity-0 md:opacity-100"
                        }`}
                >
                    {["Home", "Students", "About", "Contact"].map((item) => (
                        <li key={item} className="border-b md:border-none">
                            <Link
                                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                className="block py-3 px-6 md:p-0 text-lg text-gray-800 hover:text-blue-600 transition font-medium"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

            </div>
        </nav>
    );
}
