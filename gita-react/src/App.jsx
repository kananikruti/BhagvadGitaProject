import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Quotes from './pages/Quotes.jsx'
import Donate from './pages/Donate.jsx'
import Chapter from './pages/Chapter.jsx'
import Verse from './pages/Verse.jsx'

function RedirectOldChapter() {
  const { num } = useParams()
  return <Navigate to={`/chapter/${num}`} replace />
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-amber-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/chapter/:num" element={<Chapter />} />
          <Route path="/chapter/:num/verse/:verse" element={<Verse />} />
          <Route path="/chapter-:num" element={<RedirectOldChapter />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
