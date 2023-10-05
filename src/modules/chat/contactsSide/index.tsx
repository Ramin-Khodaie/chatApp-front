import React, { useState } from "react";

import TopHeader from "./components/TopHeader";
import SearchBox from "./components/SearchBox";
import Friend from "./components/Friend";

import styles from "./contactsSide.module.scss";

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

const ContactsSide: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const filteredFriends = friends.filter((f) => f.name.includes(search));

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  return (
    <div className={styles.container}>
      <TopHeader />
      <SearchBox onChange={(value) => setSearch(value)} />
      <div className={styles.contactsContainer}>
        {filteredFriends.map((item, index) => (
          <Friend key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ContactsSide;

