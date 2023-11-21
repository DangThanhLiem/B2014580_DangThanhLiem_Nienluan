
const asyncHandler = require('express-async-handler')
const Brand = require('../models/brand')

const createnewBrand = asyncHandler(async(req,res)=>{
    const response = await Brand.create(req.body)
    return res.json({
        success:response ? true :false,
        createdBrand: response? response:'Cannot create new brand'
    })
})
const getBrands = asyncHandler(async(req,res)=>{
    const response = await Brand.find()
    return res.json({
        success:response ? true :false,
        Brands: response? response:'Cannot get brand'
    })
})
const updateBrand = asyncHandler(async(req,res)=>{
    const {bid} = req.params
    const response = await Brand.findByIdAndUpdate(bid,req.body,{new:true})
    return res.json({
        success:response ? true :false,
        UpdateBrand: response? response:'Cannot update brand'
    })
})
const deleteBrand = asyncHandler(async(req,res)=>{
    const {bid} = req.params
    const response = await Brand.findByIdAndDelete(bid)
    return res.json({
        success:response ? true :false,
        DeleteBrand: response? response:'Cannot delete brand'
    })
})

module.exports = {
    createnewBrand,
    getBrands,
    updateBrand,
    deleteBrand
}