//proxy gain

const vm = Vue.createApp({ //short for view-model
    data() {
        return {
            firstName: "John",
            lastName: "Doe"
        }
    },
    methods: {
        fullName(){// see that we are not using ES6 arrow functions as it may cause issues
            return `${this.firstName} ${this.lastName.toUpperCase()}` // mention that we used this.blabla 
        }
    }
}).mount("#app1")

// setTimeout(() => {
//     vm.firstName = "Yasin" //normally you can't access to that this way, you had to do vm.data.firstname etc. this is called !!!PROXY GAIN!!!
// }, 2000)


// Vue.createApp({
//     data() {
//         return {
//             firstName: "Furkan",
//             lastName: "Selek"
//         }
//     }
// }).mount("#app2")