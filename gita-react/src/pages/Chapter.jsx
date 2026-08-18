// src/pages/Chapter.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchChapterVerses, fetchChapterDetail } from "../services/gitaApi.js";

// Named export that Home imports
export const CHAPTERS = {
  1: { title: "Arjuna Viṣāda Yoga", verses: 47 },
  2: { title: "Sāṅkhya Yoga", verses: 72 },
  3: { title: "Karma Yoga", verses: 43 },
  4: { title: "Jñāna Karma Sannyāsa Yoga", verses: 42 },
  5: { title: "Karma Sannyāsa Yoga", verses: 29 },
  6: { title: "Dhyāna Yoga", verses: 47 },
  7: { title: "Jñāna Vijñāna Yoga", verses: 30 },
  8: { title: "Akṣara Brahma Yoga", verses: 28 },
  9: { title: "Rāja Vidyā Rāja Guhya Yoga", verses: 34 },
  10: { title: "Vibhūti Yoga", verses: 42 },
  11: { title: "Viśvarūpa Darśana Yoga", verses: 55 },
  12: { title: "Bhakti Yoga", verses: 20 },
  13: { title: "Kṣetra Kṣetrajña Vibhāga Yoga", verses: 35 },
  14: { title: "Guṇa Traya Vibhāga Yoga", verses: 27 },
  15: { title: "Puruṣottama Yoga", verses: 20 },
  16: { title: "Daivāsura Sampad Vibhāga Yoga", verses: 24 },
  17: { title: "Śraddhā Traya Vibhāga Yoga", verses: 28 },
  18: { title: "Mokṣa Sannyāsa Yoga", verses: 78 },
};

function Chapter() {
  const { num } = useParams();
  const chapterNum = Number(num);

  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [chapterDetail, setChapterDetail] = useState(null);
  const [loadingDetail, setLoadingDetail] = useState(true);

  // fetch verses
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError("");
    fetchChapterVerses(chapterNum)
      .then((data) => {
        if (!isMounted) return;
        setVerses(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (!isMounted) return;
        setError("Unable to load verses. Showing placeholders.");
        setVerses([]);
      })
      .finally(() => {
        if (!isMounted) return;
        setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, [chapterNum]);

  // fetch chapter detail (title, summary etc.)
  useEffect(() => {
    let isMounted = true;
    setLoadingDetail(true);
    fetchChapterDetail(chapterNum)
      .then((data) => {
        if (!isMounted) return;
        setChapterDetail(data);
      })
      .catch(() => {
        if (!isMounted) return;
      })
      .finally(() => {
        if (!isMounted) return;
        setLoadingDetail(false);
      });
    return () => {
      isMounted = false;
    };
  }, [chapterNum]);

  return (
    <main className="max-w-4xl mx-auto px-4 py-24">
      {/* Chapter Info */}
      <div className="text-center mb-8">
        {loadingDetail ? (
          <p className="text-gray-500">Loading chapter details…</p>
        ) : chapterDetail ? (
          <>
            <p className="text-sm text-orange-500 font-semibold">
              CHAPTER {chapterDetail.number}
            </p>
            <h1 className="text-4xl font-bold text-gray-800 mt-2">
              {chapterDetail.title}
            </h1>
            <p className="mt-2 text-gray-700 italic">
              {chapterDetail.name &&
                `(${chapterDetail.name} – ${chapterDetail.transliteration})`}
            </p>
            {chapterDetail.meaning && (
              <p className="mt-3 text-gray-600">
                <strong>Meaning:</strong> {chapterDetail.meaning}
              </p>
            )}
            {chapterDetail.description && (
              <p className="mt-4 text-gray-600 leading-7">
                <strong>Summary (English):</strong> {chapterDetail.description}
              </p>
            )}
            {chapterDetail.summaryHindi && (
              <p className="mt-4 text-gray-600 leading-7">
                <strong>Summary (Hindi):</strong> {chapterDetail.summaryHindi}
              </p>
            )}
          </>
        ) : (
          <p className="text-gray-500">
            Explore the verses of Chapter {chapterNum} of the Bhagavad Gita.
          </p>
        )}
      </div>

      {/* Header bar with verse count + dropdown */}
      <div className="flex items-center justify-between mb-6 bg-white p-3 rounded-lg shadow">
        <h2 className="text-xl font-bold text-gray-800">
          {chapterDetail?.versesCount || verses.length} Verses
        </h2>
        <div className="flex items-center">
          <div className="relative">
            <select
              onChange={(e) => {
                const v = Number(e.target.value);
                if (v > 0)
                  window.location.href = `/chapter/${chapterNum}/verse/${v}`;
              }}
              className="appearance-none bg-gray-200 text-gray-700 pl-3 pr-8 py-2 rounded-md"
            >
              <option value="">Go to Verse…</option>
              {Array.from({
                length: chapterDetail?.versesCount || verses.length,
              }).map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  Verse {i + 1}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <span className="material-icons text-sm">unfold_more</span>
            </div>
          </div>
        </div>
      </div>

      {/* Verses List */}
      <div className="space-y-6">
        {loading && (
          <div className="text-center text-gray-600">Loading verses…</div>
        )}
        {!loading && error && (
          <div className="text-center text-orange-600">{error}</div>
        )}
        {!loading &&
          (verses.length > 0
            ? verses.map((v, idx) => (
                <Link
                  key={v.number || idx}
                  to={`/chapter/${chapterNum}/verse/${v.number || idx + 1}`}
                  className="block p-4 bg-white rounded-lg shadow hover:bg-orange-100 transition-colors duration-300 cursor-pointer"
                >
                  <p className="text-sm font-bold text-orange-600 mb-1">
                    VERSE {v.number || idx + 1}
                  </p>
                  <p className="text-gray-700">
                    {v.text || v.translation || "Verse content unavailable."}
                  </p>
                </Link>
              ))
            : Array.from({ length: chapterDetail?.versesCount || 1 }).map(
                (_, i) => (
                  <Link
                    key={i}
                    to={`/chapter/${chapterNum}/verse/${i + 1}`}
                    className="block p-4 bg-white rounded-lg shadow hover:bg-orange-100 transition-colors duration-300 cursor-pointer"
                  >
                    <p className="text-sm font-bold text-orange-600 mb-1">
                      VERSE {i + 1}
                    </p>
                    <p className="text-gray-700">Verse content unavailable.</p>
                  </Link>
                )
              ))}
      </div>
    </main>
  );
}

export default Chapter;
