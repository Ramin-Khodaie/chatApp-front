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
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const checkToken = async () => {
      const token = Cookies.get("Authentication");
      if (!token) {
        router.replace("/login");
      } else {
        const response = await getUser(token);
        if (!response.ok) {
          Cookies.remove("Authentication");
          router.replace("/");
        } else {
          if (!response.user) {
            Cookies.remove("Authentication");
            router.replace("/");
          } else {
            setUser(response.user);
            setAuthenticated(true);
          }
        }
      }
    };

    checkToken();
  }, []);
  useEffect(() => {
    getUserCredentials().then((accessToken) => {});
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
