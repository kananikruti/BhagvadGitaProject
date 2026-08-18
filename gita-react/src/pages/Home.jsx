import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CHAPTERS } from './Chapter.jsx'
import { fetchChapters } from '../services/gitaApi.js'

function Home() {
  const [apiChapters, setApiChapters] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [warning, setWarning] = useState('')

  useEffect(() => {
    const key = import.meta?.env?.VITE_RAPIDAPI_KEY
    if (!key) setWarning('API key missing. Showing fallback chapter list.')
    fetchChapters({ skip: 0, limit: 18 })
      .then((chs) => {
        if (!Array.isArray(chs) || chs.length === 0) {
          setWarning('Unable to load chapters from API. Showing fallback list.')
        }
        setApiChapters(Array.isArray(chs) ? chs : [])
        setLoaded(true)
      })
      .catch((err) => {
        console.error('Home: fetchChapters failed', err)
        setWarning('Unable to load chapters from API. Showing fallback list.')
        setLoaded(true)
      })
  }, [])

  const items = loaded && apiChapters.length > 0
    ? apiChapters.map((c) => ({ number: c.number, title: c.title, verses: c.versesCount }))
    : Object.entries(CHAPTERS).map(([num, meta]) => ({ number: Number(num), title: meta.title, verses: meta.verses }))

  return (
    <main className="pt-20">
      <section className="relative h-screen bg-cover bg-center max-w-7xl mx-auto" style={{ backgroundImage: "url('https://bhagavadgita.io/_next/image?url=%2Fbanner2.png&w=1920&q=75')", display: 'block', margin: 'auto', width: '80%', height: '80vh' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">Experience the Gita</h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-8">Anywhere, Anytime</h3>
          <Link className="bg-white text-orange-500 font-bold py-3 px-8 rounded-full hover:bg-orange-50 transition-colors" to="/chapter/1">Read now</Link>
        </div>
      </section>

      <section className="bg-amber-100 py-8 max-w-7xl mx-auto">
        <div className="px-4 text-center">
          <div className="flex items-center justify-center space-x-4">
            <img alt="Bhagavad Gita logo" className="h-12 w-12" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcBTEmcYNX0X6ryV9BL630qp5W73w5Lt3paZzEmiFw_MhqchztrdbfFP_4H9OeVpsgZ3C8rfZbn6MXkE47GHMHqeOcUfmyWV-tNwNHjldcAsP2xtSAMc0e5mqbAZPBOWJYucBRbKzomRrK9Gu6QGy-8qmD6ptp4_jAqRc2fAIzw88jVlyM5uyL1k59lqw_XtR0QAd_s-4KdHwqGkfk5zVEwsPJN16GT7nl4vV3JsEPLGs5r7PUJxNQ8QRtF99LrbpzcOdsTM9N_fE" />
            <div>
              <p className="font-bold text-gray-800">Verse of the day - BG 6.18</p>
              <p className="text-gray-600">When the yogi, by practice of yoga, disciplines his mental activities and becomes situated in Transcendence — devoid of all material desires — he is said to be well established in yoga.</p>
            </div>
          </div>
          <button className="mt-4 text-orange-500 font-semibold hover:underline">SEE MORE</button>
        </div>
      </section>

      <section className="py-16 bg-white max-w-7xl mx-auto">
        <div className="px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Have the Shloka of the Day delivered</h2>
          <h3 className="text-3xl font-bold text-gray-800 mb-8">to your inbox each morning</h3>
          <form className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
            <input className="w-full md:w-1/3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Enter Your Name" type="text" />
            <input className="w-full md:w-1/3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Enter Your Email" type="email" />
            <button className="w-full md:w-auto bg-orange-500 text-white font-bold py-3 px-8 rounded-md hover:bg-orange-600 transition-colors" type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto">
        <div className="px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Chapters</h2>
          {warning && (
            <p className="text-center text-orange-600 mb-6">{warning}</p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((c) => (
              <Link key={c.number} to={`/chapter/${c.number}`} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500 hover:bg-orange-50 hover:border-orange-800 transition-colors">
                <p className="text-sm text-gray-500 mb-1">Chapter {c.number}</p>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{c.title}</h3>
                <p className="text-gray-600 mb-4">Read Chapter {c.number} of the Bhagavad Gita.</p>
                <div className="flex items-center text-gray-500">
                  <i className="material-icons mr-2">menu_book</i>
                  <span>{c.verses} Verses</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home


