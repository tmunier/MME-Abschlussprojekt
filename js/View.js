App.View = function(){

    let that = {}
    
    let init = function(){
        console.log("view")

        $("#search-button").on("click", searchButtonClicked)
    }

    let searchButtonClicked = function(event){

        let stichwort = $("#stichwort").val()
        let politiker = $("#politiker").val()
        let partei = $("#partei").val()
        let start = $("#von").val()
        let end = $("#bis").val()
        let sentiment = $("#sentiment").val()

        console.log(stichwort, politiker, partei, start, end, sentiment)

        $(document).trigger("searchStarted", [stichwort, politiker, partei, start, end, sentiment])
    }



    that.init = init

    return that
}