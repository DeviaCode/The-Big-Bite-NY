import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import styles from './ContactUs.module.css'

export const ContactUs = () => {
  return (
    <main className={styles.contactPage}>
      <div className={styles.contactGlow} aria-hidden="true" />
      <section className={styles.contactContent} aria-labelledby="contact-title">
        <p className={styles.contactEyebrow}>Ponte en contacto</p>
        <h1 id="contact-title" className={styles.contactTitle}>Hablemos de algo <span>delicioso.</span></h1>
        <p className={styles.contactLead}>¿Tienes una pregunta, una idea o simplemente quieres hablar de galletas? Estamos para leerte.</p>

        <div className={styles.contactInfo}>
          <a href="tel:+571234567890" className={styles.contactItem}>
            <FaPhoneAlt aria-hidden="true" />
            <span>+57 123 456 7890</span>
          </a>
          <span className={styles.contactSeparator} aria-hidden="true">|</span>
          <a href="mailto:info@thebigbite.com" className={styles.contactItem}>
            <FaEnvelope aria-hidden="true" />
            <span>info@thebigbite.com</span>
          </a>
        </div>
      </section>
    </main>
  )
}
