import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import styles from './ContactUs.module.css'
import { useLanguage } from '../../../shared/i18n/LanguageContext'

export const ContactUs = () => {
  const { t } = useLanguage()
  return (
    <main className={styles.contactPage}>
      <div className={styles.contactGlow} aria-hidden="true" />
      <section className={styles.contactContent} aria-labelledby="contact-title">
        <p className={styles.contactEyebrow}>{t.contact.eyebrow}</p>
        <h1 id="contact-title" className={styles.contactTitle}>{t.contact.title} <span>{t.contact.highlight}</span></h1>
        <p className={styles.contactLead}>{t.contact.lead}</p>

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
