import styles from './Hero.module.css'
import heroBackgroundUrl from '../../../shared/assets/images/background-hero.png'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <img
          className={styles.heroBackground}
          src={heroBackgroundUrl}
          alt=""
          aria-hidden="true"
        />
        <div className={styles.heroContent}>
          <h2 className={styles.heroSubtitle}>Galletas estilo new york</h2>
          <h1 className={styles.heroTitle}>Suaves por dentro. <span className={styles.heroTitleHighlight}>Crujientes por fuera.</span></h1>
          <p className={styles.heroDescription}>Gruesas, Suaves y Cargada de mucho sabor.</p>
        </div>
      </div>
    </section>
  )
}