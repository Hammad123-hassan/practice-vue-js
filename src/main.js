import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'

// Vue.config.prodcutionTip = false
// Vue.filter("Ucase",function(val)
// {
//     return val.toUpperCase();
// })
// Vue.filter("currencyConverter",function(val)
// {
//     return val*181
// })
createApp(App).mount('#app')
new Vue({
    render : h => h(App),
}).$mount('#app')
