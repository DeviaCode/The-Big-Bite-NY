import styles from './CustomBox.module.css';
import customBoxAvifUrl from '../../../shared/assets/images/caja-spanish.avif';
import customBoxWebpUrl from '../../../shared/assets/images/caja-spanish.webp';
import customBoxUrl from '../../../shared/assets/images/caja-spanish.png';
import { useLanguage } from '../../../shared/i18n/LanguageContext'
export const CustomBox = () => {
  const { t } = useLanguage()
  return (
    <>
      <section className={styles.customBox}>
        <div className={styles.customBoxContainer}>
          <div className={styles.customBoxContent}>
            <h2 className={styles.customBoxTitle}>{t.customBox.title} <span className={styles.customBoxTitleHighlight}>{t.customBox.highlight}</span></h2>
            <p className={styles.customBoxDescription}>{t.customBox.description}</p>
          </div>
          <picture>
            <source srcSet={customBoxAvifUrl} type="image/avif" />
            <source srcSet={customBoxWebpUrl} type="image/webp" />
            <img src={customBoxUrl} alt="Caja de galletas" className={styles.customBoxImage} />
          </picture>
        </div>
      </section>
    </>
  )
}
