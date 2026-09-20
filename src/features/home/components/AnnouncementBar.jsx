import styles from './AnnouncementBar.module.css';
export const AnnouncementBar = () => {
    return (
        <>
            <div className={styles.announcementBar}>
                <p className={styles.announcementText}>¡Bienvenido a The Big Bite NY! Disfruta de nuestras deliciosas galletas estilo New York.</p>
            </div>
        </>
    )
}