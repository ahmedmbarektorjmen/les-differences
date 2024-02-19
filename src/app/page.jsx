"use client";
import { Typewriter } from "react-simple-typewriter";
import { ModeToggle } from "@/components/mode-toggle";


export default function Home() {

    return (
        <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <main className="z-10000 text-black dark:text-white">
            revr3v
            <ModeToggle/>
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent mt-10 flex items-center justify-center">
            <Typewriter
            words={['¡Bienvenue!', 'Bonjour!']}
            loop={5}
            cursorStyle="|"
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            />
            </div>
          </main>
        </div>
    );
}
