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
@import './second.css';
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap');
</style>