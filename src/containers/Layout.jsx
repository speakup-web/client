import { Outlet } from 'react-router-dom';
import Header from './../components/ui/Header';
import Main from './Main';
import Footer from '../components/ui/Footer';
import Hero from '../components/ui/Hero';
import { ContactUs } from '../components/ui/ContactUs';

export default function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Outlet />
        <ContactUsWithBgColor />
      </Main>
      <Footer />
    </>
  );
}

function ContactUsWithBgColor() {
  const isHomeRoute = location.pathname === '/';
  const bgColor = isHomeRoute ? undefined : 'bg-gray-50 ';

  return <ContactUs bgColor={bgColor} />;
}
