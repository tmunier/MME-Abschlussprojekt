

let showTweet = function(results, status, xhr){ // mit js: event als parameter
    /*console.log(results)
    console.log(status)
    console.log(xhr)*/
    // let quote = results[0].content
    // let author = results[0].author
    // $("#quote").text(quote)
    // $("#quote-author").text("- by " +  author)
}

let getRandomTweet = function(){

    // request mit jquery
    // $.ajax({
    //     url: "https://api.quotable.io/quotes/random",
    //     type: "GET", // get ist standard bei ajax
    //     data: {
    //         limit: 5
    //     },
    //     success: showQuote
    // })
}


window.onload = function(){
    getRandomTweet()
}