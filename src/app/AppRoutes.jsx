import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnnouncementBar, BenefitsMarquee, CustomBox, Footer, Hero, Navbar, OurProducts, ProductIntro } from '../features/home/components'
import { ContactUs } from '../features/contact/components'
import { AboutUs } from '../features/about/components'
import styles from '../features/products/pages/ProductsPage.module.css'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <>
            <AnnouncementBar />
            <Navbar />
            <div className={styles.pageTransition}>
              <BenefitsMarquee />
              <Hero />
              <ProductIntro />
              <Footer />
            </div>
          </>
        )}
      />
      <Route
        path="/products"
        element={(
          <ProductsPage />
        )}
      />
      <Route
        path="/contact-us"
        element={(
          <>
            <Navbar contactPage />
            <div className={styles.pageTransition}>
              <ContactUs />
            </div>
          </>
        )}
      />
      <Route
        path="/about-us"
        element={(
          <>
            <Navbar aboutPage />
            <div className={styles.pageTransition}>
              <AboutUs />
            </div>
          </>
        )}
      />
    </Routes>
  )
}

const ProductsPage = () => {
  const [productTheme, setProductTheme] = useState('chips')
  const [showExtras, setShowExtras] = useState(false)

  useEffect(() => {
    document.body.classList.add('products-page')
    return () => document.body.classList.remove('products-page')
  }, [])

  const finishProducts = () => {
    setShowExtras(true)
  }

  return (
    <>
      <Navbar productTheme={showExtras ? undefined : productTheme} />
      <div className={styles.productsStage}>
        <div className={`${styles.stageLayer} ${showExtras ? styles.stageLayerHidden : ''}`}>
          <OurProducts onComplete={finishProducts} onThemeChange={setProductTheme} />
        </div>
        <div className={`${styles.extras} ${showExtras ? styles.extrasVisible : ''}`}>
          <CustomBox />
          <Footer />
        </div>
      </div>
    </>
  )
}
