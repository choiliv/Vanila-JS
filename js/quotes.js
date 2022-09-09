




     const quotes = [
    {
        quote: "이렇게 귀한 곳에 어떻게 누추한 분이...",
        author: "작자미상"
    },
    {
        quote: "우울과 우웅은 한끗차이",
        author: "작자미상",   
    },
    {
        quote: "수영하면 물에 뜨는 뚠뚠이",
        author: "작자미상",   
    },
    {
        quote: "추억이 되려면 말도 안되는 일을 해야한다",
        author: "윤정한",   
    },
    {
        quote: "잠이나 자라",
        author: "작자미상",   
    },
    {
        quote: "치킨은 살이 안찐다, 내가 찐다",
        author: "작자미상",   
    },
    {
        quote: "어쩌겠습니까, 해내야죠",
        author: "박은빈",   
    },
    {
        quote: "BTS, 봉준호, 손흥민, Jay Park, Let's go",
        author: "Jay Park",   
    },
        ]

    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote span:last-child");
    const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quote.innerText = todayQuote.quote;
    author.innerText = todayQuote.author;