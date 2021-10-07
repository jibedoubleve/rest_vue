var app5 = new Vue({
    el: "#app-5",
    data: {
        message: "clicked"
    },
    methods: {
        clickMessage: function () {
            this.message = this.message + '.';
        }
    }
});