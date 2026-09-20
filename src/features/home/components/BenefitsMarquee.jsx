import styles from './BenefitsMarquee.module.css'

export const BenefitsMarquee = () => {
  const benefits = [
    'Recién horneadas',
    'Grandes y masticables',
    'Ingredientes premium',
    'Hechas con amor',
  ]

  const items = Array.from({ length: 4 }, (_, groupIndex) => (
    <div className={styles.marqueeGroup} key={groupIndex} aria-hidden={groupIndex === 1}>
      {benefits.map((benefit) => (
        <span className={styles.marqueeItem} key={benefit}>
          {benefit}
          <span className={styles.marqueeSeparator} aria-hidden="true">✦</span>
        </span>
      ))}
    </div>
  ))

  return (
    <section className={styles.marquee} aria-label="Beneficios de la marca">
      <div className={styles.marqueeTrack}>
        {items}
      </div>
    </section>
  )
}
