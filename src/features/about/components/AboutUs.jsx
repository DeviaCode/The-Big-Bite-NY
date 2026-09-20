import styles from './AboutUs.module.css'
import isotipoUrl from '../../../shared/assets/images/isotipo-sin-fondo.svg'

export const AboutUs = () => {
  return (
    <main className={styles.aboutPage}>
      <img className={`${styles.aboutLogo} ${styles.aboutLogoTop}`} src={isotipoUrl} alt="" aria-hidden="true" />
      <img className={`${styles.aboutLogo} ${styles.aboutLogoLeft}`} src={isotipoUrl} alt="" aria-hidden="true" />
      <img className={`${styles.aboutLogo} ${styles.aboutLogoRight}`} src={isotipoUrl} alt="" aria-hidden="true" />
      <img className={`${styles.aboutLogo} ${styles.aboutLogoBottom}`} src={isotipoUrl} alt="" aria-hidden="true" />
      <div className={styles.aboutShape} aria-hidden="true" />
      <section className={styles.aboutContent} aria-labelledby="about-title">
        <p className={styles.aboutEyebrow}>The Big Bite NY</p>
        <h1 id="about-title" className={styles.aboutTitle}>Más grandes. <span>Más memorables.</span></h1>
        <p className={styles.aboutLead}>Galletas estilo New York, inspiradas en la energía de sus calles y hechas para convertir cualquier momento en algo especial.</p>

        <div className={styles.aboutStory}>
          <p>Creemos que una buena galleta no es solo un postre. Es una pausa, una conversación y ese primer mordisco que cambia el día.</p>
          <p>Por eso horneamos galletas gruesas, suaves por dentro y cargadas de sabor, usando ingredientes reales y mucho amor.</p>
        </div>
      </section>
    </main>
  )
}
