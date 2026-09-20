import { useEffect, useState } from 'react'
import styles from './OurProducts.module.css'

import chipsCookieAvif from '../../../shared/assets/images/chips.avif'
import chipsCookieWebp from '../../../shared/assets/images/chips.webp'
import chipsCookiePng from '../../../shared/assets/images/chips.png'
import redCookieAvif from '../../../shared/assets/images/red.avif'
import redCookieWebp from '../../../shared/assets/images/red.webp'
import redCookiePng from '../../../shared/assets/images/red.png'
import brownieCookieAvif from '../../../shared/assets/images/brownie.avif'
import brownieCookieWebp from '../../../shared/assets/images/brownie.webp'
import brownieCookiePng from '../../../shared/assets/images/brownie.png'
import mandmCookieAvif from '../../../shared/assets/images/m-and-m.avif'
import mandmCookieWebp from '../../../shared/assets/images/m-and-m.webp'
import mandmCookiePng from '../../../shared/assets/images/m-and-m.png'

const PRODUCTS = [
  {
    theme: 'chips',
    image: { avif: chipsCookieAvif, webp: chipsCookieWebp, png: chipsCookiePng },
    alt: 'Chips Cookie',
    title: 'La clásica chunk chips',
    subtitle: 'Un clásico que nunca falla.',
    description: 'Galleta grande, suave y recién horneada, cargada de generosos chunks de chocolate que se derriten en cada mordida.',
  },
  {
    theme: 'redVelvet',
    image: { avif: redCookieAvif, webp: redCookieWebp, png: redCookiePng },
    alt: 'Red Velvet Cookie',
    title: 'Explosión Red Velvet',
    subtitle: 'Suave, intensa e icónica.',
    description: 'Nuestra versión de Red Velvet: una galleta suave y ligeramente cremosa, combinada con irresistibles chips de chocolate blanco.',
  },
  {
    theme: 'brownie',
    image: { avif: brownieCookieAvif, webp: brownieCookieWebp, png: brownieCookiePng },
    alt: 'Brownie Cookie',
    title: 'Brownie Chocolate',
    subtitle: 'El brownie perfecto hecho galleta.',
    description: 'Una galleta de chocolate intensa y fudgy, con profundo sabor a cacao y trozos de chocolate que se derriten al hornearse.',
  },
  {
    theme: 'mandm',
    image: { avif: mandmCookieAvif, webp: mandmCookieWebp, png: mandmCookiePng },
    alt: 'M&M Cookie',
    title: 'M&M Cookie',
    subtitle: 'Color, chocolate y mucho crunch.',
    description: 'Una galleta grande y suave, llena de chocolate y M&M’s para combinar una textura irresistible con ese toque crujiente que tanto gusta.',
  },
]

const themeClassMap = {
  chips: styles.ourProductsItemChips,
  redVelvet: styles.ourProductsItemRedVelvet,
  brownie: styles.ourProductsItemBrownie,
  mandm: styles.ourProductsItemMandm,
}

export const OurProducts = ({ onComplete, onThemeChange }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const product = PRODUCTS[activeIndex]

  useEffect(() => {
    onThemeChange?.(product.theme)
  }, [onThemeChange, product.theme])

  const showNextProduct = () => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === PRODUCTS.length - 1) {
        onComplete?.()
        return currentIndex
      }

      return currentIndex + 1
    })
  }

  return (
    <section id="products" className={`${styles.ourProducts} ${themeClassMap[product.theme]}`}>
      <article className={styles.ourProductsItem} key={product.theme}>
        <div className={styles.ourProductsItemImage}>
          <picture>
            <source srcSet={product.image.avif} type="image/avif" />
            <source srcSet={product.image.webp} type="image/webp" />
            <img src={product.image.png} alt={product.alt} />
          </picture>
        </div>

        <div className={styles.ourProductsItemContent}>
          <p className={styles.ourProductsEyebrow}>Nuestros productos</p>
          <h2 className={styles.ourProductsItemTitle}>{product.title}</h2>
          <h3 className={styles.ourProductsItemSubtitle}>{product.subtitle}</h3>
          <p className={styles.ourProductsItemDescription}>{product.description}</p>
        </div>
      </article>

      <button
        className={styles.ourProductsNext}
        type="button"
        onClick={showNextProduct}
        aria-label="Ver siguiente producto"
      >
        <span aria-hidden="true">↓</span>
      </button>
    </section>
  )
}
