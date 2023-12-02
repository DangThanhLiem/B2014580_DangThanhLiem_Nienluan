<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="product-info">
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h3 class="display-5">User Information</h3>
      <router-link to="/user">Back</router-link>
    </div>

    <div class="container">
      <form>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label"
            >Product name</label
          >
          <div class="col-sm-9">
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label"
            >Product price</label
          >
          <div class="col-sm-9">
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label"
            >Product description</label
          >
          <div class="col-sm-9">
            <textarea class="form-control" rows="3"></textarea>
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
