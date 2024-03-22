import { Hero } from '../components/Hero'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ContactUs } from '../components/ContactUs'
import { LaporanTerkirim } from '../components/LaporanTerkirim'

export default function Lapor() {
    return (
      <>
        <Header />
        <main>
          <Hero />
          <LaporanTerkirim />
          <ContactUs bgColor='bg-lightGrey'/>
        </main>
        <Footer />
      </>
    )
  }