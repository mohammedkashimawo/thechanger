<template>
    <div id="appD">

        
          <div id="anime">
            <span id="turn" v-for="count in counts" :key="count.body">&nbsp;&nbsp;{{ count.title}}:-<i>'{{ count.body }}...kkkk'</i>
            </span>
           <span v-for="lowkey in lowkey" :key="lowkey.id" id="bosco" ref="pablo"></span></div>
   
  

  <div id="normally">
    ADD your comment:-
    <input type="text" v-model="big.sender" id="sendie" placeholder="yourname">
    <textarea type="textarea" v-model="big.rexie" id="joe" rows="5"></textarea>
    <button @click="counting" id="peace">click</button>
  
  </div>
   
    </div>
  
  </template>
  
  
  
  
  <script>
  import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { bus } from './main'

Vue.use(VueAxios, axios)
  
  
  export default {
    name: 'AppD',
    data(){
    return{
   counts:[],//despite the fact that its an array, dont be confused here you can still call contact.body..
   lowkey:[],
   wulo:'',
   blala:[],
   big:{
    rexie:'',
    sender:'',
   },
   
tasha:'',
bablo:[],
}},
   
    computed:{
        ras()
      {return{
        
      }}
    },
    methods:{
      
        counting:function(){
           
               
               
document.getElementById('joe').value="";
          
document.getElementById('sendie').value="";
           if(this.rexie){
           return this.rexie="";

                }

            
          
    
            this.rexie ='';
            this.sender== " ";

            {

            axios.post('https://majid-baa06-default-rtdb.firebaseio.com/posts.json', {
    title: this.big.sender,
body: this.big.rexie,
  })
  //.then(function (response) {console.log(response); }).catch(function (error) { console.log(error); });
            }
           


}},
   created(){
      axios.get('https://majid-baa06-default-rtdb.firebaseio.com/posts.json')
      //to work with the data base, we are gonna need to eference each stored data with its unique id the we will use v-for to iterate through
      //its property.the whole code base here is used to first get all the data id first then iteate around it.
     .then((data)=>{
      let newdata=data.data;
      let tent=new Array();
      for(let key in newdata){
       // this.counts.push
      //  console.log(newdata[key]);
        tent.push(newdata[key]);//we cant use this.tent here simply because the tent are is called here not in data()
        
      }
      this.counts=tent;
      console.log(this.counts);
     // console.log(newdata);
     });
        
        /*
                 let text="";
                 let item;
                let  index;
                   Object.values(data.data).forEach(bigs);
               


                function bigs(item,index){

                  text += index + ": " + item.body+ item.title; 

                }
                console.log(item,index);
                console.log((text));
                this.bablo=text;
                
              
              
                
var temp = text.split(","), theobj = {};
for (let i=0; i<temp.length; i+=2) {
  theobj[temp[i]] = temp[(i+1)];
}
console.log(theobj);
                
          
        

      });*/
    bus.$on('newEvent',(value)=>{
     this.wulo=value;
    });
    }
  }
  </script>
  <style scoped>

#upd{
    
}
#normally{

    display: inline-block;
    position: relative;
    left:77vw;
    width: 200px;
    border:0.5px white solid;
    height: 200px;
    top:10vh;
    border-radius:10px;
    backdrop-filter: blur(50%);
    color:white;font-family:'Rajdhani', sans-serif;text-align: center;
    background: linear-gradient(5deg, rgba(225,225,225,0.5),rgba(225,225,225.0.5));
    box-shadow:
      0 1px 1px hsla(0, 33%, 99%, 0.075),
      0 2px 2px hsl(0deg 33% 99% / 0.075),
      0 2px 2px hsl(0deg 33% 99% / 0.075),
      0 2px 2px hsl(0deg 33% 99% / 0.075),
      0 2px 2px hsl(0deg 33% 99% / 0.075)
   

}
    #turn{
height:2vh;
width:5vw;
background-color:white;
color:black;
    }
    #joe{width:75%;
      height:50%;
      margin-top:0.5vh;margin-left:0vw;
      background-color:rgba(225,225,255,0);
border:0.5px white solid;
border-radius:5px;
color:white;


    }
#sendie{
width:65%;
height:3.5vh;
border:0px white solid;
border-radius:3px;
box-shadow:1px 1px 1px black;
margin-left:0%;
background-color:rgba(225,225,225,0.5);
color:white;
font-family: 'Rajdhani', sans-serif;
font-weight:bolder

}
#anime{background-color:white;
  animation: animatiing 100s infinite;color:black;
  display: inline-block;
    position: relative;width:max-content;height: min-content;
    
    background-color:white; top:53vh;
    overflow-y: hidden;
    
    overflow-x: hidden;font-family: 'Rajdhani', sans-serif;
    font-weight:bolder;
    font-size:20px;text-align: left;margin-left:0px;
}@keyframes animatiing{
  from{margin-left:0px;}
  to{margin-left:-1000px;}
}

#peace{width:50px;height:30px;font-size:'Rajdhani';margin-left:0px;border-radius:5px;border:0px black solid;}
</style>
<style>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap');
</style>