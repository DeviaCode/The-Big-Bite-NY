/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from 'react'

const translations = {
  es: {
    nav: { about: 'Sobre nosotros', products: 'Nuestros productos', contact: 'Contacto', open: 'Abrir menú', close: 'Cerrar menú', language: 'Cambiar idioma' },
    announcement: '¡Bienvenido a The Big Bite NY! Disfruta de nuestras deliciosas galletas estilo New York.',
    benefits: ['Recién horneadas', 'Grandes y masticables', 'Ingredientes premium', 'Hechas con amor'],
    hero: { subtitle: 'Galletas estilo New York', title: 'Suaves por dentro.', highlight: 'Crujientes por fuera.', description: 'Gruesas, suaves y cargadas de mucho sabor.' },
    intro: { eyebrow: 'Conoce nuestros sabores', title: 'Descubre nuestras', highlight: 'galletas.', description: 'Galletas estilo New York, grandes, suaves y cargadas de sabor. Elige tu favorita o pruébalas todas.', button: 'Ver nuestros productos' },
    productsLabel: 'Nuestros productos', nextProduct: 'Ver siguiente producto',
    products: [
      { title: 'La clásica Chunk Chips', subtitle: 'Un clásico que nunca falla.', description: 'Galleta grande, suave y recién horneada, cargada de generosos chunks de chocolate que se derriten en cada mordida.', alt: 'Galleta de chocolate con chips' },
      { title: 'Explosión Red Velvet', subtitle: 'Suave, intensa e icónica.', description: 'Nuestra versión de Red Velvet: una galleta suave y ligeramente cremosa, combinada con irresistibles chips de chocolate blanco.', alt: 'Galleta red velvet' },
      { title: 'Brownie Chocolate', subtitle: 'El brownie perfecto hecho galleta.', description: 'Una galleta de chocolate intensa y fudgy, con profundo sabor a cacao y trozos de chocolate que se derriten al hornearse.', alt: 'Galleta de chocolate brownie' },
      { title: 'M&M Cookie', subtitle: 'Color, chocolate y mucho crunch.', description: 'Una galleta grande y suave, llena de chocolate y M&M’s para combinar una textura irresistible con ese toque crujiente que tanto gusta.', alt: 'Galleta con M&M' },
    ],
    customBox: { title: 'Mejor juntas.', highlight: 'Arma tu caja.', description: '¿No puedes decidir? Arma tu caja de 4, 6 o 12 galletas y mezcla tus sabores favoritos.' },
    footer: { phrase: 'La vida es corta.', highlight: 'Cómete una galleta.' },
    contact: { eyebrow: 'Ponte en contacto', title: 'Hablemos de algo', highlight: 'delicioso.', lead: '¿Tienes una pregunta, una idea o simplemente quieres hablar de galletas? Estamos para leerte.' },
    about: { eyebrow: 'The Big Bite NY', title: 'Más grandes.', highlight: 'Más memorables.', lead: 'Galletas estilo New York, inspiradas en la energía de sus calles y hechas para convertir cualquier momento en algo especial.', storyOne: 'Creemos que una buena galleta no es solo un postre. Es una pausa, una conversación y ese primer mordisco que cambia el día.', storyTwo: 'Por eso horneamos galletas gruesas, suaves por dentro y cargadas de sabor, usando ingredientes reales y mucho amor.' },
  },
  en: {
    nav: { about: 'About us', products: 'Our products', contact: 'Contact us', open: 'Open menu', close: 'Close menu', language: 'Change language' },
    announcement: 'Welcome to The Big Bite NY! Enjoy our delicious New York-style cookies.',
    benefits: ['Freshly baked', 'Big and chewy', 'Premium ingredients', 'Made with love'],
    hero: { subtitle: 'New York-style cookies', title: 'Soft on the inside.', highlight: 'Crispy on the outside.', description: 'Thick, soft, and packed with flavor.' },
    intro: { eyebrow: 'Explore our flavors', title: 'Discover our', highlight: 'cookies.', description: 'New York-style cookies, big, soft, and packed with flavor. Choose your favorite or try them all.', button: 'See our products' },
    productsLabel: 'Our products', nextProduct: 'See next product',
    products: [
      { title: 'The Classic Chunk Chips', subtitle: 'A classic that never fails.', description: 'A big, soft, freshly baked cookie loaded with generous chocolate chunks that melt with every bite.', alt: 'Chocolate chip cookie' },
      { title: 'Red Velvet Explosion', subtitle: 'Soft, bold, and iconic.', description: 'Our take on Red Velvet: a soft, lightly creamy cookie combined with irresistible white chocolate chips.', alt: 'Red velvet cookie' },
      { title: 'Chocolate Brownie', subtitle: 'The perfect brownie in a cookie.', description: 'An intense, fudgy chocolate cookie with deep cocoa flavor and chocolate chunks that melt as they bake.', alt: 'Chocolate brownie cookie' },
      { title: 'M&M Cookie', subtitle: 'Color, chocolate, and plenty of crunch.', description: 'A big, soft cookie filled with chocolate and M&Ms for an irresistible texture and a satisfying crunch.', alt: 'M&M cookie' },
    ],
    customBox: { title: 'Better together.', highlight: 'Build your box.', description: 'Can’t decide? Build a box of 4, 6, or 12 cookies and mix your favorite flavors.' },
    footer: { phrase: 'Life is short.', highlight: 'Eat a cookie.' },
    contact: { eyebrow: 'Get in touch', title: 'Let’s talk about something', highlight: 'delicious.', lead: 'Have a question, an idea, or simply want to talk cookies? We would love to hear from you.' },
    about: { eyebrow: 'The Big Bite NY', title: 'Bigger.', highlight: 'More memorable.', lead: 'New York-style cookies inspired by the energy of its streets and made to turn any moment into something special.', storyOne: 'We believe a great cookie is more than dessert. It is a pause, a conversation, and that first bite that changes your day.', storyTwo: 'That is why we bake thick, soft, flavor-packed cookies with real ingredients and lots of love.' },
  },
}

const LanguageContext = createContext(null)

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es')
  const value = useMemo(() => ({
    language,
    t: translations[language],
    toggleLanguage: () => setLanguage((current) => (current === 'es' ? 'en' : 'es')),
  }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)
