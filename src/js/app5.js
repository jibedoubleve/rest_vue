var app5 = new Vue({
    el: "#app-5",
    data: function () {
        return {
        message: "clicked"
    }},
    methods: {
        clickMessage: function () {
            this.message = this.message + '.';
        }
    }
});