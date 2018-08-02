import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'

export default new Vuex.Store({
  state: {
    article: '',
    logged: false,
    currentArticle: '',
    logged: false
  },
  mutations: {
    GET_ARTICLE: function(state, articleArr){
      state.article = articleArr;
      console.log(articleArr)
    },
    GET_CURRENT(state, article){
      state.currentArticle = article;
      console.log(state.currentArticle)
    },
    LOGGED: function(state, condition){
      state.logged = condition
    }
  },
  actions: {
    getArticle: function( context){
      axios.get("http://localhost:3000/article/")
      .then((result => {
        let articleArr = result.data;
        context.commit("GET_ARTICLE", articleArr)
      }))
      .catch((err => {
        alert("oops something went wrong")
      }))
    },
    getCurrent: function( context, id ){
      axios.get(`http://localhost:3000/article/one/${id}`)
      .then((result => {
        let article = result.data
        context.commit("GET_CURRENT", article)
      }))
      .catch((err => {
        console.log(err)
        alert("oops something went wrong")
      }))
    },
    loginUser: function(context, credentials ){
      axios.post("http://localhost:3000/users/signin", credentials)
      .then((result => {
        console.log(result.data)
        let token = result.data.token;
        let id = result.data.id
        localStorage.setItem("token", token)
        localStorage.setItem("id", id)
        context.commit("LOGGED", true)
      }))
      .catch((err => {
        console.log(err)
        alert("ooops something went wrong")
      }))
    },
    addArticle: function( context, articleInput ){
      axios.post("http://localhost:3000/article/", articleInput, {
        headers: { token : localStorage.getItem("token")}
      })
      .then((result => {
        console.log(result.data)
        alert("succesdully posted items")
        axios.get("http://localhost:3000/article/")
        .then((result => {
          let articleArr = result.data;
          context.commit("GET_ARTICLE", articleArr)
        }))
        .catch((err => {
          alert("oops something went wrong, you must be logged in")
        }))
      }))
      .catch((err => {
        console.log(err)
        alert("oops something went wrong")
      }))
    }
  }
})
