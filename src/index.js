
function displayQuote(response){
    let p = document.querySelector("p");
    p.innerHTML = response.data.quote;
    let h4 = document.querySelector("h4");
    h4.innerHTML = response.data.author;
}


function getQuote(event){
    event.preventDefault()
    let apiUrl = "http://quotes.stormconsultancy.co.uk/random.json"
    axios.get(apiUrl).then(displayQuote)
}

let body = document.body
body.onload = getQuote;


button.addEventListener("click", getQuote)
