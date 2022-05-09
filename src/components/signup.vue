<template>
<!-- Add checkbox and radio button Start-->
<div>
    <input type="text" placeholder="Enter Your Name" v-model="signup.username"><br><br>
     <input type="Password" placeholder="Enter Your Password"  v-model="signup.password"><br><br>
     <p>Choose Hobbies</p>
     <input type="checkbox" name="cricket" id="cricket"  v-model="signup.hobbies">
     <label for="cricket">cricket</label>
     <input type="checkbox" name="Footboll" id="Footboll"  v-model="signup.hobbies">
     <label for="Footboll">Footboll</label>
     <br><br>
     <p>Select Gender</p>
     <input type="radio" name="Male" id="Male"  v-model="signup.gender">
     <label for="Male">Male</label>
     <input type="radio" name="Female" id="Female"  v-model="signup.gender">
     <label for="Female">Female</label>
     <br><br>
     <button v-on:click="signupUser">Sign Up</button>
</div>
<!-- Add checkbox and radio button close -->

</template>
<script>


// Add checkbox and radio button Start
export default {
    name:'HelloWorld',
    data()
    {
        return{
            signup:{
                username:null,
                password:null,
                hobbies:[],
                gender:null,

            }

        }
    },
    methods:{
        signupUser(){
            // console.warn(this.signup)
            console.log("signupUser",this.signup.username,this.signup.password)
        }
    }
}


// Add checkbox and radio button Close

</script>
