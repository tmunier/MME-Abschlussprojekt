App.Controller = function(){

    let that = {}

    let init = function(){
        console.log("controller")
        model = App.Model()
        view = App.View()

        getNeutralTweets()
    }

    let continueInit = function(results, status, xhr){
        console.log(results)
        model.init()
        view.init()
    }

    let getNeutralTweets = function(){
        $.ajax({
            url: "http://localhost:3000/sentiment_filter",
            type: "GET",
            data: {
                sentiments:[1]
            },
            success: continueInit
        })
    }

    that.init = init

    return that

}