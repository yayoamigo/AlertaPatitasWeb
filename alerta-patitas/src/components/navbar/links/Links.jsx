/* eslint-disable react/prop-types */
import styles from "./links.module.css";
import NavLink from "./navLinks/navLink";
import { useMediaQuery } from "../../../hooks/use-media-query";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "../../ui/drawer";
import { MenuIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { useState } from "react";

const links = [
  { title: "Inicio", path: "/" },
  { title: "Mascotas", path: "/mascotas" },
  { title: "Soy Refugio", path: "/contacto" },
  { title: "Nosotros", path: "/nosotros" },
  { title: "Proceso", path: "/proceso" },
];

const adminLinks = [
  { title: "Admin", path: "/admin" },
  { title: "Mascotas", path: "/mascotas" },
];

const Links = ({ session, admin }) => {
  const isMobile = useMediaQuery("(max-width: 1068px)");
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const renderLinks = () => {
    const currentLinks = session && admin ? adminLinks : links;
    return currentLinks.map((link) => (
      <NavLink item={link} key={link.title} />
    ));
  };

  const renderDrawerLinks = () => {
    const currentLinks = session && admin ? adminLinks : links;
    return currentLinks.map((link) => (
      <DrawerClose asChild key={link.title}>
        <Link
          to={link.path}
          className={`${styles.navbar__link} ${location.pathname === link.path ? styles['navbar__link-active'] : ''}`}
        >
          {link.title}
        </Link>
      </DrawerClose>
    ));
  };

  return isMobile ? (
    <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
      <DrawerTrigger asChild>
        <button className={styles.navbar__menu_button}>
          <MenuIcon size={32} />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className={styles.navbar__drawer}>
          {renderDrawerLinks()}
        </div>
      </DrawerContent>
    </Drawer>
  ) : (
    <div className={styles.navbar__menu}>
      {renderLinks()}
    </div>
  );
};

export default Links;
