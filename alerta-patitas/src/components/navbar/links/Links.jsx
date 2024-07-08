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
          className={`${styles.menuLinks} ${location.pathname === link.path && styles.active}`}
        >
          {link.title}
        </Link>
      </DrawerClose>
    ));
  };

  return (
    <div className={styles.container}>
      {isMobile ? (
        <>
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} direction="right" className="dark">
            <DrawerTrigger asChild>
              <MenuIcon className="cursor-pointer" size={40} onClick={() => setDrawerOpen(true)} />
            </DrawerTrigger>
            <DrawerContent className="dark">
              {renderDrawerLinks()}
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <div className={styles.links}>
          {renderLinks()}
        </div>
      )}
    </div>
  );
};

export default Links;
