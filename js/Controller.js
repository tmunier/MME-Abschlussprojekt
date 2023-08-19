App.Controller = function(){

    let that = {}

    let init = function(){
        console.log("controller")

        model = App.Model()
        view = App.View()

        getNeutralTweets()
    }

    let initListener = function(){
        $(document).on("searchButtonClicked", handlesearchButtonClicked)
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

    let handlesearchButtonClicked = function(){
        console.log("search button")
    }

    that.init = init

    return that

}