App.Model = function(){

    let that = {}
    let tweets = []

    let init = function(tweetsData){
        console.log("model", tweetsData[0])
        tweets = tweetsData
    }

    that.init = init

    return that
}