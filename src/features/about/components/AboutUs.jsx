import styles from './AboutUs.module.css'
import isotipoUrl from '../../../shared/assets/images/isotipo-sin-fondo.svg'
import { useLanguage } from '../../../shared/i18n/LanguageContext'

export const AboutUs = () => {
  const { t } = useLanguage()
  return (
    <main className={styles.aboutPage}>
      <img className={`${styles.aboutLogo} ${styles.aboutLogoTop}`} src={isotipoUrl} alt="" aria-hidden="true" />
      <img className={`${styles.aboutLogo} ${styles.aboutLogoLeft}`} src={isotipoUrl} alt="" aria-hidden="true" />
      <img className={`${styles.aboutLogo} ${styles.aboutLogoRight}`} src={isotipoUrl} alt="" aria-hidden="true" />
      <img className={`${styles.aboutLogo} ${styles.aboutLogoBottom}`} src={isotipoUrl} alt="" aria-hidden="true" />
      <div className={styles.aboutShape} aria-hidden="true" />
      <section className={styles.aboutContent} aria-labelledby="about-title">
        <p className={styles.aboutEyebrow}>{t.about.eyebrow}</p>
        <h1 id="about-title" className={styles.aboutTitle}>{t.about.title} <span>{t.about.highlight}</span></h1>
        <p className={styles.aboutLead}>{t.about.lead}</p>

        <div className={styles.aboutStory}>
          <p>{t.about.storyOne}</p>
          <p>{t.about.storyTwo}</p>
        </div>
      </section>
    </main>
  )
}
