import { Routes, Route } from 'react-router-dom';
import routes from './../routes';

import Header from './../components/ui/Header';
import Main from './Main';
import Footer from '../components/ui/Footer';
import Hero from '../components/ui/Hero';
import { ContactUs } from '../components/ui/ContactUs';

function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Routes>
          {routes.map((route, i) => (
            <Route
              key={i}
              path={`/${route.path}`}
              element={<route.component />}
            />
          ))}
        </Routes>
        <ContactUsWithBgColor />
      </Main>
      <Footer />
    </>
  );

  function ContactUsWithBgColor() {
    const isHomeRoute = location.pathname === '/';
    const bgColor = isHomeRoute ? undefined : 'bg-gray-50 ';

    return <ContactUs bgColor={bgColor} />;
  }
}

export default Layout;
