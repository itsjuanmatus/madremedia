import "../styles/globals.css";
import "../styles/App.scss";
import type { AppProps } from "next/app";
import { gsap, CSSPlugin } from "gsap";
import Header from "../components/Header";
gsap.registerPlugin(CSSPlugin);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
