//proxy gain

const vm = Vue.createApp({ //short for view-model
    data() {
        return {
            firstName: "John",
            lastName: "Doe"
        }
    }
}).mount("#app1")

Vue.createApp({
    data() {
        return {
            firstName: "Furkan",
            lastName: "Selek"
        }
    }
}).mount("#app2")