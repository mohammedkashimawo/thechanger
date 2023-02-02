<template>
  <div id="app">
    <div id="div1">

      <div id="div1a">
        <span class="spanA">I am Mohammed Ikechukwu Olamide</span>
      </div>
    
    </div>


    <exchangeWidget></exchangeWidget>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return{
      abod:"./first.css"//i used this to make the importation of my css dynamic for both dark and light mode
    }
  },
  components: {
  //  HelloWorld
  }
}
</script>

<style scoped>

@import "{{abod}}";

</style>
