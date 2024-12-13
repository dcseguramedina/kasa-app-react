//Internal libraries
import image from '../../assets/banner_home.png'

//Import components
import Banner from '../../components/banner/Banner'
import Gallery from '../../components/gallery/Gallery'

//Import styles
import styles from './Home.module.scss'

// Create Home component
export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.banner}>
        <Banner
          image={image}
          alt="Paysage côtier"
          description="Chez vous, partout et ailleurs"
          aria-label="Banner image"
        />
      </section>
      <main className={styles.gallery}>
        <Gallery />
      </main>
    </div>
  )
}
