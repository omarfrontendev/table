import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import {
  AiOutlineMenuUnfold,
  AiOutlinePoweroff,
  AiOutlineMenuFold,
} from "react-icons/ai";
import styles from "./.module.css";

const Header = ({ setOpenSiddebar, isOpened }) => {
  return (
    <div className={styles.header}>
      <div className={styles.right}>
        <div className={styles.user__box}>
          <div className={styles.user__img}></div>
          <h5 className={styles.user__name}>
            مصطفى
            <RiArrowDropDownLine className={styles.drop__icon} />
          </h5>
        </div>
        <div className={styles.notificate}>
          <span className={styles.notif__num}>1</span>
          <IoIosNotificationsOutline />
        </div>
        <div className={styles.notificate}>
          <CiMail />
        </div>
      </div>
      <div className={styles.left}>
        <button onClick={() => setOpenSiddebar((prev) => !prev)}>
          {isOpened ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
        </button>
        <button>
          <AiOutlinePoweroff />
          تسجيل الخروج
        </button>
      </div>
    </div>
  );
};

export default Header;
