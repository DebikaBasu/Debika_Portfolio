import React from "react";
import { Analytics } from '@vercel/analytics/react';
import {
  Header,
  Nav,
  About,
  Experience,
  Portfolio,
  Services,
  Footer,
  Contact,
} from "./components";

import Aos from "aos";

const App = () => {
  React.useEffect(() => {
    Aos.init({
      disable: "mobile",
    });
  });
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
};

export default App;
