<template>
    <div>
     <div class="container">
      <div class="jumobotron">
           <div class="card w-100">    
             <h5 class="card-header"> <strong>asked by: {{currentArticle.author.username}}</strong>  
             <strong>  category: {{...currentArticle.category}} </strong>  </h5>
             <div class="card-body">
               <p> {{currentArticle.content}}  </p>
             </div>
           </div>
           <br>
      </div>
    </div>
    </div>
    
</template>


<script>
import { mapState, mapActions } from 'vuex'

export default {
    data(){
        return{
            params : this.$route.params.id
        }
    },
    computed: {
        ...mapState([
            'currentArticle'
        ])
    },
    methods: {
        ...mapActions([
            'getCurrent'
        ]),
        getArticle(id){
            this.getCurrent(this.params)
        }
    },
    mounted(){
        this.getArticle()
    }
    
}
</script>


