import { useState } from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

import DrawerContextProvider from "contexts/DrawerContenxt/drawerContext";
import { store } from "@redux";

import 'react-toastify/dist/ReactToastify.css';
import "styles/index.scss";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            retryOnMount: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            cacheTime: 60 * 60 * 60 * 60,
            staleTime: 60 * 60 * 60 * 60,
            onError: () => {
              console.log("Error ----> ", Error);
            },
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <DrawerContextProvider>
          <Component {...pageProps} />
          <ToastContainer />
        </DrawerContextProvider>
      </Provider>
    </QueryClientProvider>
  );
}
