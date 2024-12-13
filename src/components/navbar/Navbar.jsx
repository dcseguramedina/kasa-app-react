// Internal libraries
import { Link } from 'react-router-dom'

// Import styles
import styles from './Navbar.module.scss'

// Create Navbar component
export default function Navbar({ home, about }) {
  if (!home || !about) {
    console.error('Navbar component: Home and About props are required.')
    return null
  }

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <ul className={styles.nav_list}>
        <li className={styles.nav_list_item}>
          <Link to="/" aria-label={home}>{home}</Link>
        </li>
        <li className={styles.nav_list_item}>
          <Link to="/about" aria-label={about}>{about}</Link>
        </li>
      </ul>
    </nav>
  )
}
