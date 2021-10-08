var app8 = new Vue({
    el: "#app-8",
    data: {
        lines: "",
        loadStatus: "",
        pageNr: "1",
        buttonText: "Fetch",
        url: 'https://reqres.in/api/users'
    },
    methods: {
        fetch: function () {
            this.loadStatus = "Work in progress...";

            const current_url = (this.pageNr != -1) ? this.url + "?page=" + this.pageNr : this.url;
            axios
                .get(current_url)
                    .then(response => {
                        this.lines = response.data;
                        this.loadStatus = "Page " + this.pageNr + "/" + response.data.total_pages + " loaded...";

                        if (this.pageNr < response.data.total_pages) {
                            this.pageNr++;
                            this.buttonText = "Fetch page " + this.pageNr;
                        }
                        else {
                            this.pageNr = 1;
                            this.buttonText = "Fetch page 1";
                        }
                    });
        }
    }
});