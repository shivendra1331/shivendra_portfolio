import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { site } from "./data/siteData";

export default function App() {

  // useEffect(() => {
  //   document.documentElement.classList.toggle("dark", dark);
  // }, [dark]);

  return (
    <div className={"theme-dark min-h-screen"}>
      <Navbar/>
      <main>
        <Hero />
        <Services />
        <Experience />
        <Projects />
        <Contact />
        <FAQ />
      </main>
      <Footer />

      <a
        href={`mailto:${site.email}`}
        className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-emerald-500 text-black shadow-[0_0_30px_rgba(34,197,94,.25)] transition hover:-translate-y-1 hover:bg-emerald-400"
        aria-label="Email Shivendra"
        title="Send email"
      >
        <span className="text-lg">✉</span>
      </a>
    </div>
  );
}