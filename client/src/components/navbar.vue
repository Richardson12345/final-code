<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link"  >Home <span class="sr-only">(current)</span></a>
            </li>
             <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categories
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <p class="dropdown-item" >fable</p> 
                <p class="dropdown-item" >mist</p>
                <p class="dropdown-item" >funny</p>
                <!-- <a class="dropdown-item" href="#">Another action</a> -->
              </div>
            </li>
            <li v-if="admin == true">
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <button class="btn btn-outline-primary my-2 my-md-0" @click="logout()">log-out</button>
              <button class="btn btn-outline-primary my-2 my-md-0" @click="login()">login</button>
            </form>
        </div>
    </nav> 
</template> 

<script>
export default {
methods: {
    data(){
        return{
            category: ['fable', 'mist', 'funny']
        }
    },
    logout(){
        localStorage.clear()
    },
    login(){
        this.$router.push('/login')
    },
    filter(data){
        alert(data)
    }
}

    
}
</script>
