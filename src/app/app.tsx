import React from 'react';
import { AppProvider } from '@/components/CartContext';
import { AppProps } from 'next/app';

// Replace YourProductType with the actual type of your product data
type ProductType = {
  // Define the structure of your product data
  id: number;
  name: string;
};

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // Assuming you have some product data, replace it with your actual product data
  const productData: ProductType[] = [
    { id: 1, name: 'Pizza 1' },
    { id: 2, name: 'Pizza 2' },
  ];

  return (
    <AppProvider product={productData}>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
