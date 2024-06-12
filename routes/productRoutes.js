//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import productAPI
const productApi = require('../APIS/productApis')
//fetch all records
router.get("/fetchP",productApi.products_all)
router.get("/fetchU",productApi.user_all)
router.get("/fetchC",productApi.cart_all)
router.post("/auth",productApi.authentication)
router.get("/fetchCart",productApi.fetch_cart)
router.post("/insertUser",productApi.insert_user)
router.post("/insertProduct",productApi.insert_product)
router.put("/updateUser",productApi.update_user)
router.put("/updateProduct",productApi.update_product)
router.delete("/deleteUser",productApi.delete_user)
router.delete("/deleteProduct",productApi.delete_product)
router.post("/insertCart",productApi.insert_cart)
router.put("/updateCart",productApi.update_cart)
router.delete("/deleteCart",productApi.delete_cart)
module.exports=router