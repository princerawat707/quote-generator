const quoteContainer = document.getElementById("quote-container")
const quoteText = document.getElementById("quote")
const authorText  = document.getElementById("author")
const twitterBtn  = document.getElementById("twitter")
const newQuoteBtn  = document.getElementById("new-quote")
const loader  = document.getElementById("loader")


let apiQuotes =  [];

// Show loading
function loading(){
    loader.hidden = false
    quoteContainer.hidden = true
}

// Hide
function complete() {
    quoteContainer.hidden = false
    loader.hidden = true
}


// Show new quote
function newQuote() {
    loading()
// Pick a random quote
const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
// Check if author field is blank and replace it with unknown
if(!quote.author) {
    author.text = "Unknown"
}else{
    authorText.textContent = quote.author;
}
// Check quote length to determine styling
if(quote.text.length>120){
    quoteText.classList.add("long-quote")
}else{
    quoteText.classList.add("long-quote")
}
// Set quote hide loader

quoteText.textContent = quote.text;
complete()
}

// tweetQuote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, "_blank");
}

// Event Listener
newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)

// Get Quotes From API
// async function getQuotes() {
//     const apiUrl = "https://type.fit/api/quotes" ;
//     try{
//          const response = await fetch(apiUrl);
//          apiQuotes = await response.json();
//         //  console.log(apiQuotes)
//          newQuote();
//     } catch(error) {

//     }
// }

// On Load
// getQuotes();
newQuote()
