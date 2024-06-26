const mongoose = require("mongoose");
const SupplierSchema = new mongoose.Schema({

    sid:{
        type: String,
        required: true,
        unique: true
    },

    name:{
        type: String,
        required: true
    },

    address:{
        type: String,
        required: true
    },

    product:{
        type: String,
        required: true
    },

    amount:{
        type: String,
        required: true
    },

    quantity:{
        type: String,
        required: true
    },

    date:{
        
        type: String,
        required: true
    },

    note:{
        type: String,
        required: true
    },

    totalAmount:{
        type: String,
        required: true
    },
    status:{
        type:String,
        default:"Active"
    },
    InventoryStatus:{
        type:String,
        default:"Not yet"
    },
    PaymentStatus:{
        type:String,
        default:"Not yet"
    }
},{timestamps: true});

module.exports = mongoose.model("Supplier", SupplierSchema)



