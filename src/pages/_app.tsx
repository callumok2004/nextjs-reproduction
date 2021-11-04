import "../styles/globals.scss";

import { SessionProvider } from "next-auth/react";
import Script from "next/script";

function Ryft({ Component, pageProps }: any) {
  return (
    <SessionProvider  session={pageProps?.session} refetchInterval={5 * 60}>
      <Script src="https://unpkg.com/feather-icons" />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default Ryft;