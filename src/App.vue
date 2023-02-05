<template>
  <div id="app">
    <div v-bind:class='geo'>
      <button v-bind:class='jonah' @click='sare'>{{ toggle }}</button>
      <div :class='bla'>
        
       <span v-bind:class='spank'>I am <span style="font-weight:bolder;text-decoration: none;text-decoration-color: darkolivegreen;
      text-decoration-thickness: 3px;">{{ user | momo }}</span></span>
      <br><br>
      <span :class='spankb'>I am the fasted and most reliable
       <u :class="senior">BureaDchanger  </u>in the whole of Abuja</span>
    <br><span :class='spankC'> lets help you get your money exchange in the most
    <u :class="senior"> secured, profitable, reliable and<br> easiest</u>
       way you've never imagine.</span></div>
    <br><br>
  
 <ul v-bind:class="machala">
  <li class="list" style=" border-left:2px white solid;" ><a href="#">Home</a></li>
  <li class="list"><a href="#">About</a></li>
  <li class="list"><a href="#">Clients</a></li>
  <li class="list"><a href="#">Services</a></li>
  <li class="list"><a href="#">Rate</a></li>
  <li class="list"><a href="#">Contact</a></li>
 </ul> 
  
      
    
    </div>


    <exchangeWidget></exchangeWidget>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

//import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'App',
  data(){
    return{
      abc:false,
      user:"Kashimawo Olajunwon Abeeb",
    
      toggle:"Dark Mode",
      div1:true,
      div12:false,
      div1a:true,
      div1a2:false,
      Dark:true,//the data instances ..if they are to take only a value, that is all they can take..that is why you ashould use computed properties

      Dark2:false,
      
      spanA:true,
      spanA2:false,
      spanB:true,
      spanB2:false,
      spanC:true,
      spanC2:false,
      sen:true,
      sen2:false,
      or:true,
      or2:false,


    
    }
  },
  mounted:function(){
    this.sare();

  },
  computed:{
    jonah:function(){
      return{
        Dark:this.abc,
        Dark2:!this.abc,
      
      
    }},
    geo:function(){
      return{
        div1:this.abc,
        div12:!this.abc,
      }
    },
    bla:function(){
      return{
        div1a:this.abc,
        div1a2:!this.abc,
      }
    },
    spank:function(){
      return{
        spanA:this.abc,
        spanA2:!this.abc,

    }
  },
  spankb:function(){
      return{
        spanB:this.abc,
        spanB2:!this.abc,

    }
  },  spankC:function(){
      return{
        spanC:this.abc,
        spanC2:!this.abc,

    }
  },
  senior:function(){
      return{
        sen:this.abc,
        sen2:!this.abc,

    }
  },
   machala:function(){
      return{
        or:this.abc,
        or2:!this.abc,

    }
  }},
  methods:{
sare:function(){
  this.abc=!this.abc;

if(this.abc == false){
  this.toggle="light-mode";
}
else if(this.abc == true){
  this.toggle = "Dark-mode";
}

console.log(this.Dark2);
/*  if(this.abc == true){
    this.toggle="Dark mode";
  this.Dark='Dark2';
  this.div1="div1";
}




  else if(this.abc == false){
    this.toggle ="Light mode";
this.Dark="Dark2";
this.div1="div12";}
*/

}
  },
  components: {
  //  HelloWorld
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import "./first.css";
</style>
