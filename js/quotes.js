const quotes = [
    {
        quote: "Great loves too must be endured.",
        author: "- Gabriel Coco Chanel",
    },

    {
        quote: "There is no remedy for love but to love more.",
        author: "- Henry David Thoreau",
    },

    {
        quote: "Only in the agony of parting do we look into the depths of love.",
        author: "- George Eliot",
    },

    {
        quote: "We can draw lessons from the past, but we cannot live in it.",
        author: "- Lyndon B. Johnson",
    },

    {
        quote: "Just do it.",
        author: "- Nike",
    },

    {
        quote: "Life wouldn't be worth living if I worried over the future as well as the present.",
        author: "- William Somerset Maugham",
    },

    {
        quote: "A single day is enough to make us a little larger.",
        author: "- Paul Klee",
    },

    {
        quote: "Wheresoever you go, go with all your heart.",
        author: "- Confucius",
    },

    {
        quote: "시작이 반이다.",
        author: "- 아리스토텔레스",
    },

    {
        quote: "It's choice - not chance - that determines your destiny.",
        author: "- Jean Nidetch",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;