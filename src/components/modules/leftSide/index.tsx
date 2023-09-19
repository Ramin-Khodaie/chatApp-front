import React, { useState } from "react";

import Status from "../leftSideHeader";
import SearchBox from "../searchBox";
import Friend from "../friend";

import styles from "./leftSide.module.scss";

interface ILeftSideParams {}

const friends: { name: string }[] = [
  {
    name: "ramin",
  },
  {
    name: "ayda",
  },
  {
    name: "maryam",
  },
  {
    name: "alireza",
  },
];

const LeftSide: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const filteredFriends = friends.filter((f) => f.name.includes(search));

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  return (
    <div className={styles.container}>
      <Status />
      <SearchBox onChange={(value) => setSearch(value)} />
      <div className={styles.contactsContainer}>
        {filteredFriends.map((item, index) => (
          <Friend key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
