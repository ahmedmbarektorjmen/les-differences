
'use client'
import {AppProgressBar as ProgressBar} from "next-nprogress-bar"
import { ThemeProvider } from "next-themes"

export function Providers({children,...props}) {
  return (
    <>
    <ProgressBar
        height="4px"
        color="#00f"
      />
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </>
  );
}