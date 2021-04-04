<template>
  <div id="app">
    <form action="">
      {{CORS}}
      <input type="text" v-model="setProduct.name" placeholder="name">
      <input type="text" v-model="setProduct.price" placeholder="price">
      <input type="text" v-model="setProduct.count" placeholder="count">
      <input type="text" v-model="setProduct.views" placeholder="views">
      <input type="text" v-model="setProduct.description" placeholder="description">
      <button type="submit" @click="setProducts">save</button>
    </form>
    <div v-for="product in products">
      <p>name: {{product.name}}</p>
      <p>price: {{product.price}}</p>
      <p>count: {{product.count}}</p>
      <p>views: {{product.views}}</p>
      <p>description: {{product.description}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
  data() {
    return {
      products: {},
      setProduct: {}
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
      console.log(this.setProduct);
      axios
        .post('http://127.0.0.1:8000/api/products' , this.setProduct)
        .then(response => (this.products = response.data));
    }
  }
}
</script>

<style>

</style>
