import { Hero } from '../components/Hero'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ContactUs } from '../components/ContactUs'
import { PantauPengaduan } from '../components/PantauPengaduan'

export default function PantauPage() {
    return (
      <>
        <Header />
        <main>
          <Hero />
          <PantauPengaduan />
          <ContactUs bgColor='bg-lightGrey'/>
        </main>
        <Footer />
      </>
    )
  }