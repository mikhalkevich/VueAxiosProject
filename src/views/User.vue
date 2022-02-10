<template>
  <div class="about">
    <h1>This is User {{user}}</h1>
  </div>
</template>
<script>

export default {
  name: 'User',
  props: {
    username: {type:String, required: true}
  },
  data(){
    return {
      user: this.$route.params.username
    }
  },
}
</script>
