const Product = require('../model/Product')
const User = require('../model/User')
const Cart = require('../model/Cart')


const products_all = async(req,res)=>{
    try{
        const products = await Product.find()
        console.log('Data sent')
        res.json(products)
    }
    catch(error){
        console.log('Fetch Error :- ',error)
        res.json({'message':error})
    }
}

const cart_all = async(req,res)=>{
    try{
        const cart = await Cart.find()
        console.log('Data sent')
        res.json(cart)
    }
    catch(error){
        console.log('Fetch Error :- ',error)
        res.json({'message':error})
    }
}

const user_all = async(req,res)=>{
    try{
        const users = await User.find()
        console.log('Data sent')
        res.json(users)
    }
    catch(error){
        console.log('Fetch Error :- ',error)
        res.json({'message':error})
    }
}

const fetch_cart = async(req,res)=>{
    try{
        let u_name=req.body.u_name
        const cart = await Cart.findOne({u_name})
        console.log('Data Sent')
        res.json(cart)
    }
    catch(error){
        console.log('Fetch Error :- ',error)
        res.json({'message':error})
    }
}

const authentication = async (req, res) => {
    let u_name = req.body.u_name
	let u_pwd = req.body.u_pwd
	let obj = { u_name, u_pwd }
    try {
        // Find the user with matching credentials
        const user = await User.findOne(obj);
        if (user) {
            res.json({ 'auth': 'success', 'user': u_name });
        } else {
            res.json({ 'auth': 'failed' });
        }
        console.log('Auth response sent');
    } catch (err) {
        console.log('Error in querying database for Auth: ', err);
        res.status(500).send('Internal Server Error');
    }
};
const insert_product = async(req,res)=>{
    const product = new Product({
        p_id:req.body.p_id,
        p_name:req.body.p_name,
        p_cost:req.body.p_cost,
        p_cat:req.body.p_cat,
        p_desc:req.body.p_desc,
        p_image:req.body.p_image
    })
    try{
        const savedProduct = await product.save()
        console.log('Product Inserted')
        res.send(savedProduct) 
    }
    catch(error){
        res.status(400).send(error)
    }
}

const insert_user = async(req,res)=>{
    const user = new User({
        u_id: req.body.u_id,
    	u_name: req.body.u_name,
    	u_pwd: req.body.u_pwd,
    	u_u_email: req.body.u_u_email,
    	u_addr: req.body.u_addr,
    	u_u_contact: req.body.u_u_contact

    })
    try{
        const savedUser = await user.save()
        console.log('User Inserted')
        res.send(savedUser) 
    }
    catch(error){
        res.status(400).send(error)
    }
}

const insert_cart = async(req,res)=>{
    const cart = new Cart({
        p_id: req.body.p_id,
        p_img: req.body.p_img,
        p_cost: req.body.p_cost,
        u_name: req.body.u_name
    })
    try{
        const savedCart = await cart.save()
        console.log('Cart Inserted')
        res.send(savedCart) 
    }
    catch(error){
        res.status(400).send(error)
    }
}

const update_user = async(req,res)=>{
    let u_id = req.body.u_id
    const user = {
        u_id:req.body.u_id,
        u_name:req.body.u_name,
        u_pwd:req.body.u_pwd,
        u_u_email:req.body.u_u_email,
        u_addr:req.body.u_addr,
        u_u_contact:req.body.u_u_contact
    }
    try{
        const updateUser = await User.updateOne({u_id},user)
        if(updateUser.modifiedCount>0){
            console.log("User Updated")
            res.json({'Update User':'Success'})
        }
        else{
            console.log("User Not Updated")
            res.json({'Update User':'Not Found'})
        }
    }
    catch(error){
        res.status(400).send(error)
    }
}

const update_cart = async (req, res) => {
    let u_name = req.body.u_name;
    const cart = {
      p_id: req.body.p_id,
      u_name: req.body.u_name,
      p_cost: req.body.p_cost,
      p_img: req.body.p_img
    };
    try {
      const updatedCart = await Cart.updateOne({u_name},cart);
      if (updatedCart.modifiedCount != 0) {
        console.log("Cart Updated")
        res.json({'Update Cart':'Success'})
      } else {
        console.log("Cart Not Updated")
            res.json({'Update Cart':'Not Found'})
      }
    } catch (error) {
      res.status(400).send(error);
    }
  };
  

const delete_user = async(req,res)=>{
    let u_id=req.body.u_id
    try{
        const deletedUser = await User.deleteOne({u_id})
        if(deletedUser.deletedCount>0){
            console.log("User Deleted")
            res.json({'Delete User':'Success'})
        }
        else{
            console.log("User Not Fpund")
            res.json({'Delete User':'User not Found'})
        }
    }
    catch(error){
        res.status(400).send(error)
    }
}

const delete_cart = async(req,res)=>{
    let u_name=req.body.u_name
    try{
        const deletedCart = await Cart.deleteOne({u_name})
        if(deletedCart.deletedCount>0){
            console.log("Cart Deleted")
            res.json({'Delete Cart':'Success'})
        }
        else{
            console.log("Cart Not Found")
            res.json({'Delete Cart':'Cart not Found'})
        }
    }
    catch(error){
        res.status(400).send(error)
    }
}

const delete_product = async(req,res)=>{
    let p_id=req.body.p_id
    try{
        const deletedProduct = await Product.deleteOne({p_id})
        if(deletedProduct.deletedCount>0){
            console.log("Product Deleted")
            res.json({'Delete Product':'Success'})
        }
        else{
            console.log("Product Not Fpund")
            res.json({'Delete Product':'Product not Found'})
        }
    }
    catch(error){
        res.status(400).send(error)
    }
}

const update_product = async(req,res)=>{
    let p_id = req.body.p_id
    const product = {
        p_id:req.body.p_id,
        p_name:req.body.p_name,
        p_cost:req.body.p_cost,
        p_cat:req.body.p_cat,
        p_desc:req.body.p_desc,
        p_image:req.body.p_image
    }
    try{
        const updateProduct = await Product.updateOne({p_id},product)
        if(updateProduct.modifiedCount>0){
            console.log("Product Updated")
            res.json({'Update Product':'Success'})
        }
        else{
            console.log("Product Not Updated")
            res.json({'Update Product':'Not Found'})
        }
    }
    catch(error){
        res.status(400).send(error)
    }
}



module.exports = {
    authentication,
    products_all,
    insert_product,
    update_product,
    delete_product,
    user_all,
    insert_user,
    update_user,
    delete_user,
    fetch_cart,
    insert_cart,
    update_cart,
    delete_cart,
    cart_all
}