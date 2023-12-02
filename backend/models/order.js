const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
      },
    products:[{
        product: {type:mongoose.Types.ObjectId,ref:'Product'},
        count:Number,
    }],
    status:{
        type:String,
        default:'Processing',
        enum:['Cancelled','Processing','Succeed']
    },
    total:Number,
    orderBy:{
        type:mongoose.Types.ObjectId,
        ref:'Customer'
    },
});

//Export the model
module.exports = mongoose.model('Order', orderSchema);