/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import styles from "./navLink.module.css";

const NavLink = ({ item }) => {
  const location = useLocation();

  return (
    <Link
      to={item.path}
      className={`${styles.container} ${location.pathname === item.path && styles.active}`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
