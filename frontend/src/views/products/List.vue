<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="product-list">
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h2 class="display-4">Product Management</h2>
      <router-link to="/product/create">Add new</router-link>
    </div>

    <div class="container">
      <div class="card-deck mb-3 text-center">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Brand</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <th scope=" row">{{ product._id }}</th>
              <td>{{ product.title }}</td>
              <td>
              <img v-for="image in product.images" :src="image" width="50" height="50" alt="Product Image">
            </td>
              <td>{{ product.brand }}</td>
              <td>{{ product.price }}</td>
              <td>{{ product.quantity }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style>
.product-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}
</style>
<script>
export default {
  name: 'ProductForm',
  data() {
    return {
      products: []
    }
  },
  created() {
    this.getAll()
  },
  methods: {
    getAll() {
      this.axios.get('http://localhost:5000/api/product').then(res => {
        this.products = res.data.productData
      }).catch(error => {
        if (error.response) {
          // Lỗi từ phía máy chủ
          console.log('Lỗi từ phía máy chủ:', error.response.data);
        } else if (error.request) {
          // Không nhận được phản hồi từ máy chủ
          console.log('Không nhận được phản hồi từ máy chủ:', error.request);
        } else {
          // Lỗi xảy ra trong quá trình gửi yêu cầu
          console.log('Lỗi:', error.message);
        }
      })
    }
  }
}
</script>
