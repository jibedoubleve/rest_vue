// MODELS




var app6 = new Vue({
    el: "#app-6",
    data: {
        input: "",
        output: "",
        btn_text: "Insert"
    },
    methods: {
        insertValue: function () {
            console.info("Clicked on button");
            this.output += this.input;
            this.btn_text = "Again";
        }
    }
});

// TEMPLATES
Vue.component('list-el', {
    props: ['item'],
    template: '<li>{{ item.name }}</li>'
});

var app7 = new Vue({
    el: "#app-7",
    data: {
        list: [{
                name: "elm_1"
            },
            {
                name: "elm_2"
            },
            {
                name: "elm_3"
            },
            {
                name: "elm_4"
            },
            {
                name: "elm_5"
            },
        ]
    },
    methods: {}
});