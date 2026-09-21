import styles from './AnnouncementBar.module.css';
import { useLanguage } from '../../../shared/i18n/LanguageContext'
export const AnnouncementBar = () => {
    const { t } = useLanguage()
    return (
        <>
            <div className={styles.announcementBar}>
                <p className={styles.announcementText}>{t.announcement}</p>
            </div>
        </>
    )
}
