import dbConnect from "@/app/lib/dbConnect"
import Product from "@/app/models/Product"
import { NextResponse } from 'next/server';



await dbConnect()

export async function GET(req, {params}) {
    try {
        const {id} = params;
        // if (!id) return new NextResponse('.', { status: 400 })
        const product = await Product.findById(id);

        if (!product) {
            return NextResponse.json(
                {message: "Post not found"}, 
                {status: 404}
            )
        }

        return NextResponse.json(product)

    } catch(err) {
        return NextResponse.json({message: "Error message", err}, {status: 500})
    }
    
}