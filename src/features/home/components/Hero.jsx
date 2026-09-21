import styles from './Hero.module.css'
import heroBackgroundUrl from '../../../shared/assets/images/background-hero.png'
import mobileHeroBackgroundUrl from '../../../shared/assets/images/background-hero-movil.jpg'
import { useLanguage } from '../../../shared/i18n/LanguageContext'

export const Hero = () => {
  const { t } = useLanguage()
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <picture>
          <source media="(max-width: 820px)" srcSet={mobileHeroBackgroundUrl} />
          <img className={styles.heroBackground} src={heroBackgroundUrl} alt="" aria-hidden="true" />
        </picture>
        <div className={styles.heroContent}>
          <h2 className={styles.heroSubtitle}>{t.hero.subtitle}</h2>
          <h1 className={styles.heroTitle}>{t.hero.title} <span className={styles.heroTitleHighlight}>{t.hero.highlight}</span></h1>
          <p className={styles.heroDescription}>{t.hero.description}</p>
        </div>
      </div>
    </section>
  )
}
