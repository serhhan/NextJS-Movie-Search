import Header from "../components/header";
import "../styles/global.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import { AppWrapper } from "../context/state";

export default function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Header />
      <Component {...pageProps} />
    </AppWrapper>
  );
}
