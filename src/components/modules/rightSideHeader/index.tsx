import React from "react";
import styles from "./rightSideHeader.module.scss";
import Image from "next/image";
import Avatar from "../../../assets/images/1587376025161-modified.png";

import SearchNormal1 from "iconsax-react/dist/cjs/SearchNormal1";
import AttachSquare from "iconsax-react/dist/cjs/AttachSquare";
import More2 from "iconsax-react/dist/cjs/More2";
import { useDrawerContext } from "contexts/DrawerContenxt/drawerContext";

interface IRigtSideHeaderProps {}

const RightSideHeader: React.FC<IRigtSideHeaderProps> = () => {
  const { handleToggle } = useDrawerContext();

  return (
    <div className={styles.container}>
      <div className={styles.userInfoContainer}>
        <Image src={Avatar} alt="user" className={styles.avatar} />
        <div className={styles.userInfo}>
          <p>+9809147337274</p>
          <span>last seen today at 6:30 PM</span>
        </div>
      </div>
      <div className={styles.icons}>
        <SearchNormal1 />
        <AttachSquare />
        <More2 onClick={handleToggle} />
      </div>
    </div>
  );
};

export default RightSideHeader;
