const mongoose = require("mongoose")


const MONGO_URL = process.env.MONGODB_URL

if (!MONGO_URL) {
  throw new Error(
    'Please define the MONGO_URL environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export default async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGO_URL, opts).then((mongoose) => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn

}

























// const { MongoClient } = require('mongodb');

// async function main() {
//   const url = 'mongodb://127.0.0.1:27017';
//   const client = new MongoClient(url);

//   try {
//     await client.connect();
//     const productsCollection = client.db('pizza').collection('products');
    

//     // Perform operations on the collections as needed

//   } catch (e) {
//     console.error(e);
//   } finally {
//     await  client.close();
//   }
// }

// main();















// const mongoose = require("mongoose")



// const MONGO_URL = "mongodb+srv://adisabarakatadekemi:OtePBoZcSaDEO4Nx@pizza.szps8rb.mongodb.net/pizza_app"

// if (!MONGO_URL) {
//   throw new Error(
//     'Please define the MONGO_URL environment variable inside .env.local'
//   )
// }

// /**
//  * Global is used here to maintain a cached connection across hot reloads
//  * in development. This prevents connections growing exponentially
//  * during API Route usage.
//  */
// let cached = global.mongoose

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null }
// }



// const db = mongoose.createConnection({
//     host: "localhost",
//     username: "adisabarakatadekemi",
//     password: "OtePBoZcSaDEO4Nx",
    
// });

// const createProductTable = `
// CREATE TABLE IF NOT EXISTS product (
//     id INT NOT NULL AUTO_INCREMENT,
//     title VARCHAR(255),
//     desc VARCHAR(50),
//     img TEXT,
//      VARCHAR(10),
//     callback VARCHAR(10),
//     visitPreference VARCHAR(10),
//     PRIMARY KEY (id)
// );
// `;
// db.query(createProductTable, (err, result) => {
//     if (err) {
//         console.error("Error creating Appointment table", err);
//     } else {
//         console.log("Appointment table created successfully");
//     }
//   })

// module.exports = dbConnect