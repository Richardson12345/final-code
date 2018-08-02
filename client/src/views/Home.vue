<template>
  <div class="home">
    <navbar/>
    <HelloWorld msg="WELLCOME TO MY BLOG"/>
     <h3> ADD A NEW ARTIClE :</h3>
         <br>
         <h4>Input category: </h4>
         <input  v-model="category" class="input-group mb-3" type="text"  placeholder="category">
         <h4>Input type :</h4>
         <input  v-model="type" class="input-group mb-3" type="text"  placeholder="type">
         <h4>Input content :</h4>
         <input  v-model="content" class="input-group mb-3" type="text"  placeholder="content">
         <!-- <input  v-model="author" class="input-group mb-3" type="text"  placeholder="author"> -->
         <button @click="submitArticle(category, type, content)" type="button" class="btn btn-outline-primary">submit article</button>
         <br>
    <div class="row">
      <div class= "col col-md-12">
      </div>
    </div>

  </div>
</template>

<script>

import navbar from '@/components/navbar.vue'
import { mapActions } from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'
import post from '@/components/addNew.vue'

export default {
  name: 'home',
  data(){
    return{
      category: '',
      type: '',
      content: ''
    }
  },
  components: {
    HelloWorld,
    navbar
  },
  methods: {
    ...mapActions([
      'addArticle'
    ]),
    submitArticle(category, type, content){
      let articleObj = {
        category,
        type,
        content,
        author: localStorage.getItem("id")
      }
      console.log(articleObj)
      this.addArticle(articleObj)
    }
  }
}
</script>
