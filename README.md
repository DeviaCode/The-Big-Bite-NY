# The Big Bite NY

Sitio web de The Big Bite NY, una marca de galletas estilo New York. La experiencia está enfocada en una navegación visual, animaciones suaves y una identidad inspirada en galletas grandes, suaves y cargadas de sabor.

## Tecnologías

- React 19
- Vite
- React Router
- GSAP
- React Icons
- CSS Modules

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

```bash
npm install
```

## Scripts

```bash
npm run dev       # Inicia el servidor de desarrollo
npm run build     # Genera la versión de producción
npm run preview   # Previsualiza la versión compilada
npm run lint      # Ejecuta ESLint
```

## Rutas

- `/`: página principal con announcement bar, hero, beneficios, intro de productos y footer.
- `/products`: carrusel de productos de pantalla completa. Se navega con la flecha y no utiliza scroll durante el carrusel.
- `/contact-us`: información de contacto en una vista de pantalla completa.
- `/about-us`: historia y filosofía de la marca.

## Funcionalidades

- Carrusel de productos con fondos asociados a cada sabor.
- Navegación por flecha entre productos.
- Transición hacia `CustomBox` y `Footer` al terminar el carrusel.
- Hero con imagen de escritorio y fondo alternativo para móviles.
- Navbar adaptable al color de cada sección.
- Cursor personalizado para dispositivos con mouse.
- Selector de idioma español/inglés desde el navbar.
- Transiciones de navegación con View Transition API cuando el navegador la soporta.
- Soporte para `prefers-reduced-motion` en las animaciones principales.

## Estructura principal

```text
src/
├── app/
│   ├── App.jsx
│   ├── AppRoutes.jsx
│   └── ProductsPage.module.css
├── features/
│   ├── about/
│   ├── contact/
│   ├── home/
│   └── products/
└── shared/
    ├── assets/
    ├── i18n/
    └── styles/
```

## Idiomas

El idioma inicial es español. El botón `ES/EN` del navbar cambia los textos visibles de la interfaz, incluyendo navegación, hero, productos, contacto, About Us y footer.

## Assets

Las imágenes de productos utilizan formatos AVIF, WebP y PNG mediante `<picture>`. El hero utiliza:

- `background-hero.png` para pantallas grandes.
- `background-hero-movil.jpg` para pantallas de hasta `820px`.
