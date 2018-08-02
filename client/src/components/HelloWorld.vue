<template>
  <div class="homepage">
    <div class="container">
      <div class="jumobotron">
         <h1>{{ msg }}</h1>
         <div v-for="(post, key) in article"
           v-bind:key="key">
           <div class="card w-100">    
             <h5 class="card-header"> <strong>asked by:</strong> {{post.author.username}} 
             <strong>category: {{ ...post.category}}  </strong>  </h5>
             <div class="card-body">
               <p>{{post.content}}</p>
             </div>
             <button class="btn btn-primary" @click="go(post._id)">go to thread</button>
           </div>
           <br>
         </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    ...mapState([
      'article'
    ])
  },
  methods: {
    ...mapActions([
      'getArticle'
    ]),
    go(id){
      this.$router.push(`/post/${id}`)
    }
  },
  mounted(){
    this.getArticle()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
