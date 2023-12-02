const asyncHandler = require('express-async-handler')
const Order = require('../models/order')
const Customer= require('../models/customer')

const createOrder = asyncHandler(async(req,res)=>{
    const { customerId } = req.body; 
  const customerCart = await Customer.findById(customerId)
    .select('cart')
    .populate('cart.product', 'title price');
  const products = customerCart?.cart?.map(el => ({
    product: el.product._id,
    count: el.quantity,
  }));
  let total = customerCart?.cart?.reduce(
    (sum, el) => el.product.price * el.quantity + sum,
    0
  );
  const createData = { products, total, orderBy: customerId };
  const order = await Order.create(createData);
  await order.save();
  return res.json({
    success: order ? true : false,
    order: order ? order : 'Something went wrong',
  });
});
const updateStatus = asyncHandler(async(req,res)=>{
    const {oid} = req.params
    const {status} =req.body
    if(!status) throw new Error ('Missing status')
    const response = await Order.findByIdAndUpdate(oid,{status},{new:true})
    return res.json({
        success:response ? true :false,
        updated: response? response:'Cannot update Status'
    })
})
const getCustomerOrder = asyncHandler(async(req,res)=>{
    const { customerId } = req.body; 
    const {status} =req.body
    const response = await Order.find({orderBy:customerId})
    return res.json({
        success:response ? true :false,
        response: response? response:'Cannot get user order'
    })
})
const getOrders = asyncHandler(async(req,res)=>{
    const response = await Order.find()
    return res.json({
        success:response ? true :false,
        response: response? response:'Cannot get orders'
    })
})
module.exports = {
    createOrder,
    updateStatus,
    getCustomerOrder,
    getOrders
}