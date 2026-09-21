import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useLanguage } from '../../../shared/i18n/LanguageContext'

const PRODUCT_COLOR_VARIABLES = {
  chips: 'var(--flavor-chips)',
  redVelvet: 'var(--flavor-red-velvet)',
  brownie: 'var(--flavor-brownie)',
  mandm: 'var(--flavor-mym)',
}

export const Navbar = ({ aboutPage, contactPage, productTheme }) => {
  const navigate = useNavigate()
  const { language, t, toggleLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const [darkSection, setDarkSection] = useState(false)
  const menuId = useId()
  const toggleRef = useRef(null)
  const menuRef = useRef(null)
  const linksRef = useRef([])
  const animationRef = useRef(null)

  const closeMenu = useCallback(() => {
    if (!open || !menuRef.current) {
      setOpen(false)
      return
    }

    animationRef.current?.kill()
    const { left, top, width, height } = toggleRef.current.getBoundingClientRect()
    const originX = left + width / 2
    const originY = top + height / 2

    animationRef.current = gsap.timeline({
      onComplete: () => setOpen(false),
    })
      .to(linksRef.current, { opacity: 0, y: 20, duration: 0.18, stagger: 0.03 }, 0)
      .to(menuRef.current, {
        clipPath: `circle(0px at ${originX}px ${originY}px)`,
        duration: 0.5,
        ease: 'power3.in',
      }, 0.05)
  }, [open])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu()
    }
    if (open) window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, closeMenu])

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open)
    return () => document.body.classList.remove('overflow-hidden')
  }, [open])

  useEffect(() => {
    const updateTheme = () => {
      const section = document.getElementById('product-intro')
      const header = document.querySelector(`.${styles.header}`)

      if (!section || !header) return

      const sectionBounds = section.getBoundingClientRect()
      const headerBottom = header.getBoundingClientRect().bottom
      setDarkSection(sectionBounds.top <= headerBottom && sectionBounds.bottom > headerBottom)
    }

    updateTheme()
    window.addEventListener('scroll', updateTheme, { passive: true })
    window.addEventListener('resize', updateTheme)

    return () => {
      window.removeEventListener('scroll', updateTheme)
      window.removeEventListener('resize', updateTheme)
    }
  }, [])

  const toggleMenu = () => {
    if (open) closeMenu()
    else setOpen(true)
  }

  const navigateWithTransition = (event, path) => {
    event.preventDefault()

    if (document.startViewTransition) {
      document.startViewTransition(() => navigate(path))
      return
    }

    navigate(path)
  }

  const goHome = (event) => {
    navigateWithTransition(event, '/')
  }

  useLayoutEffect(() => {
    if (!open || !menuRef.current || !toggleRef.current) return undefined

    animationRef.current?.kill()
    const { left, top, width, height } = toggleRef.current.getBoundingClientRect()
    const originX = left + width / 2
    const originY = top + height / 2
    const radius = Math.hypot(
      Math.max(originX, window.innerWidth - originX),
      Math.max(originY, window.innerHeight - originY),
    )

    animationRef.current = gsap.timeline()
      .set(menuRef.current, {
        visibility: 'visible',
        opacity: 1,
        clipPath: `circle(0px at ${originX}px ${originY}px)`,
      })
      .to(menuRef.current, {
        clipPath: `circle(${radius}px at ${originX}px ${originY}px)`,
        duration: 0.72,
        ease: 'power3.out',
      })
      .fromTo(linksRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.42, stagger: 0.07, ease: 'power2.out' },
        '-=0.3',
      )

    return () => animationRef.current?.kill()
  }, [open])

  return (
    <>
      <header
        className={`${styles.header} ${darkSection ? styles.headerDark : ''} ${productTheme ? styles.headerProduct : ''} ${contactPage ? styles.headerContact : ''} ${aboutPage ? styles.headerAbout : ''} ${open ? styles.headerOpen : ''}`}
        style={productTheme ? { '--product-color': PRODUCT_COLOR_VARIABLES[productTheme] } : undefined}
      >
        <div className={`${styles.bar} ${open ? styles.barOpen : ''}`}>
          <Link to="/" onClick={goHome} className={`${styles.logoContainer} ${darkSection || productTheme || contactPage || aboutPage || open ? styles.logoContainerOpen : ''}`}>
            <div>
              <span className={styles.logoText}>The Big Bite NY</span>
            </div>
          </Link>

          <div className={styles.actions}>
            <button
              className={styles.languageToggle}
              type="button"
              onClick={toggleLanguage}
              aria-label={t.nav.language}
            >
              {language.toUpperCase()}
            </button>

            <button
              type="button"
              ref={toggleRef}
              className={`${styles.toggle} ${darkSection || productTheme || contactPage || aboutPage || open ? styles.toggleDark : ''} ${open ? styles.toggleOpen : ''}`}
              onClick={toggleMenu}
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? t.nav.close : t.nav.open}
            >
              <span className={styles.toggleIcon} aria-hidden="true">
                <FaBars className={styles.menuIcon} />
                <FaTimes className={styles.closeIcon} />
              </span>
            </button>
          </div>
        </div>

        <nav
          id={menuId}
          ref={menuRef}
          className={`${styles.menu} ${open ? styles.menuOpen : ''}`}
          aria-label="Principal"
          inert={!open}
        >
          <a
            ref={(element) => { linksRef.current[0] = element }}
            href="/about-us"
            className={styles.menuLink}
            onClick={(event) => navigateWithTransition(event, '/about-us')}
          >
            {t.nav.about}
          </a>
          <Link
            ref={(element) => { linksRef.current[1] = element }}
            to="/products"
            className={styles.menuLink}
            onClick={(event) => navigateWithTransition(event, '/products')}
          >
            {t.nav.products}
          </Link>
          <Link
            ref={(element) => { linksRef.current[2] = element }}
            to="/contact-us"
            className={styles.menuLink}
            onClick={(event) => navigateWithTransition(event, '/contact-us')}
          >
            {t.nav.contact}
          </Link>
        </nav>
      </header>

      <button
        type="button"
        className={`${styles.backdrop} ${open ? styles.backdropVisible : ''}`}
        aria-hidden="true"
        tabIndex={-1}
        onClick={closeMenu}
      />
    </>
  )
}