import { TopBar } from "./components/TopBar";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Values } from "./components/Values";
import { Team } from "./components/Team";
import { Videos } from "./components/Videos";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

/** The whole site is one page. Reorder sections here. */
export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Values />
        <Team />
        <Videos />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
