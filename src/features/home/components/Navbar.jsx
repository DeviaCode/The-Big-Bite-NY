import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export const Navbar = () => {
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
      <header className={`${styles.header} ${darkSection ? styles.headerDark : ''} ${open ? styles.headerOpen : ''}`}>
        <div className={`${styles.bar} ${open ? styles.barOpen : ''}`}>
          <Link to="/" className={`${styles.logoContainer} ${darkSection || open ? styles.logoContainerOpen : ''}`}>
            <div>
              <span className={styles.logoText}>The Big Bite NY</span>
            </div>
          </Link>

          <button
            type="button"
            ref={toggleRef}
            className={`${styles.toggle} ${darkSection || open ? styles.toggleDark : ''} ${open ? styles.toggleOpen : ''}`}
            onClick={toggleMenu}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span className={styles.toggleIcon} aria-hidden="true">
              <FaBars className={styles.menuIcon} />
              <FaTimes className={styles.closeIcon} />
            </span>
          </button>
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
            href="/"
            className={styles.menuLink}
            onClick={closeMenu}
          >
            About us
          </a>
          <a
            ref={(element) => { linksRef.current[1] = element }}
            href="/"
            className={styles.menuLink}
            onClick={closeMenu}
          >
            Our products
          </a>
          <a
            ref={(element) => { linksRef.current[2] = element }}
            href="/"
            className={styles.menuLink}
            onClick={closeMenu}
          >
            Contact us
          </a>
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
