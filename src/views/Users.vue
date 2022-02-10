<template>
  <div class="about">
    <h1>This is an Users</h1>
    <div v-for="user in users" :key="user.id">
      <p>- <router-link :to="'/user/'+user.login.username">{{user.name.first}} {{user.name.last}}</router-link></p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: 'User',
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async load(number) {
      const data = await axios.get(`https://randomuser.me/api/?results=${number}`);
      this.users = data.data.results;
    },
  },
  beforeMount() {
    this.load(6);
  },
}
</script>
