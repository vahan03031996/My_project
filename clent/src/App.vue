<template>
  <div id="app">
    <Menu/>
<router-view/>
  </div>
</template>

<script>

import Menu from "./components/globals/Menu"

export default {

  name: 'App',
  components: {
    Menu
  },
  data() {
    return {
      products: [],
      setProduct: {

      }
    }
  },

}
</script>

<style>

</style>
