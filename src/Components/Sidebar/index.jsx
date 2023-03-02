import React from "react";
import { FaDatabase, FaUsers } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import styles from "./.module.css";
import DropdownMenu from "../DropdownMenu";

const Sidebar = ({ isOpened }) => {
  const links = [
    {
      label: "تعريفات رئيسية",
      icon: <IoSettings />,
      options: [
        {
          label: "عرض بيانات الشركة",
          icon: <FaDatabase />,
        },
      ],
    },
    {
      label: "العملاء",
      icon: <FaUsers />,
      options: [
        {
          label: "تصنيفات العملاء",
          icon: <ImNewspaper />,
        },
        {
          label: "تصنيفات العملاء",
          icon: <ImNewspaper />,
        },
        {
          label: "تصنيفات العملاء",
          icon: <ImNewspaper />,
        },
        {
          label: "تصنيفات العملاء",
          icon: <ImNewspaper />,
        },
        {
          label: "تصنيفات العملاء",
          icon: <ImNewspaper />,
        },
      ],
    },
    {
      label: "الموردين",
      icon: <FaUsers />,
      options: [
        {
          label: "تصنيفات الموردين",
          icon: <ImNewspaper />,
        },
        {
          label: "تصنيفات الموردين",
          icon: <ImNewspaper />,
        },
        {
          label: "تصنيفات الموردين",
          icon: <ImNewspaper />,
        },
        {
          label: "تصنيفات الموردين",
          icon: <ImNewspaper />,
        },
        {
          label: "تصنيفات الموردين",
          icon: <ImNewspaper />,
        },
      ],
    },
    { label: "الصلاحيات", icon: <IoSettings /> },
    {
      label: "العملاء",
      icon: <FaUsers />,
      options: [
        {
          label: "تصنيفات العملاء",
          icon: <ImNewspaper />,
        },
        {
          label: "تصنيفات العملاء",
          icon: <ImNewspaper />,
        },
        {
          label: "تصنيفات العملاء",
          icon: <ImNewspaper />,
        },
        {
          label: "تصنيفات العملاء",
          icon: <ImNewspaper />,
        },
        {
          label: "تصنيفات العملاء",
          icon: <ImNewspaper />,
        },
      ],
    },
    {
      label: "الموردين",
      icon: <FaUsers />,
      options: [
        {
          label: "تصنيفات الموردين",
          icon: <ImNewspaper />,
        },
        {
          label: "تصنيفات الموردين",
          icon: <ImNewspaper />,
        },
        {
          label: "تصنيفات الموردين",
          icon: <ImNewspaper />,
        },
        {
          label: "تصنيفات الموردين",
          icon: <ImNewspaper />,
        },
        {
          label: "تصنيفات الموردين",
          icon: <ImNewspaper />,
        },
      ],
    },
    { label: "الصلاحيات", icon: <IoSettings /> },
  ];

  return (
    <div className={`${styles.sidebar} ${isOpened ? styles.opened : ""}`}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.search__box}>
        <input type="text" placeholder="بحث" />
      </div>
      <ul className={styles.main__list}>
        {links.map((link, i) => (
          <DropdownMenu key={i} link={link} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
