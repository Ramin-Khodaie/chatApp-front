import React, { HTMLProps } from "react";
import styles from "./container.module.scss";
import clsx from "clsx";

interface IContainerProps extends HTMLProps<HTMLDivElement> {
  glassBg?: boolean;
}

const Container: React.FC<IContainerProps> = ({
  glassBg = false,
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={clsx(
        styles.container,
        glassBg && styles.glassBg,
        props.className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
