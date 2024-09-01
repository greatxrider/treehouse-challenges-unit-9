const express = require('express');
const quotesRouter = express.Router();

const records = require('./records');

function asyncHandler(cb) {
    return async (req, res, next) => {
        try {
            await cb(req, res, next);
        } catch (err) {
            next(err);
        }
    };
}

// SEND a GET request to /quotes READ a list of quotes
quotesRouter.get('/quotes', asyncHandler(async (req, res) => {
    const quotes = await records.getQuotes();
    res.json(quotes);
}));

// Send a Get request to /quotes/:id READ(view) a quote
quotesRouter.get('/quotes/:id', asyncHandler(async (req, res) => {
    let id = req.params.id;
    const quote = await records.getQuote(id);
    if (quote) {
        res.json(quote);
    } else {
        res.status(404).json({ message: "Quote not found." });
    }
}));

// Send a GET Request to /quotes/quote/random READ (view) a random quote
quotesRouter.get('/quotes/quote/random', asyncHandler(async (req, res, next) => {
    const quote = await records.getRandomQuote();
    res.json(quote);
}))

// Send a POST request to /quotes to CREATE a new quote
quotesRouter.post('/quotes', asyncHandler(async (req, res) => {
    if (req.body.author && req.body.quote) {
        const quote = await records.createQuote({
            quote: req.body.quote,
            author: req.body.author
        });
        res.status(201).json(quote);
    } else {
        res.status(400).json({ message: "Quote and author required." });
    }
}));

// Send a PUT request to /quotes/:id UPDATE (edit) a quote
quotesRouter.put('/quotes/:id', asyncHandler(async (req, res) => {
    const quote = await records.getQuote(req.params.id);
    if (quote) {
        quote.quote = req.body.quote;
        quote.author = req.body.author;

        await records.updateQuote(quote);
        res.status(204).end();
    } else {
        res.status(400).json({ message: "Quote Not Found" });
    }
}));

// Send a DELETE request to /quotes/:id DELETE a quote
quotesRouter.delete("/quotes/:id", asyncHandler(async (req, res, next) => {
    const quote = await records.getQuote(req.params.id);
    if (quote) {
        await records.deleteQuote(quote);
        res.status(204).end();
    } else {
        res.status(404).json({ message: "Quote not found." });
    }
}));

module.exports = quotesRouter;
