const userRouter = require('./user')
const productRouter = require('./product')
const brandRouter = require('./brand')
const couponRouter = require('./coupon')
const orderRouter = require('./order')
const productCategoryRouter =require('./productCategory')
const {notFound,errHandler} = require('../middlewares/errHandler')


const initRouters = (app) =>{
    app.use('/api/user',userRouter)
    app.use('/api/product',productRouter)
    app.use('/api/productcategory',productCategoryRouter)
    app.use('/api/brand',brandRouter)
    app.use('/api/coupon',couponRouter)
    app.use('/api/order',orderRouter)


    app.use(notFound)
    app.use(errHandler)
}

module.exports = initRouters