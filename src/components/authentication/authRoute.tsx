import React, { useEffect, useState } from "react";
import Router from "next/router";
import Cookies from "js-cookie";
import { getUser } from "services/auth";
import { AppProps } from "next/app";

const authRoute = (props: any) => {
  const [user, setUser] = useState();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = Cookies.get("Authentication");
      if (!token) {
        Router.replace("/");
      } else {
        const response = await getUser(token);
        if (!response.ok) {
          Cookies.remove("Authentication");
          Router.replace("/");
        } else {
          if (!response.user) {
            Cookies.remove("Authentication");
            Router.replace("/");
          } else {
            setUser(response.user);
            setAuthenticated(true);
          }
        }
      }
    };

    checkToken();
  }, []);

  if (authenticated) {
    return props.children;
  } else {
    return null;
  }
};

export default authRoute;

