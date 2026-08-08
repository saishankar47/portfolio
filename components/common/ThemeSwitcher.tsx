"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {

    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted)
        return null;

    return (

        <button
            aria-label="Toggle Theme"
            onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
            }
            className="
            rounded-full
            border
            border-gray-700
            p-2
            transition
            hover:scale-110
            hover:border-blue-500
            "
        >

            {theme === "dark"
                ? <Sun size={18} />
                : <Moon size={18} />
            }

        </button>

    );

}