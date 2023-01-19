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
  textArray.forEach(function (element, index) {
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

function countEachWord(text) {
  let array = [];
  let array1 = [];
  let array2 = [];
  let array3 = [];

  array[0] = document.getElementById("input").value;
  array1 = array.toString();
  array1 = array1.split(" ");
  if (text.trim().length === 0) {
    return null;
  }
  else {
    array1.forEach(function (element) {
      element = element.toLowerCase();
      array3.push(element);
    });
    array3.forEach(function (element1) {
      let count = 0;
      array3.forEach(function (element2) {
        if (element1 === element2) {
          count += 1;
        }
      });
      array2.push(count + " - " + element1);
    });
    let uniqueArray = [...new Set(array2)];
    uniqueArray.sort();
    uniqueArray.reverse();
    uniqueArray.forEach(function (word) {
      const paragraph = document.createElement("p");
      paragraph.append(word);
      document.body.append(paragraph);
    });
  }
}

function boldSection(text, word) {
  let array = document.getElementById("input").value;
  let word1 = document.getElementById("wordInput").value;
  let array1 = array.toString();
  const p = document.createElement("p");
  array1 = array1.split(" ");
  if ((text.trim().length === 0) || (word.trim().length === 0)) {
    return null;
  }
  else {
    array1.forEach(function(element) {
    if (element.includes(word1)) {
      let index1 = text.indexOf(word1);
      console.log(index1);
      let part1 = text.substring(0, index1);
      let index2 = index1 + word1.length;
      let part2 = text.substring(index2,element.length);
      let bold = document.createElement("strong");
      bold.append(word1);
      console.log(bold);
      p.append(part1);
      p.append(bold);
      p.append(part2);
    } else {
      p.append(element);
    }
    return p;
  });
  }
  
  const header = document.createElement("h3");
  header.append("This is your sentence with bolded sections of repeated words:");
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
    countEachWord(array1);
    boldSection(array1, wordInput);
  }
}

