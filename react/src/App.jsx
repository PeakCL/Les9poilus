import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NosAnimaux from "./pages/NosAnimaux";
import Collaborations from "./pages/Collaborations";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NosDisparus from "./pages/NosDisparus";
import NotreHistoire from "./pages/NotreHistoire";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Hero />
    </>
  );
}

function Placeholder({ title }) {
  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-heading text-poilu-roy mb-4">{title}</h2>
      <p className="text-poilu-gris text-lg">Contenu à venir…</p>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-poilu-creme flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nos-animaux" element={<NosAnimaux />} />
            <Route path="/animaux" element={<NosAnimaux />} />
            <Route path="/collaborations" element={<Collaborations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/collaborations" element={<Collaborations />} />
            <Route path="/nos-disparus" element={<NosDisparus />} />
            <Route path="/notre-histoire" element={<NotreHistoire />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
