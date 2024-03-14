/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    this.chains = {};
    for (let i = 0; i < this.words.length - 1; i++) {
      let word = this.words[i];
      let nextWord = this.words[i + 1];
      if (!this.chains[word]) {
        this.chains[word] = [];
      }
      this.chains[word].push(nextWord);
    }
    // Handle the last word
    let lastWord = this.words[this.words.length - 1];
    if (!this.chains[lastWord]) {
      this.chains[lastWord] = [null];
    } else {
      this.chains[lastWord].push(null);
    }
  }



  /** return random text from chains */

  makeText(numWords = 100) {
    let result = [];
    let word = this.words[Math.floor(Math.random() * this.words.length)];
    let wordCount = 0;
    while (wordCount < numWords && word !== null) {
      result.push(word);
      word = this.chains[word][Math.floor(Math.random() * this.chains[word].length)];
      wordCount++;
      // If word is null but the desired number of words is not yet reached,
      // reset the word to a random starting word
      if (word === null && wordCount < numWords) {
        word = this.words[Math.floor(Math.random() * this.words.length)];
      }
    }
    return result.join(" ");
  }
  
  
}

module.exports = { MarkovMachine };