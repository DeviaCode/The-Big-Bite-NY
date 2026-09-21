import styles from './ProductIntro.module.css'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../../shared/i18n/LanguageContext'

export const ProductIntro = () => {
  const { t } = useLanguage()
  return (
    <section id="product-intro" className={styles.productIntroSection}>
      <div className={styles.productIntroContainer}>
        <div className={styles.productIntroContent}>
          <p className={styles.productIntroEyebrow}>{t.intro.eyebrow}</p>
          <h2 className={styles.productIntroTitle}>{t.intro.title}
            <span className={styles.productIntroTitleHighlight}>{t.intro.highlight}</span>
          </h2>
          <p className={styles.productIntroDescription}>{t.intro.description}</p>
          <Link className={styles.productIntroButton} to="/products">
            <span>{t.intro.button}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
