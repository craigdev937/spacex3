import React from "react";
import { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import "../styles/globals.css";

export default function
App({ Component, pageProps }: AppProps) {
    const RQClient = React.useRef(new QueryClient());

    return (
        <React.StrictMode>
            <QueryClientProvider client={RQClient.current}>
                <Hydrate state={pageProps.dehydratedState}>
                    <Component {...pageProps} />
                    <ReactQueryDevtools initialIsOpen={false} />
                </Hydrate>
            </QueryClientProvider>
        </React.StrictMode>
    );
};





