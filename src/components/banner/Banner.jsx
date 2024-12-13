// Import styles
import styles from './Banner.module.scss'

// Create Banner component
export default function Banner({ image, alt, description }) {
  if (!image || !alt || !description) {
    console.error('Banner component: Image, alt, and description props are required.');
    return null;
  }

  return (
    <section className={styles.banner} aria-label={description}>
      <div className={styles.banner_underlay}></div>
      <img className={styles.banner_image} src={image} alt={alt} />
      <div className={styles.banner_overlay}></div>
      <p className={styles.banner_text}>{description}</p>
    </section>
  )
}
