let searchButton = document.querySelector("#search")
var randomNum;

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", () => {
    console.log("button pressed")
    randomNumber()
    sendApiRequest()
})



//An asynchronous function to fetch data from the API.
async function sendApiRequest() {
    let APP_ID = "7c9f0df4"
    let API_KEY = "d71003ab1284c0bef94f351d24896e75"

    let userInput = document.getElementById("searchQuery").value;

    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${userInput}`);
    console.log(response)
    let data = await response.json()
    console.log(data)

    useApiData(data)
}

function randomNumber() {
    randomNum = Math.floor(Math.random() * (10-1+1)) + 1;
}

//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data) {
    document.querySelector("#content").innerHTML = `
    <div id = "cardscontainer">
        <div class="row">
            <div class="card" style="width: 18rem;">
                <img src="${data.hits[randomNum].recipe.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.hits[randomNum].recipe.label}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="${data.hits[randomNum].recipe.url}" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="${data.hits[randomNum+1].recipe.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data.hits[randomNum+1].recipe.label}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="${data.hits[randomNum+1].recipe.url}" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
            <div class="card" style="width: 18rem;">
            <img src="${data.hits[randomNum+2].recipe.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.hits[randomNum+2].recipe.label}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="${data.hits[randomNum+2].recipe.url}" class="btn btn-primary">Go somewhere</a>
                </div>
        </div>
            
        </div>

    </div>
    `


    
}


