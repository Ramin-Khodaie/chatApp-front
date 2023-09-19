/* eslint-disable react-hooks/exhaustive-deps */
import Container from "components/atoms/container";
import LeftSide from "components/modules/leftSide";
import RightSide from "components/modules/rightSide";

import { NextPage } from "next";

import styles from "./home.module.scss";
import ContactInfo from "components/modules/contactInfo";
import { useEffect, useRef } from "react";
import { useDrawerContext } from "contexts/DrawerContenxt/drawerContext";

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
    <div className={styles.main}>
      <Container className={styles.container}>
        <LeftSide />
        <RightSide />
        <ContactInfo                    
          drawerRef={drawerRef}
        />
      </Container>
    </div>
  );
};

export default Home;
