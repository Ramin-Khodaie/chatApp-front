import Cookies from "js-cookie";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getUser } from "services/auth";
const IndexPage = () => {
  const router = useRouter();

  // const checkToken = async () => {
  //   const token = Cookies.get("Authorization");
  //   if (!token) {
  //     router.replace("/login");
  //   } else {
  //     const response = await getUser();
  //     console.log(response);
  //     if (response.message === "failed") {
  //       Cookies.remove("Authorization");
  //       router.replace("/login");
  //     } else {
  //       if (!response.data) {
  //         Cookies.remove("Authorization");
  //         router.replace("/login");
  //       } else {
  //         // TODO: store user in some state
  //         router.replace("/home");
  //       }
  //     }
  //   }
  // };
  // useEffect(() => {
  //   console.log("herer");
  //   checkToken();
  // }, []);
  return <div></div>;
};

export default IndexPage;

