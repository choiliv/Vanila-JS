




     const quotes = [
    {
        quote: "The secret of getting ahead is getting started.",
        author: "- Mark Twain"
    },
    {
        quote: "Age is no guarantee of maturity.",
        author: "- Lawana Blackwell",   
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "- Maya Angelou",   
    },
    {
        quote: "This too shall pass.",
        author: "- Et hoc transibit",   
    },
    {
        quote: "Only I can change me life, no one can do it for me.",
        author: "- Carol Burnett",   
    },
    {
        quote: "Great minds have purposes, others have wishes.",
        author: "- Washington Irving",   
    },
    {
        quote: "The less their ability, the more their conceit.",
        author: "- Ahad Ha-am",   
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "- Walt Disney",   
    },
        ]

    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote span:last-child");
    const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quote.innerText = todayQuote.quote;
    author.innerText = todayQuote.author;