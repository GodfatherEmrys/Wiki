import { createGlobalStyle, ThemeProvider } from "styled-components";
import "../styles/globals.css";

// import { RemoteMenu } from "@/components/organizations";
import { Header, Main, Footer } from "@/layouts/index.js";
import { MainTitle, IndexCardList } from "@/components/organizations";
import { mainTitle, indexCards } from "../store/dummydata";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      {/* <RemoteMenu indexCards={indexCards} /> */}
      <Header>
        <MainTitle {...mainTitle} />
      </Header>
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
