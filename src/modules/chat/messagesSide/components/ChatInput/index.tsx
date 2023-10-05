/* eslint-disable react/display-name */
import React, { ChangeEvent, FormEvent, forwardRef, useState } from "react";
import EmojiHappy from "iconsax-react/dist/cjs/EmojiHappy";
import Microphone2 from "iconsax-react/dist/cjs/Microphone2";
import Send2 from "iconsax-react/dist/cjs/Send2";

import styles from "./chatInput.module.scss";
import EmojiBox from "../EmojiBox";

interface IMessageInputProps {}

const MessageInput: React.FC = forwardRef((props, ref) => {
  const [showEmoji, setShowEmoji] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("");
  const showEmojiBox = () => {
    setShowEmoji(!showEmoji);
  };

  const handleChangeInput = (e: FormEvent<HTMLInputElement>) => {
    setMsg(e.currentTarget.value);
  };

  const appendEmoji = (emoji: string) => {
    setMsg((prev) => prev + emoji);
  };

  const handleSendMessage = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
    }
  };

  return (
    <div className={styles.container}>
      <EmojiBox sendEmoji={appendEmoji} shown={showEmoji} />
      <EmojiHappy className={styles.icon} onClick={() => showEmojiBox()} />
      <input
        type="text"
        placeholder="enter here"
        className={styles.input}
        onChange={handleChangeInput}
        value={msg}
        onKeyDown={(e) => handleSendMessage(e)}
      />
      <Send2 className={styles.sendIcon} />
      <Microphone2 className={styles.icon} />
    </div>
  );
});

export default MessageInput;

