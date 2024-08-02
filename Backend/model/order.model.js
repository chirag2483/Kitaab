import mongoose, { mongo } from "mongoose";
import Book from "./book.model.js";
import User from "./user.model.js"

const orderSchema = mongoose.Schema({
    customer_id:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:User,
    },
    item_id:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:Book,
    },
    address:{
        type:String,
        require:true,
    },
    city:{
        type:String,
        require:true,
    },
    state:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    deliveryDate:{
        type:String,
        require:true,
    }
});
const Order = mongoose.model("Order", orderSchema);

export default Order;