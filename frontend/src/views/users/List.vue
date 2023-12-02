<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="product-list">
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h2 class="display-4">User Management</h2>
      <router-link to="/user/create">Add new</router-link>
    </div>

    <div class="container">
      <div class="card-deck mb-3 text-center">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: null
    };
  },
  mounted() {
    // Gọi phương thức lấy thông tin người dùng khi component được tải
    this.getUser();
  },
  methods: {
    getUser() {
      axios.get('/api/user/current') // Đường dẫn API để lấy thông tin người dùng
        .then(response => {
          this.user = response.data.rs; // Gán thông tin người dùng vào biến user
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>