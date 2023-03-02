import React, { useState } from "react";
import { FaUsers, FaUserPlus } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";
import { GrRefresh } from "react-icons/gr";
import { TbArrowBackUp } from "react-icons/tb";
import styles from "./.module.css";
import UsersTable from "../../Components/UsersTable";

const Clients = () => {
  const [data, setData] = useState([
    {
      code: "01",
      name: "Omar",
      phone_number: "01210196313",
      balance: "929.87",
      freeze: "Freez",
    },
    {
      code: "02",
      name: "Ahmed",
      phone_number: "01112368913",
      balance: "929.87",
      freeze: true,
    },
    {
      code: "03",
      name: "Ayman",
      phone_number: "01210196313",
      balance: "929.87",
      freeze: true,
    },
    {
      code: "04",
      name: "Eslam",
      phone_number: "01112368913",
      balance: "929.87",
      freeze: true,
    },
    {
      code: "05",
      name: "Yasser",
      phone_number: "01063161287",
      balance: "929.87",
      freeze: true,
    },
    {
      code: "05",
      name: "Yasser",
      phone_number: "01063161287",
      balance: "929.87",
      freeze: true,
    },
    {
      code: "05",
      name: "Yasser",
      phone_number: "01063161287",
      balance: "929.87",
      freeze: true,
    },
    {
      code: "05",
      name: "Yasser",
      phone_number: "01063161287",
      balance: "929.87",
      freeze: true,
    },
    {
      code: "05",
      name: "Yasser",
      phone_number: "01063161287",
      balance: "929.87",
      freeze: true,
    },
    {
      code: "05",
      name: "Yasser",
      phone_number: "01063161287",
      balance: "929.87",
      freeze: true,
    },
    {
      code: "05",
      name: "Yasser",
      phone_number: "01063161287",
      balance: "929.87",
      freeze: true,
    },
    {
      code: "05",
      name: "Yasser",
      phone_number: "01063161287",
      balance: "929.87",
      freeze: true,
    },
    {
      code: "05",
      name: "Yasser",
      phone_number: "01063161287",
      balance: "929.87",
      freeze: true,
    },
  ]);

  return (
    <div className={styles.page}>
      <div className={styles.page__header}>
        <div className={styles.right}>
          <FaUsers />
          <h3>العملاء</h3>
        </div>
        <div className={styles.left}>
          <IoAddSharp size={25} />
          <GrRefresh size={20} />
          <TbArrowBackUp size={25} />
        </div>
      </div>
      <button
        className={styles.add__new__client}
        onClick={() => {
          // const newData = data;
          setData((prev) => [
            {
              code: "",
              name: "",
              phone_number: "",
              balance: "",
              freeze: true,
            },
            ...prev,
          ]);
        }}
      >
        <FaUserPlus />
        عميل حديد
      </button>
      <UsersTable data={data} setData={setData} />
    </div>
  );
};

export default Clients;
