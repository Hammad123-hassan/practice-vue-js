<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  
   <!-- <Hammad data="Hammad is here" msg="Show your path"/> -->


   <!-- Props in vue -->
     <!-- <h1>Props in Vue js</h1>  -->
     <!-- <Child name="Hammad Hassan" /> -->
      <!-- <Child v-bind:name="userName" /> -->


      <!-- Send props child to parent Start -->
      <!-- <div id="app">
        <h1>{{title}}</h1>
       <Child v-on:changeTitle="updateTitle($event)" />
      </div>
  -->
  <!-- Add checkbox and radio button Start-->
  <!-- <div id="App">
    <h1>Form with checkbox and radio button in vue js</h1>
    <signup/>

  </div> -->

  <!-- Filter in vue js -->
  <div id="App">
    <h1>Filter in vue js</h1>
    <h1>{{name  }}</h1>
    <Home/>
    

  </div>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Hammad from './components/Hammad.vue'
import Child from './components/Child.vue'
// import signup from './components/signup.vue'
// import Home from './components/Home.vue'
import parent from './components/parent.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld,
    //  Hammad,
       Child,
    // signup, 
    // Home,
       parent
  },
  data(){
    // return{userName:"Asad"}
    // return{users:[
    //   {name:'Hassan',email:'hammad@test.com'},
    //   {name:'Haammad',email:'hammad@test.com'},
    //   {name:'Rao',email:'hammad@test.com'},
    //   {name:'Asad',email:'hammad@test.com'}
    // ]}

    //  Send props child to parent Start
    // return {title:"Props Tutorial"}

    // Filter in vue js
     return{name:'Hammad Hassan'}
  },
  methods:{
    updateTitle(title)
    {
      this.title=title
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
