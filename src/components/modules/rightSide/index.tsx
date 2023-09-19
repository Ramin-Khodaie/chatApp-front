import React, { useRef } from "react";
import styles from "./rightSide.module.scss";
import RightSideHeader from "../rightSideHeader";
import MessageInput from "../messageInput";
import clsx from "clsx";
import { useDrawerContext } from "contexts/DrawerContenxt/drawerContext";

interface IRightSideParams {}

const RightSide: React.FC<IRightSideParams> = () => {
  const { hide } = useDrawerContext();
  return (
    <div className={clsx(styles.container, hide && styles.aggregated)}>
      <RightSideHeader />
      <MessageInput />
    </div>
  );
};

export default RightSide;
