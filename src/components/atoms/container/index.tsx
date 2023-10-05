import React, { HTMLProps } from "react";
import styles from "./container.module.scss";
import clsx from "clsx";

interface IContainerProps extends HTMLProps<HTMLDivElement> {}

const Container: React.FC<IContainerProps> = ({ children, ...props }) => {
  return (
    <div {...props} className={clsx(styles.container, props.className)}>
      {children}
    </div>
  );
};

export default Container;
