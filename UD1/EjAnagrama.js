const assert = require('node:assert').strict;
const fs = require('node:fs');

function readWords(path) {
    const data = fs.readFileSync(path, 'utf8');
    return data.split('\n')
}

function checkAnagram(word) {
    let wordAsArray = word.split('')
    let resultAsArray = []

    while (wordAsArray.length > 0) {
        resultAsArray.push(wordAsArray.pop())
    }

    if (resultAsArray.join('').toLocaleLowerCase() === word.toLocaleLowerCase()) {
        return true 
    } else  {
        return false
    }
}

function checkAnagrams(path) {
    // leer el ficheros y convertiro a array
    let words = readWords(path)
    let result = []

    // para cada palabra: comprobar si es anagrama
        // si lo es, lo añadimos a otro array
    for (let i=0; i<words.length; i++) {
        let word = words[i]
        if (checkAnagram(word)) {
            result.push(word)
        }
    }
    // imprimimos la cuenta
    console.log(`Hay ${result.length} anagramas`)
}

checkAnagrams('wordlist.txt')
// assert.equal(false, checkAnagram('abc cbb'))
// assert.equal(true, checkAnagram('abc cba'))


// assert.deepEqual(["A", "ABM", "ABM's", "ABMs"], readWords("sample.txt"))

console.log('end')