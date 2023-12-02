const userRouter = require('./user')
const productRouter = require('./product')
const brandRouter = require('./brand')
const orderRouter = require('./order')
const customerRouter = require('./customer')
const productCategoryRouter =require('./productCategory')
const {notFound,errHandler} = require('../middlewares/errHandler')


const initRouters = (app) =>{
    app.use('/api/user',userRouter)
    app.use('/api/product',productRouter)
    app.use('/api/productCategory',productCategoryRouter)
    app.use('/api/brand',brandRouter)
    app.use('/api/order',orderRouter)
    app.use('/api/customer',customerRouter)


    app.use(notFound)
    app.use(errHandler)
}

module.exports = initRouters