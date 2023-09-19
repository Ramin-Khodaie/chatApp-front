import React, { useState } from "react";

import styles from "./searchBox.module.scss";
import { SearchNormal1 } from "iconsax-react";

interface ISearchBBoxProps {
  onChange: (value: string) => void;
}

const SearchBox: React.FC<ISearchBBoxProps> = ({ onChange }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange && onChange(event.target.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <SearchNormal1 size={24} />
        <input
          type="text"
          placeholder="Search or start new chat"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
export default SearchBox;
