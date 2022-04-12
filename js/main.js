//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let searchVal = 0
let alcohol
document.getElementsByClassName('getDrink')[0].addEventListener('click',search )
document.getElementsByClassName('one')[0].addEventListener('click', prev)
document.getElementsByClassName('two')[0].addEventListener('click', next)


function search(){
    let searchValue = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        alcohol = data
        searchVal = 0
        document.getElementsByClassName('output')[0].style.display = 'flex'
        updateDisplay()
    })
    .catch(err=> {
        console.log(`error ${err}`)
    })
}


function prev(){
    searchVal -= 1
    if(searchVal < 0){
        searchVal = alcohol.drinks.length-1
    } 
    updateDisplay()
}

function next(){
    searchVal += 1
    if(searchVal === alcohol.drinks.length){
        searchVal = 0
    }
    updateDisplay()
}

function updateDisplay(){
        document.querySelector('h2').innerHTML = alcohol.drinks[searchVal].strDrink
        document.getElementById("picture").src= alcohol.drinks[searchVal].strDrinkThumb
        document.querySelector('h3').innerHTML = alcohol.drinks[searchVal].strInstructions
}