<template>
<!-- filtr in vue js -->
    <!-- <div>
        <h1>{{name }}</h1>
        <h3>{{amount}}</h3>
    </div> -->

    <!-- Created and beforecreate in vue js -->
    <div>
        <!-- <h1>{{name}}</h1> -->

    </div>

</template>
<script>
export default{
    //  name:'HelloWorld',
    //  filtr in vue js
    // data()
    // {
    //     return{
    //        name:"Home",
    //        amount:"100"
    //     }
    // },

    // Created and beforecreate in vue js
    data(){
        return{
            name:"Hammad Hassan"
        }
    },
    beforeCreate(){
        console.warn("before",this.name)
    },
    created(){
        this.name="Muhammd Hassan"
        console.warn("created",this.name)
    }

}
</script>
