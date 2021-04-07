import Header from "../components/header";
import "../styles/global.scss";
import { AppWrapper } from "../context/state";

export default function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Header />
      <Component {...pageProps} />
    </AppWrapper>
  );
}
