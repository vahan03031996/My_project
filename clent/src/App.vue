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
  mounted() {
    this.getProducts()
  },
  methods: {
    getProducts() {
      axios
        .get('http://127.0.0.1:8000/api/products')
        .then(response => (this.products = response.data));
    },
    setProducts() {
      axios
        .post('http://127.0.0.1:8000/api/products' , this.setProduct)
        .then(response => (this.products = response.data));
    }
  }
}
</script>

<style>

</style>
