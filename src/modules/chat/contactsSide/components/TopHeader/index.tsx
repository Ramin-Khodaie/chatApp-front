import React, { useState } from "react";
import StatusIcon from "iconsax-react/dist/cjs/Status";
import MessageText from "iconsax-react/dist/cjs/MessageText";
import More2 from "iconsax-react/dist/cjs/More2";
import Avatar from "assets/images/1587376025161-modified.png";
import Image from "next/image";

import styles from "./topHeader.module.scss";
import Dialog from "components/organisms/CustomeDialog";

interface ITopHeaderProps {}

const TopHeader: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Image src={Avatar} alt="user" className={styles.avatar} />
      <div className={styles.icons}>
        <StatusIcon />
        <MessageText />
        <More2 onClick={() => setOpen(!open)} />
      </div>
      <Dialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default TopHeader;
