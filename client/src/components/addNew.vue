<template>
    <div class="addQuestions">
        <wysiwyg v-model="questionHtml" />
        <button type="button" @click="uploadThread(questionHtml)" class="btn btn-primary btn-lg btn-block"><strong>submit thread</strong></button>
    </div>
</template>


<script>

import { mapState, mapActions } from 'vuex'

export default {
    data(){
        return {
            questionHtml: ''
        }
    },
    methods: {
        uploadThread(input){
            
        }
    }
    
}
</script>

<style>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>