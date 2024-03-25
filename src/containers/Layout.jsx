import { Routes, Route } from 'react-router-dom';
import routes from './../routes';

import Header from './../components/Header';
import Main from './Main';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { ContactUs } from '../components/ContactUs';

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
