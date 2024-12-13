// Internal libraries
import logo from "../../assets/logoB&W.png";

// Import components
import Logo from "../logo/Logo";
import Copyright from "../copyright/Copyright";

// Import styles
import styles from "./Footer.module.css";

// Constants
const FOOTER_LOGO_DESCRIPTION = "Logo de kasa en noir et blanc";
const COPYRIGHT_CONTENT = "© 2020 Kasa. All rights reserved";

// Create Footer component
export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Footer section">
      <div className={styles.logo}>
        <Logo image={logo} description={FOOTER_LOGO_DESCRIPTION} />
      </div>
      <div className={styles.copyright}>
        <Copyright content={COPYRIGHT_CONTENT} />
      </div>
    </footer>
  );
}
