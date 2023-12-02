const { response, query } = require('express')
const Product = require('../models/product')
const asyncHandler = require('express-async-handler')
const { Query } = require('mongoose')
const slugify = require('slugify')
const product = require('../models/product')

// Controller để tạo mới sản phẩm
const createProduct = asyncHandler(async(req,res)=>{
    if(Object.keys(req.body).length===0) throw new Error ('Missing inputs')
    if(req.body && req.body.title) req.body.slug = slugify(req.body.title)
    const newProduct = await Product.create(req.body)
    return res.status(200).json({
        success: newProduct ?true :false,
        createProduct: newProduct? newProduct : 'Cannot create new product'
    })
})
// Controller để lấy thông tin của một sản phẩm
const getProduct = asyncHandler(async(req,res)=>{
    const {pid} = req.params
    const product = await Product.findById(pid)
    return res.status(200).json({
        success: product ?true :false,
        productData: product? product : 'Cannot get product'
    })
})
// Controller để lấy danh sách tất cả sản phẩm
const getAllProduct = asyncHandler(async(req,res)=>{
    const product = await Product.find()
    return res.status(200).json({
        success: product ?true :false,
        productData: product? product : 'Cannot get product'
    })
})
// Controller để cập nhật thông tin của một sản phẩm
const updateProduct = asyncHandler(async(req,res)=>{
    const {pid} = req.params
    if(req.body &&req.body.title) req.body.slug = slugify(req.body.title)
    const updatedProduct = await Product.findByIdAndUpdate(pid,req.body,{new:true})
    return res.status(200).json({
        success: updatedProduct ?true :false,
        updateProduct: updatedProduct? updatedProduct : 'Cannot update product'
    })
})
// Controller để xóa một sản phẩm
const deleteProduct = asyncHandler(async(req,res)=>{
    const {pid} = req.params
    if(req.body &&req.body.title) req.body.slug = slugify(req.body.title)
    const deletedProduct = await Product.findByIdAndDelete(pid,req.body,{new:true})
    return res.status(200).json({
        success: deletedProduct ?true :false,
        deletedProduct: deletedProduct? deletedProduct : 'Cannot delete product'
    })
})
// Controller để tải lên hình ảnh cho sản phẩm
const uploadImagesProduct = asyncHandler(async(req,res)=>{
    const {pid} = req.params
    if(!req.files) throw new Error('Missing inputs')
    const response = await Product.findByIdAndUpdate(pid,{$push:{images:{$each: req.files.map(el =>el.path)}}},{new:true})
    return res.status(200).json({
        status : response ?true :false,
        updatedProduct: response ? response: 'Cannot upload images product'
    })
})


module.exports ={
    createProduct,
    getProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
    uploadImagesProduct
}