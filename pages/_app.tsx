import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#215b76"
        startPosition={0.3}
        stopDelayMs={1}
        height={4}
        options={{ easing: "ease", speed: 500, showSpinner: false }}
      />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
