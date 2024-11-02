const {readData, writeData} = require('../models/productModel');
const { sendResponse } = require('../utils/responseHandler');

//Create Products

async function createProduct(req, res) {
    try {
        const {name, price, size } = req.body;
        const products = await readData();
        const id = products.length ? products[products.length - 1].id + 1 : 1;
        const newProduct = {id, name, price, size}

        products.push(newProduct);
        await writeData(products);

        sendResponse(res, 201, 'Product created successfully', newProduct);
    } catch (err) {
        sendResponse(res, 500, 'An error occured');
        console.log(err)
    }
}


//Get all items

async function getProducts(req, res) {
    try {
        const products = await readData();
        sendResponse(res, 200, 'Products fetched successfully', products);
    }catch{
        sendResponse(res, 500, 'An error occured');
        console.log(err)
    }
}


//Get one product
 async function getProduct(req, res) {
    try {
      const id = parseInt(req.url.split('/')[2]);
      const products = await readData();
      const product = products.find((item)=>
       (item.id === parseInt(id)))
      if(!product) return sendResponse(res, 404, 'Product not found');

      sendResponse(res, 200, 'Product fetched successfully', product);
    } catch (err) {
        sendResponse(res, 500, 'An error occured');
        console.log(err)
    }
 }


 async function updateProduct(req, res) {
    try {
        const id = parseInt(req.url.split('/')[2]);
        console.log("this is the input data " + id)
        const {name, price, size } = req.body;
        const products = await readData();
        const product = products.find((item) => item.id === parseInt(id));
        if(!product) return sendResponse(res, 404, 'Product not found');

        product.name = name || product.name;
        product.price = price || product.price;
        product.size = size || product.size;

        await writeData(products);

        sendResponse(res, 200, 'Product updated successfully', product);
    } catch (err) {
        sendResponse(res, 500, 'An error occured');
        console.log(err)
    }
 }

 async function deleteProduct(req, res) {
    try {
        const id = parseInt(req.url.split('/')[2]);
        const products = await readData();
        console.log(products)
        const newProducts = products.filter(product => product.id !== parseInt(id));
        if (products.length === newProducts.length) return sendResponse(res, 404, 'Product not found');

        await writeData(newProducts);
        sendResponse(res, 200, 'Item deleted successfully')
    } catch (err) {
        sendResponse(res, 500, 'An error occured');
        console.log(err)
    }
 }

 module.exports = {
        createProduct,
        getProducts,
        getProduct,
        updateProduct,
        deleteProduct
 }