import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from "framer-motion";

import styles from "./.module.css";

const DropdownMenu = ({ link }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className={styles.main__button}>
      <button
        className={open ? styles.active : ""}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div>
          {link.icon}
          {link.label}
        </div>
        {link?.options && <span className={styles.notify}>14</span>}
        {link?.options && (
          <RiArrowDropDownLine
            className={`${styles.drop__icon} ${open ? styles.rotate : ""}`}
          />
        )}
      </button>

      <motion.ul
        initial={{ height: "0" }}
        animate={{ height: open ? "auto" : 0 }}
        transition={{ ease: "linear" }}
        className={`${styles.inside__menu} ${open ? styles.opened : ""}`}
      >
        {link?.options?.map((link2, index) => (
          <li key={index}>
            {link2.icon}
            {link2.label}
          </li>
        ))}
      </motion.ul>
    </li>
  );
};

export default DropdownMenu;
