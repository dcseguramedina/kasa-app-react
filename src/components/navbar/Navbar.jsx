// Internal libraries
import { NavLink } from "react-router-dom";

// Import styles
import styles from "./Navbar.module.css";

// Create Navbar component
export default function Navbar({ home, about }) {
  if (!home || !about) {
    console.error("Navbar component: Home and About props are required.");
    return null;
  }

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <ul className={styles.nav_list}>
        <li className={styles.nav_list_item}>
          <NavLink
            to="/"
            aria-label={home}
            style={({ isActive }) => {
              return isActive ? { textDecorationLine: "underline" } : {};
            }}
          >
            {home}
          </NavLink>
        </li>
        <li className={styles.nav_list_item}>
          <NavLink
            to="/about"
            aria-label={about}
            style={({ isActive }) => {
              return isActive ? { textDecorationLine: "underline" } : {};
            }}
          >
            {about}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
