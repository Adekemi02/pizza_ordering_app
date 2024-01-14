

// interface ProductPageProps {
//   params: string; 
// }


export default async function getPizza({params}) {
  
  const res = await fetch(`http://localhost:3000/api/productPage/${params}`)

  if (!res.ok) {
    throw new Error('Could not fetch data')
  }

  pizzaData = await res.json()

  return pizzaData
}