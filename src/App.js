import React from 'react';

import Home from './pages/home/Home';
import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <>
      <Topbar />
      <Home />
      <Contact />
    </>
  );
}

export default App;
