import { useState } from "react";
import "./index.css";

// components
import { LoadingScreen } from "./components/LoadingScreen";
import { MobileNav } from "./components/MobileNav";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { SectionDivider } from "./components/SectionDivider";

import { About } from "./components/sections/About";
import { Home } from "./components/sections/Home";
import { Projects } from "./components/sections/Projects";
import { Youtube } from "./components/sections/Youtube";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-gradient-to-r from-slate-950 to-blue-950 w-full text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Youtube />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
