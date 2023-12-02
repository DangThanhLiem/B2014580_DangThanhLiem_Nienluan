<!-- eslint-disable no-empty -->
<template>
  <div class="product-info">
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h3 class="display-5">Product Information</h3>
      <router-link to="/product">Back</router-link>
    </div>

    <div class="container">
      <form @submit.prevent="save()">
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label">Product name</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" v-model="product.title" @blur="validate()"
              v-bind:class="{ 'is-invalid': errors.title }" />
            <div class="invalid-feedback" v-if="errors.title">{{ errors.title }}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label">Product brand</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" v-model="product.brand" @blur="validate()"
              v-bind:class="{ 'is-invalid': errors.brand }" />
            <div class="invalid-feedback" v-if="errors.brand">{{ errors.brand }}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label">Product price</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" v-model="product.price" @blur="validate()"
              v-bind:class="{ 'is-invalid': errors.price }" />
            <div class="invalid-feedback" v-if="errors.price">{{ errors.price }}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label">Product quantity</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" v-model="product.quantity" @blur="validate()"
              v-bind:class="{ 'is-invalid': errors.quantity }" />
            <div class="invalid-feedback" v-if="errors.quantity">{{ errors.quantity }}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label">Product description</label>
          <div class="col-sm-9">
            <textarea class="form-control" rows="3" v-model="product.description" @blur="validate()"
              v-bind:class="{ 'is-invalid': errors.description }"></textarea>
            <!-- <div class="invalid-feedback" v-if="errors.description">{{ errors.description }}</div> -->
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label"></label>
          <div class="col-sm-9 text-left">
            <button type="submit" class="btn btn-primary">Save</button> &nbsp;
            <button type="reset" class="btn btn-danger">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductForm',
  data() {
    return {
      errors: {
        title: '',
        brand: '',
        price: '',
        quantity: '',
        description: ''
      },
      product: {
        title: '',
        brand: '',
        price: '',
        quantity: '',
        description: ''
      }
    }
  },
  methods: {
    validate() {
      let isValid = true

      this.errors = {
        title: '',
        brand: '',
        price: '',
        quantity: '',
        description: ''
      }
      if (!this.product.title) {
        this.errors.title = 'Product name is required'
        isValid = false
      }
      if (!this.product.brand) {
        this.errors.brand = 'Product brand is required'
        isValid = false
      }
      if (!this.product.price) {
        this.errors.price = 'Product price is required'
        isValid = false
      } else if (this.isNumber(this.product.price)) {
        this.errors.price = 'Product price must be number'
        // eslint-disable-next-line no-unused-vars
        isValid = false
      }
      if (!this.product.quantity) {
        this.errors.quantity = 'Product quantity is required'
        isValid = false
      }

      // if (!this.product.description) {
      //   this.errors.description = 'Description name is required'
      //   isValid = false
      // }
      return isValid
    },
    isNumber(value) {
      return /^d*S/.test(value)
    },
    save() {
      if (this.validate()) {
        this.axios.post('http://localhost:5000/api/product', this.product).then(res => {
          if(res.data.success){
            this.$router.push({name:'product.List'})
            return 
          }
          alert('Something went wrong')
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
}
</script>

