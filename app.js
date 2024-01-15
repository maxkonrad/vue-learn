const vm = Vue.createApp({
    data() {
        return {
            firstName: "John",
            lastName: "Doe",
            url: "https://google.com",
            raw_url: "<p><a href='https://google.com' target='_blank'>Google</a></p>"
            // THIS IS RAW HTML BINDING AN MAY CAUSE SECURITY RISKS LIKE XSS
            
        }
    },
    methods: {
        fullName(){
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        }
    }
}).mount("#app")