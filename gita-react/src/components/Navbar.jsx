import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  function handleSearchSubmit() {
    const q = (query || '').trim()
    if (!q) return
    // Patterns: "6.21" or "6 21" or "6,21" or "chapter 6 verse 21"
    const dot = q.match(/^(\d+)\s*[\.,\s]\s*(\d+)$/)
    if (dot) {
      const chapter = Number(dot[1])
      const verse = Number(dot[2])
      if (chapter > 0 && verse > 0) {
        navigate(`/chapter/${chapter}/verse/${verse}`)
        return
      }
    }
    const words = q.match(/chapter\s*(\d+)(?:\D+verse\s*(\d+))?/i)
    if (words) {
      const chapter = Number(words[1])
      const verse = words[2] ? Number(words[2]) : null
      if (chapter > 0 && verse && verse > 0) {
        navigate(`/chapter/${chapter}/verse/${verse}`)
        return
      }
      if (chapter > 0) {
        navigate(`/chapter/${chapter}`)
        return
      }
    }
    const num = q.match(/^(\d+)$/)
    if (num) {
      const chapter = Number(num[1])
      if (chapter > 0) {
        navigate(`/chapter/${chapter}`)
        return
      }
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleSearchSubmit()
    }
  }
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <Link className="text-xl font-bold text-gray-800" to="/">Bhagavad Gita</Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8 relative">
            <div className="group relative">
              <span className="flex items-center text-gray-600 hover:text-orange-500 cursor-pointer">
                Chapters <i className="material-icons text-sm ml-1">arrow_drop_down</i>
              </span>
              <div className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4">
                <div className="grid grid-cols-2 gap-2">
                  <Link to="/chapter/1" className="flex items-center space-x-2 text-gray-700 hover:bg-orange-50 px-2 py-1 rounded"><i className="material-icons text-orange-500 text-lg">article</i><span>Chapter 1</span></Link>
                  <Link to="/chapter/2" className="flex items-center space-x-2 text-gray-700 hover:bg-orange-50 px-2 py-1 rounded"><i className="material-icons text-orange-500 text-lg">article</i><span>Chapter 2</span></Link>
                  <Link to="/chapter/3" className="flex items-center space-x-2 text-gray-700 hover:bg-orange-50 px-2 py-1 rounded"><i className="material-icons text-orange-500 text-lg">article</i><span>Chapter 3</span></Link>
                  <Link to="/chapter/4" className="flex items-center space-x-2 text-gray-700 hover:bg-orange-50 px-2 py-1 rounded"><i className="material-icons text-orange-500 text-lg">article</i><span>Chapter 4</span></Link>
                  <Link to="/chapter/5" className="flex items-center space-x-2 text-gray-700 hover:bg-orange-50 px-2 py-1 rounded"><i className="material-icons text-orange-500 text-lg">article</i><span>Chapter 5</span></Link>
                  <Link to="/chapter/6" className="flex items-center space-x-2 text-gray-700 hover:bg-orange-50 px-2 py-1 rounded"><i className="material-icons text-orange-500 text-lg">article</i><span>Chapter 6</span></Link>
                  <Link to="/chapter/7" className="flex items-center space-x-2 text-gray-700 hover:bg-orange-50 px-2 py-1 rounded"><i className="material-icons text-orange-500 text-lg">article</i><span>Chapter 7</span></Link>
                  <Link to="/chapter/8" className="flex items-center space-x-2 text-gray-700 hover:bg-orange-50 px-2 py-1 rounded"><i className="material-icons text-orange-500 text-lg">article</i><span>Chapter 8</span></Link>
                  <Link to="/chapter/9" className="flex items-center space-x-2 text-gray-700 hover:bg-orange-50 px-2 py-1 rounded"><i className="material-icons text-orange-500 text-lg">article</i><span>Chapter 9</span></Link>
                  <Link to="/chapter/10" className="flex items-center space-x-2 text-gray-700 hover:bg-orange-50 px-2 py-1 rounded"><i className="material-icons text-orange-500 text-lg">article</i><span>Chapter 10</span></Link>
                  <Link to="/chapter/11" className="flex items-center space-x-2 text-gray-700 hover:bg-orange-50 px-2 py-1 rounded"><i className="material-icons text-orange-500 text-lg">article</i><span>Chapter 11</span></Link>
                  <Link to="/chapter/12" className="flex items-center space-x-2 text-gray-700 hover:bg-orange-50 px-2 py-1 rounded"><i className="material-icons text-orange-500 text-lg">article</i><span>Chapter 12</span></Link>
                  <Link to="/chapter/13" className="flex items-center space-x-2 text-gray-700 hover:bg-orange-50 px-2 py-1 rounded"><i className="material-icons text-orange-500 text-lg">article</i><span>Chapter 13</span></Link>
                  <Link to="/chapter/14" className="flex items-center space-x-2 text-gray-700 hover:bg-orange-50 px-2 py-1 rounded"><i className="material-icons text-orange-500 text-lg">article</i><span>Chapter 14</span></Link>
                  <Link to="/chapter/15" className="flex items-center space-x-2 text-gray-700 hover:bg-orange-50 px-2 py-1 rounded"><i className="material-icons text-orange-500 text-lg">article</i><span>Chapter 15</span></Link>
                  <Link to="/chapter/16" className="flex items-center space-x-2 text-gray-700 hover:bg-orange-50 px-2 py-1 rounded"><i className="material-icons text-orange-500 text-lg">article</i><span>Chapter 16</span></Link>
                  <Link to="/chapter/17" className="flex items-center space-x-2 text-gray-700 hover:bg-orange-50 px-2 py-1 rounded"><i className="material-icons text-orange-500 text-lg">article</i><span>Chapter 17</span></Link>
                  <Link to="/chapter/18" className="flex items-center space-x-2 text-gray-700 hover:bg-orange-50 px-2 py-1 rounded"><i className="material-icons text-orange-500 text-lg">article</i><span>Chapter 18</span></Link>
                </div>
              </div>
            </div>
            <Link className="text-gray-600 hover:text-orange-500" to="/quotes">Quotes</Link>
            <Link className="text-gray-600 hover:text-orange-500" to="/about">About Gita</Link>
            <a className="text-gray-600 hover:text-orange-500" href="https://bhagavadgita.io/gitagpt" target="_blank">Gita AI</a>
            <Link className="text-gray-600 hover:text-orange-500" to="/donate">Donate</Link>
          </nav>
          <div className="relative">
            <span className="material-icons absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">search</span>
            <input value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} className="bg-gray-50 border border-gray-300 rounded-full py-2 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Search chapter or 6.21" type="text" />
            <button onClick={handleSearchSubmit} className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-600 hover:text-orange-500 px-2">
              <i className="material-icons">arrow_forward</i>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-orange-500">
              <i className="material-icons">call</i>
            </button>
          </div>
          <button className="md:hidden text-gray-600">
            <i className="material-icons">menu</i>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar


