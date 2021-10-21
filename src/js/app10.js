Vue.component('button-counter', {
    props: ['title'],
    data: function () {
        return {
            counter: 0
        }
    },
    template: '<div><p>{{title}}</p><button v-on:click="counter++">Count {{counter}}</button></div>'
});

var app = new Vue({
    el: "#app-10",
    data: function () {
        return {
            myTitle: ""
        }
    }
});