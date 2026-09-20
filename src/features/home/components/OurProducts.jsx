import styles from './OurProducts.module.css';

import chipsCookieAvif from '../../../shared/assets/images/chips.avif';
import chipsCookieWebp from '../../../shared/assets/images/chips.webp';
import chipsCookiePng from '../../../shared/assets/images/chips.png';
import redCookieAvif from '../../../shared/assets/images/red.avif';
import redCookieWebp from '../../../shared/assets/images/red.webp';
import redCookiePng from '../../../shared/assets/images/red.png';
import brownieCookieAvif from '../../../shared/assets/images/brownie.avif';
import brownieCookieWebp from '../../../shared/assets/images/brownie.webp';
import brownieCookiePng from '../../../shared/assets/images/brownie.png';
import mandmCookieAvif from '../../../shared/assets/images/m-and-m.avif';
import mandmCookieWebp from '../../../shared/assets/images/m-and-m.webp';
import mandmCookiePng from '../../../shared/assets/images/m-and-m.png';

const PRODUCTS = [
  {
    theme: 'chips',
    image: {
      avif: chipsCookieAvif,
      webp: chipsCookieWebp,
      png: chipsCookiePng,
    },
    alt: 'Chips Cookie',
    title: 'La clásica chunk chips',
    description:
      'Un clásico que nunca falla. Deliciosas galletas con chips grandes de chocolate.',
  },
  {
    theme: 'redVelvet',
    image: {
      avif: redCookieAvif,
      webp: redCookieWebp,
      png: redCookiePng,
    },
    alt: 'Red Velvet Cookie',
    title: 'Explosión Red Velvet',
    description:
      'Una explosión de sabor con galletas red velvet y chips de chocolate blanco. Suave, rica e iconica.',
  },
  {
    theme: 'brownie',
    image: {
      avif: brownieCookieAvif,
      webp: brownieCookieWebp,
      png: brownieCookiePng,
    },
    alt: 'Brownie Cookie',
    title: 'Brownie Chocolate',
    description:
      '¡El brownie perfecto hecho galleta! Con intenso sabor a cacao y trozos de chocolate derretido..',
  },
  {
    theme: 'mandm',
    image: {
      avif: mandmCookieAvif,
      webp: mandmCookieWebp,
      png: mandmCookiePng,
    },
    alt: 'M&M Cookie',
    title: 'M&M Cookie',
    description:
      "Para los amantes de los M&M's. Galletas con trozos de chocolate y M&M's.",
  },
];

const themeClassMap = {
  chips: styles.ourProductsItemChips,
  redVelvet: styles.ourProductsItemRedVelvet,
  brownie: styles.ourProductsItemBrownie,
  mandm: styles.ourProductsItemMandm,
};

export const OurProducts = () => {
  return (
    <>
      {/* Revisar cómo usar un hook de react para ir mostrando los productos a medida de que se hace scroll - inspiración del sitio web */}
        <section id="products" className={styles.ourProducts}>
        <div className={styles.ourProductsContainer}>
          <h2 className={styles.ourProductsTitle}>Nuestros productos</h2>
        </div>

        {/*Revisar como ir mostrando los productos y que todo el fondo cambie de color de acuerdo al producto que se está mostrando*/}
        <div className={styles.ourProductsItems}>
          {PRODUCTS.map(
            ({ theme, image, alt, title, description }) => (
              <div key={theme} className={`${styles.ourProductsItem} ${themeClassMap[theme]}`}>
                <div className={styles.ourProductsItemImage}>
                  <picture>
                    <source srcSet={image.avif} type="image/avif" />
                    <source srcSet={image.webp} type="image/webp" />
                    <img src={image.png} alt={alt} />
                  </picture>
                </div>
                <div className={styles.ourProductsItemContent}>
                  <h3 className={styles.ourProductsItemTitle}>{title}</h3>
                  <p className={styles.ourProductsItemDescription}>
                    {description}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </section>
    </>
  );
};
