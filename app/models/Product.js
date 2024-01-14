const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 60
  },
  desc: {
    type: String,
    required: true,
    maxLength: 200
  },
  img: {
    type: String,
    required: true,
  },
  prices: {
    type: [Number],
    required: true,
  },
  extraOptions: [
        {
            text: { type: String, required: true },
            price: { type: Number, required: true },
        },
  ],
}, {timestamps:true});

mongoose.models = {}

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema);













// const { MongoClient } = require('mongodb');
// const { Schema } = require('mongoose');
// const { ObjectId } = require('mongodb');



// const ProductSchema = new Schema({
//     _id: new ObjectId(),

//     title: {
//         type: String,
//         required: true,
//         maxLength: 60,
//     },
//     desc: {
//         type: String,
//         required: true,
//         maxLength: 250,
//     },
//     img: {
//         type: String,
//         required: true,
//     },
//     prices: {
//         type: [Number],
//         required: true,
//     },
//     extraOptions: {
//         type: [
//             {
//                 text: { type: String, required: true },
//                 price: { type: Number, required},
//             }
//         ]
//     }
//     }, {timestamps: true}
// );

// async function main() {
//     const url = 'mongodb+srv://adisabarakatadekemi:OtePBoZcSaDEO4Nx@pizza.szps8rb.mongodb.net/pizza_app';
//     const client = new MongoClient(url);

//     try {
//         await client.connect();
//         const db = client.db('pizza_app');
//         const productsCollection = db.collection('products');

//         const productData = await productsCollection.find({ /* Your query here */ }).toArray();

//         productData.forEach(product => {
//             const { title, desc, img, prices, extraOptions } = product;
//             console.log(`Title: ${title}, Description: ${desc}, Image: ${img}`);
//             console.log(`Prices: ${prices.join(', ')}`);
//             console.log('Extra Options:');
            
//             extraOptions.forEach(option => {
//                 console.log(`  ${option.text}: ${option.price}`);
//             });
//             console.log('----------------------');
//         });

//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main();