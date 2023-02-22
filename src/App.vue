<template>
  <div id="app">
    <div v-bind:class='geo'>
      <button v-bind:class='jonah' @click='sare'>{{ toggle.toUpperCase()}}</button>
      <div :class='bla'>
        
       <span v-bind:class='spank'>
      <vue-typed-js :strings="[' I am MOHAMMED MOJEED', 'RAMADAN KASHIMAWO']" :loop="true" :typeSpeed="80" :backSpeed="80">
  <h1 class="typing"></h1>
</vue-typed-js></span>
      <br><br>
      <span :class='spankb'>I am the fasted and most reliable
       <u :class="senior">BureaDchanger  </u>in the whole of Abuja</span>
    <br><span :class='spankC'> lets help you get your money exchange in the most
    <u :class="senior"> secured, profitable, reliable and<br> easiest</u>
       way you've never imagine.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to
        consider the form of a webpage or publication, without the meaning of the text influencing the design.</span>
      </div>
    <br><br><br><br>
  
 <ul v-bind:class="machala">
  <li class="list" style=" border-left:0px white solid;" ><a href="#">Home</a></li>
  <li class="list"><a href="#">About</a></li>
  <li class="list"><a href="#">Clients</a></li>
  <li class="list"><a href="#">Services</a></li>
  <li class="list"><a href="#">Rate</a></li>
  <li class="list"><a href="#">Contact</a></li>
 </ul> 
 <br>
 <div id="nav" class="Nav">
 <a href="https://twitter.com" id="twitter">
  <font-awesome-icon icon="fa-brands fa-twitter" 
  style=""/>
</a>
 <a href="https://instagram.com" >  
  <font-awesome-icon id="insta" icon="fa-brands fa-instagram" style="color:aliceblue;font-size:30px;margin-left:10px;"/></a>

<a :href="facebook">
 <font-awesome-icon icon="fa-brands fa-facebook" class="facebook"/> </a>
 
 <a href="mailto:mojjeasy@gmail.com?subject='this is for proce enquiry'" id="">
  <font-awesome-icon icon="fa-solid fa-envelope" style="color:aliceblue;font-size:30px;margin-left:10px;text-shadow:2px 2px 2px grey;"/></a> 
  <a :href="money" >
  <font-awesome-icon icon="fa-brands fa-whatsapp" id="probs" style=""/></a>
 <a href="tel:09061525364">
  <font-awesome-icon icon="fa-solid fa-phone fa-beat" id="roll" 
  style="" beat /></a>
</div>

    
    </div>


    <exchangeWidget></exchangeWidget>
    <scroLLer></scroLLer>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

//import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import {bus} from './main'

export default {
  name: 'App',
  data(){
    return{
      abc:false,pink:'',
      user:"Kashimawo Olajunwon Abeeb",
      money:'https://api.whatsapp.com/send?phone=2349061525364',
      facebook:'https://facebook.com',
    
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
  this.toggle="Dark-mode";document.getElementById('normally').style.left='36vw';
  document.getElementById('nav').style.left='30vw';
  document.getElementById('nav').style.top='2%';
}
else if(this.abc == true){
  this.toggle = "Light-mode";
  document.getElementById('normally').style.left='75vw';
  document.getElementById('nav').style.left='10vw';
  document.getElementById('normally').style.top='15vh';

  
}

bus.$emit("newEvent","am using change");

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

},
shark:function(){
document.getElementById('currency').disabled=false;
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

  @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@1,700&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap');
</style>