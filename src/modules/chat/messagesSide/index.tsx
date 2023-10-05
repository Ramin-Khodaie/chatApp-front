import React, { useRef } from "react";
import Header from "./components/Header";
import MessageInput from "./components/ChatInput";
import clsx from "clsx";
import { useDrawerContext } from "contexts/DrawerContenxt/drawerContext";

import styles from "./messagesSide.module.scss";

interface IRightSideParams {}

const MessagesSide: React.FC<IRightSideParams> = () => {
  const { hide } = useDrawerContext();
  return (
    <div className={clsx(styles.container, hide && styles.aggregated)}>
      <Header />
      <MessageInput />
    </div>
  );
};

export default MessagesSide;

