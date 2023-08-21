let currentTweet = ""
let tweets = []

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