/* eslint-disable react/display-name */
import React from "react";
import Avatar from "../../../assets/images/1587376025161-modified.png";
import dummyImage from "../../../assets/images/randall-meng-G3wOGRDvLmg-unsplash.jpg";
import dummyImage2 from "../../../assets/images/randall-meng-G3wOGRDvLmg-unsplash.jpg";
import dummyImage3 from "../../../assets/images/randall-meng-G3wOGRDvLmg-unsplash.jpg";
import Image from "next/image";
import clsx from "clsx";
import { useDrawerContext } from "contexts/DrawerContenxt/drawerContext";

import { CloseSquare, Forbidden, ArrowRight2 } from "iconsax-react";

import styles from "./contactInfo.module.scss";

interface IContactInfoProps {
  drawerRef: React.RefObject<HTMLDivElement>;
}

const ContactInfo: React.FC<IContactInfoProps> = React.forwardRef(
  ({ drawerRef }, ref) => {
    const { hide, handleSetHideTrue } = useDrawerContext();

    return (
      <div
        className={clsx(styles.container, !hide && styles.visible)}
        ref={drawerRef}
      >
        <div className={styles.header}>
          <CloseSquare onClick={handleSetHideTrue} />
          <p>contact info</p>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Avatar} alt="avatar" className={styles.avatar} />
        </div>
        <div className={styles.about}>
          <p>About</p>
          <span>Hey there! I am using chatApp</span>
        </div>
        <div className={styles.media}>
          <div className={styles.text}>
            <p>Media, Links and Docs</p>
            <ArrowRight2 />
          </div>
          <div className={styles.content}>
            <Image src={dummyImage} alt="image" />
            <Image src={dummyImage2} alt="image2" />
            <Image src={dummyImage3} alt="image3" />
          </div>
        </div>
        <div className={styles.starredMessage}>
          <p>Starred Messages</p>
          <ArrowRight2 />
        </div>
        <div className={styles.notification}>
          <div className={styles.muteText}>
            <p>Mute notification</p>
            <ArrowRight2 />
          </div>
          <div className={styles.disappearedMessages}>
            <div>
              <p>Disappeared Messages</p>
              <span>Off</span>
            </div>
            <ArrowRight2 />
          </div>
        </div>

        <div className={styles.footer}>
          <Forbidden />
          <p>block</p>
        </div>
      </div>
    );
  }
);

export default ContactInfo;
