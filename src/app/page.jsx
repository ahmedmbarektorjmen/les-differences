import {ModeToggle} from "@/components/mode-toggle";
import { Typewriter } from "react-simple-typewriter"
export default function Home() {

    return (
      <>
        <Typewriter
            words={['¡Bienvenue!', 'Bonjour']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
        />
        <ModeToggle />
        <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      </>
    );
}
