<template>
  <div>
    <div class="form-group">
      <input type="text" v-model="user.name">
    </div>
    <div class="form-group">

      <input type="text" v-model="user.surname">
    </div>
    <div class="form-group">

      <input type="text" v-model="user.email">
    </div>
    <div class="form-group">

      <input type="text" v-model="user.password">
    </div>
    <button @click="register">save</button>
  </div>
</template>

<script>

export default {
  name: "Register",
  data() {
    return {
      user: {
        name: "",

        surname: "",
        email:'' ,
        password:''

      }
    }
  },
  methods: {
    register() {
      this.axios
        .post('http://127.0.0.1:8000/api/auth/signup', this.user)
        .then((res) => {
          this.$router.push({name : 'login'})
        });
    }
  }
}
</script>

<style scoped>

</style>
