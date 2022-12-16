import "../app/globals.css";
import type { AppProps } from "next/app";
import Layout from "../app/components/layout";
import { Provider } from "react-redux";
import { store } from "../app/store/store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { dogApi } from "../app/store/dog.api";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
