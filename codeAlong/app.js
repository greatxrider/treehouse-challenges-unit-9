const express = require('express');
const app = express();

const records = require('./records');

// SEND a GET request to /quotes READ a list of quotes
app.get('/quotes', async (req, res) => {
    const quotes = await records.getQuotes();
    res.json(quotes);
});

// Send a Get request to /quotes/:id READ(view) a quote
app.get('/quotes/:id', async (req, res) => {
    let id = req.params.id;
    const quote = await records.getQuote(id);
    res.json(quote);
});

// Send a POST request to /quotes to CREATE a new quote
// Send a PUT request to /quotes/:id UPDATE (edit) a quote
// Send a DELETE request to /quotes/:id DELETE a quote
// Send a GET Request to /quotes/quote/random READ (view) a random quote

app.listen(3000, () => console.log('Quote API listening on port 3000!'));

const data = {
    quotes: [
        {
            id: 8721,
            quote: "We must accept finite disappointment, but we must never lose infinite hope.",
            author: "Martin Luther King"
        },
        {
            id: 5779,
            quote: "Use what you’ve been through as fuel, believe in yourself and be unstoppable!",
            author: "Yvonne Pierre"
        },
        {
            id: 3406,
            quote: "To succeed, you have to do something and be very bad at it for a while. You have to look bad before you can look really good.",
            author: "Barbara DeAngelis"
        }
    ]
}
