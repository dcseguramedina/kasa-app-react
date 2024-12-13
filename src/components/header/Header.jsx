// Internal libraries
import logo from "../../assets/logo.png";

// Import components
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";

// Import styles
import styles from "./Header.module.css";

// Create Header component
export default function Header() {
  return (
    <header className={styles.header} aria-label="Website header">
      <div className={styles.logo}>
        <Logo image={logo} description="Logo de Kasa" />
      </div>
      <nav className={styles.navbar} aria-label="Main navigation">
        <Navbar home="Accueil" about="À propos" />
      </nav>
    </header>
  );
}
