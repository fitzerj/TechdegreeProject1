// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//initialize quote array
var quotes = [];

//function which selects a random quote from array quotes and returns quote
function getRandomQuote() {
  var index = Math.floor(Math.random() * quotes.length);
  var selection = quotes[index];
return selection;
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
  quote: "To commit to creating a prophetic congregation today is to grapple with what it means to take responsibility for cocreating the holy right here on earth.",
  source: "Meg Riley",
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
  categery: "humor"
});
