<template>
  <div>
    <ul>
      <li>
        <router-link :to="{name: 'login'}">login</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Register'}">Register</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Profile'}">Profile</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "User"
}
</script>

<style scoped>

</style>
