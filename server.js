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


app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
  }) 
// server running at https://localhost:3000
// server running at https://127.0.0.1:3000