import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store } from "@redux/store";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <Provider store={store}>
          <NextNProgress color="#f4f4f4" startPosition={0.3} stopDelayMs={1} height={4} options={{ easing: "ease", speed: 500, showSpinner: false }} />
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </>
  );
}
export default MyApp;
