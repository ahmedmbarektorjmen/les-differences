"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
  )
}
