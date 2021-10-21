var app6 = new Vue({
    el: "#app-6",
    data: function () {
        return {
            input: "",
            output: "",
            btn_text: "Insert"
        }
    },
    methods: {
        insertValue: function () {
            console.info("Clicked on button");
            this.output += this.input;
            this.btn_text = "Again";
        }
    }
});