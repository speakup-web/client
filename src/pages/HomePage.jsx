import { Hero } from '../components/Hero'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { About } from '../components/About'
import { Information } from '../components/Information'
import { ContactUs } from '../components/ContactUs'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About/>
        <Information/>
        <ContactUs/>
      </main>
      <Footer />
    </>
  )
}