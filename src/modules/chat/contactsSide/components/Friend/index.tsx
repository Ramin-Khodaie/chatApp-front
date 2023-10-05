import React from "react";
import Avatar from "assets/images/1587376025161-modified.png";
import Image from "next/image";

import styles from "./friend.module.scss";

interface IFriendProps {
  item: { name: string };
}

const Friend: React.FC<IFriendProps> = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.userInfoContainer}>
        <Image src={Avatar} alt="user" className={styles.avatar} />
        <div className={styles.userInfo}>
          <p>{item.name}</p>
          <span>last Message</span>
        </div>
      </div>
      <p className={styles.time}>7:30 PM</p>
    </div>
  );
};

export default Friend;
