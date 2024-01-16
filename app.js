const vm = Vue.createApp({
    data() {
        return {
            firstName: "John",
            lastName: "Doe",
            url: "https://google.com",
            raw_url: "<p><a href='https://google.com' target='_blank'>Google</a></p>",
            age: 20            
        }
    },
    methods: {
        fullName(){
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        },
        increment(){
            this.age++
        },
        updateLastName(event){
            this.lastName = event.target.value
        }
    }
}).mount("#app")