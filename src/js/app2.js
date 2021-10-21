var app2 = new Vue({
    el: '#app-2',
    data: function () {
        return {
            message: 'Last display on ' + new Date().toLocaleString()
        }
    }
});