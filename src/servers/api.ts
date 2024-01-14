


export interface Order {
  _id: string;
  customer: string;
  address: string;
  total: number;
  method: number;
  status: number;
}

export interface Product {
    _id: string;
    title: string;
    desc: string;
    img: string;
    prices: [number];
    extraOptions: [{
        id: string
        text: string;
        price: number
    }]
}


export const getAdminData = async (): Promise<{ orders: Order[]; products: Product[] }> => {
  try {
    const [ordersRes, productsRes]: Response[] = await Promise.all([
      
      fetch('http://localhost:3000/api/products'),
      fetch('http://localhost:3000/api/orders'),
    ]);

    const [orders, products] = await Promise.all([ordersRes.json(), productsRes.json()]);

    if (!orders || !products) {
      throw new Error('Failed to fetch data');
    }

    return {
      orders,
      products,
    };
  } catch (error) {
    throw new Error("Error fetching data");
  }
};