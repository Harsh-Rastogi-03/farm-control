import React from 'react'
import { Link } from 'react-scroll'
import HeroSection from '../components/HeroSection'
import ContentSection from '../components/ContentSection'
import MainAdvantageSection from '../components/MainAdvantageSection'
import ProductsPage from '../components/ProductsPage'
import Services from '../components/Services'
import Equipments from '../components/Equipments'
import TestimonialScroll from '../components/TestimonialScroll'
import Footer from './Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <HeroSection />
      <ContentSection />
      <MainAdvantageSection />
      <ProductsPage />
      <Services />
      <Equipments />
      <TestimonialScroll />
      <Equipments />
      <Footer />
    </div>
  )
}

export default Home
