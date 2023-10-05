/* eslint-disable react-hooks/exhaustive-deps */
import Container from "components/atoms/container";
import ContactsSide from "modules/chat/contactsSide";
import MessagesSide from "modules/chat/messagesSide";

import { NextPage } from "next";

import styles from "./home.module.scss";
import ContactInfo from "components/organisms/ContactInfo";
import { useEffect, useRef } from "react";
import { useDrawerContext } from "contexts/DrawerContenxt/drawerContext";
import SplitScreen from "components/template";

const Home: NextPage = () => {
  const drawerContext = useDrawerContext();
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleHideDrawer = () => {
    drawerContext.handleToggle();
  };

  const handleOutsideClick = (event: any) => {
    if (drawerRef.current && !drawerRef?.current?.contains(event.target)) {
      drawerContext.handleSetHideTrue();
    }
  };
  useEffect(() => {
    document.body.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.body.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick, drawerContext.hide]);
  return (
    <Container className={styles.container}>
      <SplitScreen leftWieght={1} rightLeft={3}>
        <ContactsSide />
        <MessagesSide />
        {/* <ContactInfo drawerRef={drawerRef} /> */}
      </SplitScreen>
    </Container>
  );
};

export default Home;
