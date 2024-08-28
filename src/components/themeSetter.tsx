"use client"
 
import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "./button"
import { Moon, Sun } from "lucide-react"

export function ModeToggle() {
    const { setTheme } = useTheme()
   
    return (
    <div>
        <Button onClick={() => setTheme("light")}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </Button>
        <Button onClick={() => setTheme("dark")}>
            <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </Button>
    </div>
    )
  }