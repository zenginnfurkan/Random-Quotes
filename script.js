let quotes = [];
let colors = ["#FF416C", "#FDC830", "#86A8E7", "#FFEFBA", "#A1FFCE", "#0D47A1"];

function GetQuotes() {
    return fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => {
            quotes = data;
            Change();
        })
}

function Change() {
    let count = quotes.length;
    let rndNumb = Math.floor(Math.random() * count);

    document.getElementById('text').innerText = quotes[rndNumb].text;
    document.getElementById('author').innerText = "~ " + quotes[rndNumb].author;

    let rndColorNumb = Math.floor(Math.random() * 6);
    document.body.style.backgroundColor = colors[rndColorNumb];
}

function ShareTweet() {
    let text = document.getElementById('text').innerText;

    window.location.href = 'https://twitter.com/intent/tweet?hastags=quotes&text=' + encodeURIComponent('"' + text + '"');
}

GetQuotes();