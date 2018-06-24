//Tech Degree Project 1
//Author: Julie Fitzer
//Display of random quotes on a Website.


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//initialize quote array
var quotes = [];

//function which selects a random quote from array quotes and returns quote
function getRandomQuote() {
  var index = Math.floor(Math.random() * quotes.length);
  var selection = quotes[index];
return selection;
}

//function which prints to webpage a random quote and source
//prints citation and year only if present in quote object
//shows category of quote
function printQuote() {
  var selection = getRandomQuote();
  var listOfKeys = [];
  for (var key in selection){   //make list of keys in selected quote object
    listOfKeys.push(key);
  }
  var quoteString = '<p class="quote">' + selection.quote + '</p>' +
    '<p class="source">'+ selection.source;
  if (listOfKeys.indexOf("citation") !== -1){  //print citation if it's present
    quoteString +=   '<span class="citation">' + selection.citation + '</span>'
  }
  if (listOfKeys.indexOf("year") !== -1){  //print year if it's present
    quoteString +=   '<span class="year">' + selection.year + '</span>'
  }
  quoteString += '<p class="category">' + 'category: ' + selection.category + '</p>'
  quoteString += "</p>";
  document.getElementById('quote-box').innerHTML= quoteString;
}

//add quote 1 to quote array
quotes.push({
  quote: "The four most beautiful words in our common language: 'I told you so.'",
  source: "George Vidal",
  citation: "Reader's Digest",
  category: "humor"
});

//add quote 2 to quote array
quotes.push({
  quote: "Every crime destroys more Edens than our own.",
  source: "Nathaniel Hawthorne",
  citation: "uuquotes.tumblr.com",
  category: "religion"
});

//add quote 3 to quote array
quotes.push({
  quote: "Memory is the servant of conscience.",
  source: "Marion D. Shutter",
  citation: "uuquotes.tumblr.com",
  year: "1894",
  category: "religion"
});

//add quote 4 to quote array
quotes.push({
  quote: "To grow restless with who we are helps us to move towards our ideals.",
  source: "Stephen Shick",
  citation: "uuquotes.tumblr.com",
  category: "religion"
});

//add quote 5 to quote array
quotes.push({
  quote: "Red sky at night, shepherd's delight. Blue sky at night, day.",
  source: "Tom Parry",
  citation: "Reader's Digest",
  category: "humor"
});

//display a random quote
printQuote();
