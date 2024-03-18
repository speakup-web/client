import { Hero } from '../components/Hero'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ContactUs } from '../components/ContactUs'
import { Form } from '../components/Form'

export default function Lapor() {
    return (
      <>
        <Header />
        <main>
          <Hero />
          <Form />
          <ContactUs bgColor='bg-lightGrey'/>
        </main>
        <Footer />
      </>
    )
  }
  