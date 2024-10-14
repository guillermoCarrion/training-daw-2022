const axios = require('axios');

async function fetchWords(url) {
    const response = await axios.get(url);
    return response.data.split('\n').map(word => word.trim()).filter(word => word.length > 0);
}

function groupAnagrams(words) {
    const anagramMap = {};

    words.forEach(word => {
        const sortedWord = word.split('').sort().join('');
        if (!anagramMap[sortedWord]) {
            anagramMap[sortedWord] = [];
        }
        anagramMap[sortedWord].push(word);
    });

    return Object.values(anagramMap).filter(group => group.length > 1);
}

async function findAnagrams() {
    const url = 'http://codekata.com/data/wordlist.txt';
    const words = await fetchWords(url);
    const anagrams = groupAnagrams(words);
    
    console.log(anagrams);
}

findAnagrams().catch(err => console.error(err));