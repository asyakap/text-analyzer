# Text analyzer
#### By Asia Kaplanyan and Noah Atkinson

## Technologies Used

* _HTML_
* _CSS_
* JavaScript

## Description

_This webpage analyzes the text that is given by a user._

## Setup/Installation Requirements

* _You need a web browser_


## Known Bugs

* _No known bugs_


## License

_If you run into a problem or in case you have any ideas or concerns please contact me._

Copyright (c) _01/18/2023_ _Asia Kaplanyan and Noah Atkinson_

## Tests
Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2


Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0
      
Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3


Describe: omitOffensiveWords()

Test: "It should return the same string if offensive words are not found."
Code:
const text = "word word2 word2 word3 word3 word3";
omitOffensiveWords(text);
Expected Output: "word word2 word2 word3 word3 word3"

Test: "It should return the string without offensive words."
Code:
const text = "word zoinks word2 muppeteer word3 biffaroni loopdaloop loopdaloop";
omitOffensiveWords(text);
Expected Output: "word word2 word3"
