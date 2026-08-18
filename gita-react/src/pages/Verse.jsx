import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CHAPTERS } from './Chapter.jsx'
import { fetchChapters, fetchVerse } from '../services/gitaApi.js'

function Verse() {
  const navigate = useNavigate()
  const { num, verse } = useParams()
  const chapterNum = Number(num)
  const verseNum = Number(verse)
  const chapter = CHAPTERS[chapterNum]

  const [data, setData] = useState(null)
  const [chapterData, setChapterData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  if (!chapter) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-24">
        <p className="text-center text-gray-700">Chapter not found.</p>
      </main>
    )
  }

  const total = chapter.verses
  const canPrev = verseNum > 1
  const canNext = verseNum < total

  useEffect(() => {
    let isMounted = true
    setLoading(true)
    setError('')

    // Fetch both chapter detail + verse detail
    Promise.all([
      fetchChapters(chapterNum),
      fetchVerse(chapterNum, verseNum),
    ])
      .then(([ch, v]) => {
        if (!isMounted) return
        setChapterData(ch)
        setData(v)
      })
      .catch(() => {
        if (!isMounted) return
        setError('Unable to load verse.')
      })
      .finally(() => {
        if (!isMounted) return
        setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [chapterNum, verseNum])

  return (
    <main className="max-w-3xl mx-auto px-4 py-24">
      <div className="mb-6">
        <Link
          to={`/chapter/${chapterNum}`}
          className="text-orange-600 hover:underline"
        >
          ← Back to Chapter {chapterNum}
        </Link>
      </div>

      {/* Chapter + Verse header */}
      {chapterData && (
        <div className="mb-8 text-center">
          <p className="text-sm text-orange-500 font-semibold">
            CHAPTER {chapterNum} – {chapterData.name_translated} – Verse {verseNum}
          </p>
          <h1 className="text-3xl font-bold text-gray-800 mt-1">
            {chapterData.name}
          </h1>
          <p className="text-gray-600 mt-3">{chapterData.chapter_summary}</p>
        </div>
      )}

      {/* Verse details */}
      <article className="bg-white p-6 rounded-lg shadow">
        {loading && <p className="text-gray-600">Loading…</p>}
        {!loading && error && <p className="text-orange-600">{error}</p>}
        {!loading && !error && data && (
          <div>
            {/* Sanskrit text */}
            <p className="text-gray-800 leading-7 mb-3">{data?.text}</p>

            {/* Transliteration */}
            {data?.transliteration && (
              <p className="text-gray-700 leading-7 mb-3 italic">
                {data.transliteration}
              </p>
            )}

            {/* English translation */}
            {data?.translations?.length > 0 && (
              <p className="text-gray-700 leading-7 italic">
                {data.translations[0].description}
              </p>
            )}

            {/* Word meanings */}
            {data?.word_meanings && (
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800">Word Meanings:</h3>
                <p className="text-gray-600">{data.word_meanings}</p>
              </div>
            )}
          </div>
        )}
      </article>

      {/* Navigation */}
      <div className="mt-6 flex justify-between">
        <button
          disabled={!canPrev}
          onClick={() =>
            navigate(`/chapter/${chapterNum}/verse/${verseNum - 1}`)
          }
          className={`px-4 py-2 rounded-md ${
            canPrev
              ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          Previous
        </button>
        <button
          disabled={!canNext}
          onClick={() =>
            navigate(`/chapter/${chapterNum}/verse/${verseNum + 1}`)
          }
          className={`px-4 py-2 rounded-md ${
            canNext
              ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          Next
        </button>
      </div>
    </main>
  )
}

export default Verse
