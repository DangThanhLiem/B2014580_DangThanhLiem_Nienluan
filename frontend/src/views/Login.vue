<!-- eslint-disable vue/multi-word-component-names -->
<template>

  <div class="row">
    <div class="col-sm-4">
      <h2 align="center">Login</h2>
      <form @submit.prevent="saveData">
    <div class="form-group" align="left">
      <label for="inputEmail">Email</label>
      <input type="email" class="form-control" id="inputEmail" placeholder="Email">
    </div>
    <div class="form-group" >
      <label for="inputPassword">Password</label>
      <input type="password" class="form-control" id="inputPassword" placeholder="Password">
    </div>
    <div class="form-group">
      <label class="form-check-label"><input type="checkbox"> Remember me</label>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
    </div>
  </div>
  
</template>
  
<script>
export default {
  // name: 'Login',
  data() {
    return {
      admin: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
   login(){
    this.axios.get('http://localhost:5000/api/user/login').then(res => {
        console.log('ok')
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
};
</script>