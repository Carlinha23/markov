const { MarkovMachine } = require('./markov');

describe('MarkovMachine', () => {
    test('makeChains creates correct chains', () => {
      const mm = new MarkovMachine("the cat in the hat");
      expect(mm.chains).toEqual({
        "the": ["cat", "hat"],
        "cat": ["in"],
        "in": ["the"],
        "hat": [null]
      });
    });
  
    test('makeText generates text with default length', () => {
        const mm = new MarkovMachine("the cat in the hat");
        const text = mm.makeText();
        expect(text.split(" ").length).toBeGreaterThanOrEqual(50);
        expect(text.split(" ").length).toBeLessThanOrEqual(150); // Adjust the range as needed
      });
      
      test('makeText generates text with specified length', () => {
        const mm = new MarkovMachine("the cat in the hat");
        const text = mm.makeText(50);
        expect(text.split(" ").length).toBe(50);
      });
      
  
    
  });
  