<template>
  <div>
    <div class="form-group">
      <input type="text" v-model="user.email">
    </div>
    <div class="form-group">
      <input type="text" v-model="user.password">
    </div>
    <button @click=""></button>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      user: {
        name: "",
        surname: "",
        email:'' ,
        password:''

      }
    }
  }
}
</script>

<style scoped>

</style>
