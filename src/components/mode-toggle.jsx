"use client";

import * as React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { TbMoonStars } from "react-icons/tb";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { systemTheme , theme, setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState(theme === "system" ? systemTheme:theme);
  const [ mounted, setMounted ] = useState(false)

  useEffect(()=>{
    setMounted(true);
  },[])

  if (!mounted) {
    return null
  }

  return (
        <Button variant="outline" size="icon" onClick={()=> {
          if (currentTheme === "dark") {
            setTheme("light");
            setCurrentTheme("light");
        }
          else {
            setTheme("dark");
            setCurrentTheme("dark");
          }
        }
      }
          >
          <IoSunnyOutline className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <TbMoonStars className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
  )
}
