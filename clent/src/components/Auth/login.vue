<template>
  <div>
    <div class="form-group">
      <label>login</label>
      <input type="text" v-model="user.email">
    </div>
    <div class="form-group">
      <label>Password</label>
      <input type="text" v-model="user.password">
    </div>
    <button @click="login">login</button>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      user: {
        email:'' ,
        password:''
      }
    }
  },
  methods: {
    login() {
      this.axios
        .post('http://127.0.0.1:8000/api/auth/login', this.user)
        .then((res) => {
          const token = res.data.access_token;
          const user = res.data.user;

          localStorage.setItem('token', JSON.stringify(token))
          localStorage.setItem('user', JSON.stringify(user))

          this.$store.commit("setUser",user)
        });
    }
  }
}
</script>

<style scoped>

</style>
