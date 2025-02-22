"use client";
import { useEffect, useState } from "react";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { LogIn } from "lucide-react";
import NavLink from "./links/navLinks/navLink";
import { useMediaQuery } from "../../hooks/use-media-query";
import { useNavigate, useLocation } from "react-router-dom";
import LoginModal from "../login/loginModal";

const Navbar = () => {
  const loginLink = { title: "Soy Admin" };
  const logoutLink = { title: "Cerrar Sesión" };
  const isDesktop = useMediaQuery("(min-width: 1069px)");
  const [session, setSession] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  
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

 
  useEffect(() => {
     if (!admin && !session && location.pathname === '/admin') {
      navigate('/');
    }
  }, [admin, session, navigate, location.pathname]);

  const handleLogin = () => {
    setSession(true);
    setAdmin(true);
  };

  const handleClick = () => {
    if (session) {

      setSession(false);
      setAdmin(false);
      navigate('/');
    } else {

      setIsLoginModalOpen(true);
    }
  };

  return (
    <>
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

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
};

export default Navbar;
