console.log("hello world")

let showQuote = function(results, status, xhr){ // mit js: event als parameter
    /*console.log(results)
    console.log(status)
    console.log(xhr)*/
    let quote = results[0].content
    let author = results[0].author
    $("#quote").text(quote)
    $("#quote-author").text("- by " +  author)
}

let getRandomQuote = function(){
    // request mit javascript
    /*let request = new XMLHttpRequest()
    request.open("GET", "https://api.quotable.io/random", true) // true: asynchrone anfrage
    request.send()
    request.onload = showQuote*/

    // request mit jquery
    $.ajax({
        url: "https://api.quotable.io/quotes/random",
        type: "GET", // get ist standard bei ajax
        data: {
            limit: 5
        },
        success: showQuote
    })
}

let showPokemon = function(results, status, xhr){
    $("#pokemon-name").text("# " + results.id + ":" + results.name)
    $("#pokemon-pic").attr("src", results.sprites.front_default)
}

let getRandomPokemon = function(){
    let randomNumber = Math.floor(Math.random() * 151)
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/" + randomNumber,
        succes: showPokemon
    })
}

let geoError = function(){
    $("#weather").test("No geolocation support")
}

let showWeather = function(results, status, xhr){
    let min = results.daily.temperature_2m_max[0]
    let max = results.daily.temperature_2m_min[0]
    let average = ((min + max) / 2).toFixed(2)
    $("#weather").text(average + "Degrees")
}

let geoSuccess = function(position){
    console.log(position)
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude

    $.ajax({
        url: "https://api.open-meteo.com/v1/forecast",
        data: {
            latitude: latitude,
            longitude: longitude,
            daily: ["temperature_2m_max", "temperature_2m_min"],
            timezone: "GMT",
            forecast_days: 1 
        },
        success: showWeather
    })
}

let getWeatherToday = function(){
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError)
}

window.onload = function(){
    getRandomQuote()
    getRandomPokemon()
    getWeatherToday()
}