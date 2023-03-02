import React, { useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Clients from "../Page/Clients";
import styles from "./.module.css";

const Layout = () => {
  const [openSidebar, setOpenSiddebar] = useState(true);

  return (
    <div className={`${styles.layout} ${openSidebar ? styles.opened : ""}`}>
      <div className={styles.sidebar}>
        <Sidebar isOpened={openSidebar} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <Header setOpenSiddebar={setOpenSiddebar} isOpened={openSidebar} />
        </div>
        <div className={styles.page}>
          <Clients />
        </div>
      </div>
    </div>
  );
};

export default Layout;
