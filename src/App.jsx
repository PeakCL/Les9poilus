import "./App.css";
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
  return <Hero />;
}

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-poilu-creme">
        <Navbar />
        <main id="main-content" className="flex flex-1 flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nos-animaux" element={<NosAnimaux />} />
            <Route path="/animaux" element={<NosAnimaux />} />
            <Route path="/collaborations" element={<Collaborations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/nos-disparus" element={<NosDisparus />} />
            <Route path="/notre-histoire" element={<NotreHistoire />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
