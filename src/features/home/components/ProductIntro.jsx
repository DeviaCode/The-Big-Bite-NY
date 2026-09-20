import styles from './ProductIntro.module.css'
import { Link } from 'react-router-dom'

export const ProductIntro = () => {
  return (
    <section id="product-intro" className={styles.productIntroSection}>
      <div className={styles.productIntroContainer}>
        <div className={styles.productIntroContent}>
          <p className={styles.productIntroEyebrow}>Conoce nuestros sabores</p>
          <h2 className={styles.productIntroTitle}>Descubre nuestras
            <span className={styles.productIntroTitleHighlight}>galletas.</span>
          </h2>
          <p className={styles.productIntroDescription}>Galletas estilo New York, grandes, suaves y cargadas de sabor. Elige tu favorita o pruébalas todas.</p>
          <Link className={styles.productIntroButton} to="/products">
            <span>Ver nuestros productos</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
