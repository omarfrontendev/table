import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import styles from "./.module.css";

const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  const [open, setopen] = useState(false);
  return (
    <>
      <button
        className={styles.search__btn}
        onClick={(e) => {
          setopen((prev) => !prev);
          e.stopPropagation();
        }}
      >
        {!open ? <AiOutlineSearch /> : <AiOutlineClose />}
      </button>
      {open && (
        <span className={styles.search__box}>
          <input
            type="text"
            value={filterValue || ""}
            onChange={(e) => setFilter(e.target.value)}
            className={styles.search__box}
            autoFocus
          />
        </span>
      )}
    </>
  );
};

export default ColumnFilter;
