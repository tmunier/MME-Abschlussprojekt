let App = {
    init: function(){
        console.log("app")
        App.Controller().init()
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            const tabId = this.id;
            switch (tabId) {
                case "tab-suche":
                    window.location.href = "suche.html";
                    break;
                case "tab-analyse":
                    window.location.href = "analyse.html";
                    break;
                case "tab-random":
                    window.location.href = "random.html";
                    break;
                default:
                    break;
            }
        });
    });
});
