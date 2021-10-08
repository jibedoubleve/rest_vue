var app8 = new Vue({
    el: "#app-8",
    data: {
        lines: "",
        loadStatus: ""
    },
    methods: {
        fetch: function () {
            this.loadStatus = "Work in progress...";
            // Create a request variable and assign a new XMLHttpRequest object to it.
            var request = new XMLHttpRequest();

            // Open a new connection, using the GET request on the URL endpoint
            request.open('GET', 'http://apex-acc/ords/wadb/api/v1/MAINTENANCE_CONTRACT', true);

            request.onload = function () {
                // Begin accessing JSON data here

                this.loadStatus = "Almost..."
                var data = JSON.parse(this.response)

                this.lines = data.items;
                this.loadStatus = "Work done";
                console.info("Work done.");
            };

            // Send request
            request.send();
        }
    }
});