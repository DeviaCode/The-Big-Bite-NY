import { AnnouncementBar, Navbar, BenefitsMarquee, Footer, Hero, ProductIntro } from '../features/home/components'

export const App = () => {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <BenefitsMarquee />
      <Hero />
      <ProductIntro />
      {/* <OurProducts />
      <CustomBox /> */}
      <Footer />
    </>
  )
}
