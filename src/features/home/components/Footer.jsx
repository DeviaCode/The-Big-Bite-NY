import { FaFacebookF, FaInstagram, FaRegEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css'
import { useLanguage } from '../../../shared/i18n/LanguageContext'

export const Footer = () => {
  const { t } = useLanguage()
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerPhrase}>
            <p className={styles.footerPhraseText}>
              {t.footer.phrase} <span className={styles.footerPhraseTextHighlight}>{t.footer.highlight}</span>
            </p>
          </div>

          <div className={styles.footerInfo}>
            <a href="/" className={styles.footerPrivacyInfo}>
              Privacy Policy 
            </a>
            <span className={styles.footerInfoSeparator}>|</span>
            <a href="/" className={styles.footerNumberInfo}>
              +57 123 456 7890
            </a>
            <span className={styles.footerInfoSeparator}>|</span>
            <a href="/" className={styles.footerMailInfo}>
              info@thebigbite.com
            </a>
          </div>

          <div className={styles.footerSocial}>
            <a href="/" className={styles.footerSocialLink}>
              <FaRegEnvelope />
            </a>
            <a href="/" className={styles.footerSocialLink}>
              <FaFacebookF />
            </a>
            <a href="/" className={styles.footerSocialLink}>
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
