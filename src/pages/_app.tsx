import { AppProps, type AppType } from "next/app";

import "../styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next/types";

export type nextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: nextPageWithLayout;
};

const MyApp = ({
  Component,
  pageProps: { ...pageProps },
}: AppPropsWithLayout) => {
  const Page = Component as nextPageWithLayout;
  const getLayout = Page.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
};
export default MyApp;
