// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function (element) {
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
  let word1 = word.trim();
  if (word1.length === 0) {
    const header = document.createElement("h3");
    header.append("This is a number of the word's occurences in your sentence:");
    document.body.append(header);
    const paragraph = document.createElement("p");
    paragraph.append("0");
    document.body.append(paragraph);
  }
  else {
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function (element) {
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

function boldPassage(word, text) {
  if ((text.trim().length === 0) || (word.trim().length === 0)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
    return p;
  });
  const header = document.createElement("h3");
  header.append("This is your sentence with bolded repeated words:");
  document.body.append(header);
  const paragraph = document.createElement("p");
  paragraph.append(p);
  document.body.append(paragraph);
}

//Interface Logic 
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
    boldPassage(wordInput, array1)
    }
  }

