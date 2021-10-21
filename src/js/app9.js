var app = new Vue({
    el: "#app9",
    data: function () {
        return {
            status: "None"
        }
    }
});

//handle routing
function onHashChange() {
    var hash = window.location.hash
        .replace(/#\/?/, "")
        .replace("-", " ");
    app.status = hash;
}

window.addEventListener("hashchange", onHashChange);