//proxy gain

const vm = Vue.createApp({ //short for view-model
    data() {
        return {
            firstName: "John",
            lastName: "Doe"
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