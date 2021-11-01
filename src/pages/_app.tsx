import "../styles/globals.scss";

import { Provider } from "next-auth/client";
import Script from "next/script";

function Ansen({ Component, pageProps }: any) {
  return (
    <Provider session={pageProps?.session}>
      <Script src="https://unpkg.com/feather-icons" />
      <Component {...pageProps} />
    </Provider>
  )
}

export default Ansen;