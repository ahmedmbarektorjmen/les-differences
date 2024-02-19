
'use client'
import { ThemeProvider } from "next-themes"
import {AppProgressBar as ProgressBar} from "next-nprogress-bar"

export function Providers({children,...props}) {
  return (
    <>
      <ProgressBar
      height="4px"
      color="#fffd00"
      options={{ showSpinner: false }}
      shallowRouting
      />
      <ThemeProvider {...props}>
        {children}
      </ThemeProvider>
    </>
  );
}