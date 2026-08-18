const https = require('https');

// Function to fetch a specific chapter
function fetchChapter(chapterNumber = 1) {
  const options = {
    hostname: 'bhagavad-gita3.p.rapidapi.com',
    path: `/v2/chapters/${chapterNumber}/`,
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4cb53c003amshaecfc4099197d61p1466f2jsn3263552979a7',
      'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
    }
  };

  console.log(`Fetching Chapter ${chapterNumber}...`);
  console.log('URL:', `https://${options.hostname}${options.path}`);
  console.log('---');

  const req = https.request(options, (res) => {
    let data = '';

    console.log('Status Code:', res.statusCode);
    console.log('Headers:', res.headers);
    console.log('---');

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      try {
        const jsonData = JSON.parse(data);
        console.log('Chapter Data:');
        console.log(JSON.stringify(jsonData, null, 2));
        
        // Display key information in a readable format
        if (jsonData) {
          console.log('\n=== CHAPTER SUMMARY ===');
          console.log(`Chapter Number: ${jsonData.chapter_number || 'N/A'}`);
          console.log(`Name: ${jsonData.name || 'N/A'}`);
          console.log(`Name Translated: ${jsonData.name_translated || 'N/A'}`);
          console.log(`Name Transliterated: ${jsonData.name_transliterated || 'N/A'}`);
          console.log(`Verses Count: ${jsonData.verses_count || 'N/A'}`);
          console.log(`Chapter Summary: ${jsonData.chapter_summary || 'N/A'}`);
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
        console.log('Raw response:', data);
      }
    });
  });

  req.on('error', (error) => {
    console.error('Request Error:', error);
  });

  req.setTimeout(10000, () => {
    console.error('Request timeout');
    req.destroy();
  });

  req.end();
}

// Function to fetch all chapters
function fetchAllChapters() {
  const options = {
    hostname: 'bhagavad-gita3.p.rapidapi.com',
    path: '/v2/chapters/',
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4cb53c003amshaecfc4099197d61p1466f2jsn3263552979a7',
      'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
    }
  };

  console.log('Fetching All Chapters...');
  console.log('URL:', `https://${options.hostname}${options.path}`);
  console.log('---');

  const req = https.request(options, (res) => {
    let data = '';

    console.log('Status Code:', res.statusCode);
    console.log('Headers:', res.headers);
    console.log('---');

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      try {
        const jsonData = JSON.parse(data);
        console.log('All Chapters Data:');
        console.log(JSON.stringify(jsonData, null, 2));
        
        // Display chapters in a readable format
        if (Array.isArray(jsonData)) {
          console.log('\n=== CHAPTERS LIST ===');
          jsonData.forEach((chapter, index) => {
            console.log(`${index + 1}. Chapter ${chapter.chapter_number}: ${chapter.name_translated || chapter.name}`);
            console.log(`   Verses: ${chapter.verses_count || 'N/A'}`);
            console.log(`   Summary: ${chapter.chapter_summary ? chapter.chapter_summary.substring(0, 100) + '...' : 'N/A'}`);
            console.log('---');
          });
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
        console.log('Raw response:', data);
      }
    });
  });

  req.on('error', (error) => {
    console.error('Request Error:', error);
  });

  req.setTimeout(10000, () => {
    console.error('Request timeout');
    req.destroy();
  });

  req.end();
}

// Get command line arguments
const args = process.argv.slice(2);
const command = args[0] || 'chapter';
const chapterNumber = parseInt(args[1]) || 1;

// Execute based on command
if (command === 'all') {
  fetchAllChapters();
} else {
  fetchChapter(chapterNumber);
}

console.log('\nUsage:');
console.log('node fetch-chapter.js [command] [chapterNumber]');
console.log('Commands:');
console.log('  chapter [number] - Fetch specific chapter (default: 1)');
console.log('  all - Fetch all chapters');
console.log('Examples:');
console.log('  node fetch-chapter.js');
console.log('  node fetch-chapter.js chapter 2');
console.log('  node fetch-chapter.js all');
