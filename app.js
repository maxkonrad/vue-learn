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
        updateLastName(msg, event){
            event.preventDefault() // I think this one helps use vue instead of vanilla js by blocking it!!!
            console.log(msg)         
            this.lastName = event.target.value
        }
    }
}).mount("#app")