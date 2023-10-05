import React from "react";
import clsx from "clsx";
import { emojis } from "mock/emojis";

import styles from "./emojiBox.module.scss";

interface IEmojiBoxProps {
  sendEmoji: (emoji: string) => void;
  shown: boolean;
}

const EmojiBox: React.FC<IEmojiBoxProps> = ({ sendEmoji, shown }) => {
  return (
    <div
      className={clsx(styles.container, shown ? styles.visible : "")}
      id="emoji"
    >
      {emojis.map((e, index) => (
        <span onClick={() => sendEmoji(e)} key={index} id="emoji">
          {e}
        </span>
      ))}
    </div>
  );
};

export default EmojiBox;

