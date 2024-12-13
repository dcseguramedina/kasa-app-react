// Import styles
import styles from './Copyright.module.scss'

// Create Copyright component
export default function Copyright({ content }) {
  if (!content) {
    console.error('Copyright component: Content prop is required.')
    return null
  }

  return (
    <p className={styles.copyright} aria-label="Copyright information">
      {content}
    </p>
  )
}
