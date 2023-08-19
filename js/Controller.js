App.Controller = function(){

    let that = {}

    let init = function(){
        console.log("controller")
        model = App.Model()
        view = App.View()

        model.init()
        view.init()
    }

    that.init = init

    return that

}