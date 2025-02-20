"use client";
import { useEffect, useState } from "react";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { LogIn } from "lucide-react";
import NavLink from "./links/navLinks/navLink";
import { useMediaQuery } from "../../hooks/use-media-query";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const loginLink = { title: "Soy Admin" };
  const logoutLink = { title: "Cerrar Sesión" };
  const isDesktop = useMediaQuery("(min-width: 1069px)");
  const [session, setSession] = useState(false);
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        navbar.classList.toggle(styles['navbar--sticky'], window.scrollY > 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle admin navigation only when admin state changes
  useEffect(() => {
    // Only handle navigation for admin routes
    if (admin && location.pathname !== '/admin') {
      navigate('/admin');
    } else if (!admin && !session && location.pathname === '/admin') {
      navigate('/');
    }
  }, [admin, session]);

  const handleClick = () => {
    setSession(prev => !prev);
    setAdmin(prev => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <div className={styles.navbar__brand}>
          <img className={styles.navbar__logo} src="/logop.png" alt="logo" width={100} height={100} />
          <span>AlertaPatitas</span>
        </div>
        <div className={styles.navbar__menu}>
          <Links session={session} admin={admin} />
        </div>
        {isDesktop && (
          <button className={styles.navbar__button} onClick={handleClick}>
            <span className={styles.navbar__button_text}>
              {!session ? loginLink.title : logoutLink.title}
            </span>
            <LogIn size={24} />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
