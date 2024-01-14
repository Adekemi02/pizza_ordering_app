import dbConnect from "@/app/lib/dbConnect"
import Product from "@/app/models/Product"
import { NextResponse } from 'next/server';



await dbConnect()


export async function POST(req) {
  const {title, desc, img, prices, extraOptions} = await req.json();
  let newProduct = new Product({
    title, desc, img, prices, extraOptions
  })
  
  await newProduct.save()
  
  return NextResponse.json({mesaage: "Product saved"})
}

export async function GET(req) {
    let product = await Product.find({})
    return NextResponse.json(product)
}








// const {NextResponse} = require("next/server")
// const Product = require("ProductSchema")
// const express = require("express")
// const router = express.Router()



// router.get("/products"), async (req) => {
//     try {
//         const product = await product.find();
//         res.status(200).send({data: product})
        
//         // const mproduct = await Product.create({
//         //     data: body
//         // })
//         // console.log(product)
        
        
//     } catch (err) {
//         console.log(err)
//         res.status(400).send({error: err})
//     }

// } 
