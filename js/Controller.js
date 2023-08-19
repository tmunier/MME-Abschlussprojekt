App.Controller = function(){

    let that = {}

    let init = function(){
        console.log("controller")

        model = App.Model()
        view = App.View()

        getNeutralTweets()
    }

    let initListener = function(){
        $(document).on("searchStarted", handleSearchStarted)
    }

    let continueInit = function(results, status, xhr){
        initListener()
        model.init(results)
        view.init()
    }

    let getNeutralTweets = function(){
        $.ajax({
            url: "http://localhost:3000/tweets",
            type: "GET",
            success: continueInit
        })
    }

    let handleSearchStarted = function(event, stichwort, politiker, partei, start, end, sentiment){
        console.log(stichwort, politiker, partei, start, end, sentiment)
    }

    that.init = init

    return that

}