"use client";
import { useEffect, useState } from "react";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { LogIn } from "lucide-react";
import NavLink from "./links/navLinks/navLink";
import { useMediaQuery } from "../../hooks/use-media-query";

const Navbar = () => {
  const loginLink = { title: "Soy Admin", path: "/login" };
  const logoutLink = { title: "Cerrar Sesión", path: "/logout" };
  const isDesktop = useMediaQuery("(min-width: 1069px)");
  const [session, setSession] = useState(false);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      navbar.classList.toggle("sticky", window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setSession((prev) => !prev);
    setAdmin((prev) => !prev);
  };

  return (
    <nav className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.brand} src="/logop.png" alt="logo" width={100} height={100} />
        <span>AlertaPatitas</span>
      </div>
      <div className={styles.menu}>
        <Links session={session} admin={admin} />
      </div>
      {isDesktop && (
        !session ? (
          <button className={styles.btn2} onClick={() => handleClick()}>
            <NavLink item={loginLink} key={loginLink.title} />
            <LogIn size={24} />
          </button>
        ) : (
          <button className={styles.btn2} onClick={() => handleClick()}>
            <NavLink item={logoutLink} key={logoutLink.title} />
            <LogIn size={24} />
          </button>
        )
      )}
    </nav>
  );
};

export default Navbar;
