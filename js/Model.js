App.Model = function(){

    let that = {}
    let tweets = []
    let sentimentValues = ["positiv", "neutral", "negativ"]

    let init = function(tweetsData){
        console.log("model", tweetsData[0])
        tweets = tweetsData
    }

    let getSearchResults = function(stichwort, politiker, partei, start, end, sentiment){
        
        sentimentValue = sentimentValues.indexOf(sentiment)

        return $.ajax({
                    url: "http://localhost:3000/sentiment_filter",
                    type: "GET",
                    async: true,
                    data: {
                        sentiments: [sentimentValue]
                    }
                })


    }

    that.init = init
    that.getSearchResults = getSearchResults

    return that
}