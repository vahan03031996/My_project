<template>
  <div id="app">
    <div v-for="product in products">
      <p>name: {{product.name}}</p>
      <p>name: {{product.price}}</p>
      <p>name: {{product.count}}</p>
      <p>name: {{product.views}}</p>
      <p>name: {{product.description}}</p>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    getProducts(){

    }
  }
}
</script>

<style>

</style>
