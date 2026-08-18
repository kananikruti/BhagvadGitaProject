const API_BASE = 'https://bhagavad-gita3.p.rapidapi.com/v2'

function getHeaders() {
  const key = "4cb53c003amshaecfc4099197d61p1466f2jsn3263552979a7"
  return {
    'X-RapidAPI-Key': key,
    'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com',
  }
}

/**
 * ✅ Fetch list of chapters
 */
export async function fetchChapters({ skip = 0, limit = 18 } = {}) {
  try {
    const url = `${API_BASE}/chapters/?skip=${skip}&limit=${limit}`
    const res = await fetch(url, { headers: getHeaders() })
    if (!res.ok) throw new Error('Failed to fetch chapters')

    const raw = await res.json()
    const data = Array.isArray(raw)
      ? raw
      : (raw?.chapters || raw?.data || raw?.results || [])

    return (data || []).map((c) => ({
      id: c?.id || c?.chapter_number,
      number: c?.chapter_number || c?.id,
      title: c?.name_translated || c?.name || '',
      name: c?.name || '',
      transliteration: c?.name_transliterated || '',
      meaning: c?.name_meaning || '',
      description: c?.chapter_summary || '',
      summaryHindi: c?.chapter_summary_hindi || '',
      versesCount: c?.verses_count || c?.verse_count || 0,
    }))
  } catch (e) {
    console.error('fetchChapters error', e)
    return []
  }
}

/**
 * ✅ Fetch detail of a single chapter
 */
export async function fetchChapterDetail(chapterNumber) {
  try {
    const url = `${API_BASE}/chapters/${chapterNumber}/`
    const res = await fetch(url, { headers: getHeaders() })
    if (!res.ok) throw new Error('Failed to fetch chapter detail')

    const c = await res.json()
    return {
      id: c?.id || c?.chapter_number,
      number: c?.chapter_number || c?.id,
      title: c?.name_translated || c?.name || '',
      name: c?.name || '',
      transliteration: c?.name_transliterated || '',
      meaning: c?.name_meaning || '',
      description: c?.chapter_summary || '',
      summaryHindi: c?.chapter_summary_hindi || '',
      versesCount: c?.verses_count || 0,
    }
  } catch (e) {
    console.error("fetchChapterDetail error", e)
    return null
  }
}

/**
 * ✅ Fetch all verses of a chapter
 */
export async function fetchChapterVerses(chapterNumber) {
  try {
    const url = `${API_BASE}/chapters/${chapterNumber}/verses/`
    const res = await fetch(url, { headers: getHeaders() })
    if (!res.ok) throw new Error('Failed to fetch verses')

    const data = await res.json()
    return (data || []).map((v, idx) => {
      const primaryTranslation =
        Array.isArray(v?.translations) && v.translations.length > 0
          ? v.translations[0]
          : null

      return {
        number: v?.verse_number || v?.number || idx + 1,
        text: v?.text || v?.slok || '',
        translation: primaryTranslation?.description || v?.translation || '',
        transliteration: v?.transliteration || '',
        commentary: v?.commentary || '',
      }
    })
  } catch (e) {
    console.error("fetchChapterVerses error", e)
    return []
  }
}

/**
 * ✅ Fetch a single verse
 */
export async function fetchVerse(chapterNumber, verseNumber) {
  try {
    const url = `${API_BASE}/chapters/${chapterNumber}/verses/${verseNumber}/`
    const res = await fetch(url, { headers: getHeaders() })
    if (!res.ok) throw new Error('Failed to fetch verse')

    const v = await res.json()
    const primaryTranslation =
      Array.isArray(v?.translations) && v.translations.length > 0
        ? v.translations[0]
        : null

    return {
      number: v?.verse_number || v?.number || verseNumber,
      text: v?.text || v?.slok || '',
      translation: primaryTranslation?.description || v?.translation || '',
      transliteration: v?.transliteration || '',
      commentary: v?.commentary || '',
    }
  } catch (e) {
    console.error("fetchVerse error", e)
    return null
  }
}
