import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

import DrawerContextProvider from "contexts/DrawerContenxt/drawerContext";
import { store } from "@redux";

import "react-toastify/dist/ReactToastify.css";
import "styles/index.scss";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { getUserCredentials } from "utils/auth";
import { getUser } from "services/auth";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const checkToken = async () => {
    const token = Cookies.get("Authorization");
    if (!token) {
      router.replace("/login");
    } else {
      const response = await getUser();
      console.log(response);
      if (response.message === "failed") {
        Cookies.remove("Authorization");
        router.replace("/home");
      } else {
        if (!response.data) {
          Cookies.remove("Authorization");
          router.replace("/home");
        } else {
          // TODO: store user in some state
          router.replace("/home");
        }
      }
    }
  };
  console.log("app");
  useEffect(() => {
    checkToken();
  }, []);

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

export default App;
