// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  const header = document.createElement("h3");
  header.append("This is a number of words in your sentence:");
  document.body.append(header);
  const paragraph = document.createElement("p");
  paragraph.append(wordCount);
  document.body.append(paragraph);
}

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  const header = document.createElement("h3");
  header.append("This is a number of the word's occurences in your sentence:");
  document.body.append(header);
  const paragraph = document.createElement("p");
  paragraph.append(wordCount);
  document.body.append(paragraph);

}

function omitOffensiveWords(text) {
  const textArray = text.split(" ");
  const result = textArray.filter(checkOffensive)
  function checkOffensive(element) {
      console.log(element);
       if (element !== "zoinks" && element !== "muppeteer" && element !== "biffaroni" && element !== "loopdaloop") {
       return element;
       }
  };
  const header = document.createElement("h3");
  header.append("This is your sentence without offensive words:");
  document.body.append(header);
  const paragraph = document.createElement("p");
  paragraph.append(result);
  document.body.append(paragraph);
}

window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function (event) {
    event.preventDefault();
    let array = [];
    let array1 = [];
    array[0] = document.getElementById("input").value;
    wordInput = document.getElementById("wordInput").value;
    array1 = array.toString();
    wordCounter(array1);
    numberOfOccurrencesInText(wordInput, array1);
    omitOffensiveWords(array1);
  }
}
