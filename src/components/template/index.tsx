import React from "react";
import styles from "./splitScreen.module.scss";
import Container from "components/atoms/container";

interface ISplitScreenProps {
  children: React.ReactNode;
  leftWieght: number;
  rightLeft: number;
}

const SplitScreen: React.FC<ISplitScreenProps> = ({
  children,
  leftWieght,
  rightLeft,
}) => {
  const [left, right] = React.Children.toArray(children);
  return (
    <div className={styles.main}>
      <div className={styles.leftSide} style={{ flex: leftWieght }}>
        {left}
      </div>
      <div className={styles.rightSide} style={{ flex: rightLeft }}>
        {right}
      </div>
    </div>
  );
};

export default SplitScreen;

