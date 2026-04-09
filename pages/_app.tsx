import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextTopLoader from "nextjs-toploader";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store } from "@redux/store";
import { Analytics } from '@vercel/analytics/react';
import { Session } from "next-auth";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps<{
  session: Session;
}>) {
  return (
    <>
      <SessionProvider session={session}>
        <Provider store={store}>
          <NextTopLoader color="#f4f4f4" height={4} showSpinner={false} />
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
      <Analytics />
    </>
  );
}
export default MyApp;
