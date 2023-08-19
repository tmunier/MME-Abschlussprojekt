// express.js

let express = require("express")
let app = express()

let tweets = require("./politicians-tweets.json")
console.log(tweets[0])

// to disable corss origin problems
let cors = require("cors")
app.use(cors({origin: "*"}))

// get-request
app.get("/", function(req, res){
    console.log(req)
    res.send("hello world")
})

app.get("/tweets", function(req, res){
    res.json(tweets)
})

app.get("/sentiment_filter", function(req, res){
    let sentiments = req.query.sentiments

    let filteredTweets = tweets.filter(function(tweet){
        let isSentiment = false
        for(sentiment of sentiments){
            if(tweet.sentiment_prediction.includes(sentiment)){
                isSentiment = true
                break
            }
        }
        return isSentiment
    })
    res.json(filteredTweets)
})

app.get("/politician_filter", function(req, res){
    let politicians = req.query.politicians

    let filteredTweets = tweets.filter(function(tweet){
        let isPolitician = false
        for(politician of politicians){
            if(tweet.UserScreenName.includes(politician)){
                isPolitician = true
                break
            }
        }
        return isPolitician
    })
    res.json(filteredTweets)
})

app.get("/party_filter", function(req, res){
    let parties = req.query.parties

    let filteredTweets = tweets.filter(function(tweet){
        let isParty = false
        for(party of parties){
            if(tweet.Partei.includes(party)){
                isParty = true
                break
            }
        }
        return isParty
    })
    res.json(filteredTweets)
})

app.get("/keyword_filter", function(req, res){
    let keywords = req.query.keywords

    let filteredTweets = tweets.filter(function(tweet){
        let isKeyword = false
        for(keyword of keywords){
            if(tweet.Embedded_text.includes(keyword)){
                isKeyword = true
                break
            }
        }
        return isKeyword
    })
    res.json(filteredTweets)
})

app.listen(3000, () => {
    console.log(`Listening on port 3000`)
  }) 
// server running at https://localhost:3000
// server running at https://127.0.0.1:3000