let currentTweet = ""

console.log(tweets_data[1]["UserName"]) //@AfDBerlin
console.log('Hello World')

let updateTweetInfo = function (tweetId){
    let userName = document.getElementById("politiker")
    let partei = document.getElementById("partei")
    let timestamp = document.getElementById("datum")
    let text = document.getElementById("text")
    let sentiment = document.getElementById("sentiment")
    let tweetLink = document.getElementById("link")

    // metaData = getMemeMetaData(currentMeme)
    userName.innerHTML = "Politiker " + ["UserName"]
    partei.innerHTML = "Partei: " + ["Partei"]
    timestamp.innerHTML = "Datum: " + ["Timestamp"]
    text.innerHTML = "Text: " + ["Text"]
    sentiment.innerHTML = "Sentiment: " + ["sentiment_prediction"]
    tweetLink.innerHTML = "Link zum Tweet: "

    let link = document.createElement("a")
    link.setAttribute("href", ["Tweet URL"])
    link.innerHTML = "Link"
    tweetLink.appendChild(link)
}

let showRandomImg = function () {
    // resetTable()
    let randomNumber = Math.floor(Math.random() * (tweets_data.length - 1))
    let selection = tweets_data[randomNumber]
    currentTweet = selection["Image link"]
    let tweetImage = document.getElementById("tweet-image")
    tweetImage.setAttribute("src", "js/tweets_data.js" + currentTweet)

    updateTweetInfo(currentTweet)
}

let initRandomButton = function () {
    let randomButton = document.getElementById("random-button")
    randomButton.addEventListener("click", showRandomImg)
}


let setClickEvents = function () {
    initRandomButton()
}

window.onload = function () {
    // initTwitterObjects()
    showRandomImg()
    setClickEvents()
    $(".container").fadeIn(1000)

}