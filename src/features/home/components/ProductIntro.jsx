import styles from './ProductIntro.module.css'

export const ProductIntro = () => {
  return (
    <section id="product-intro" className={styles.valuePropsSection}>
      <div className={styles.valuePropsContainer}>
        <div className={styles.valuePropsContent}>
          <h2 className={styles.valuePropsTitle}>Descubre nuestras
            <span className={styles.valuePropsTitleHighlight}>galletas.</span>
          </h2>
          <p className={styles.valuePropsDescription}>Galletas estilo New York, grandes, suaves y cargadas de sabor. Elige tu favorita o pruébalas todas.</p>
          <a className={styles.valuePropsButton} href="#products">Ver nuestros productos</a>
        </div>
      </div>
    </section>
  )
}
