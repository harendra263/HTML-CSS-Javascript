// const button = document.querySelector("button");
const p = document.querySelector("p");
const API = "http://api.quotable.io/random";





// button.addEventListener('click', () => {
//     fetch(API).then(res => res.json()).then(data => {
//         p.innerText = data.content;
//     }).catch(() => alert("Error fetching quote!"));
// });


function fetchQuote(){
    fetch(API)
    .then(response => response.json())
    .then(data => { 
        p.innerText = data.content
    }).catch(() => alert("Error Fetch quote!"));
};

setInterval(fetchQuote, 5000)