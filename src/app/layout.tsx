import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
// import MyApp from './_app';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { StoreProvider } from '@/store/StoreProvider';



const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] })

export const metadata: Metadata = {
  title: "Pizza Ordering App",
  description: "The best pizza ordering app",
}

export default function RootLayout({
  children,
}: {
    children: React.ReactNode
}) {
    return (
      <html lang="en">
        <body className={roboto.className}>
          <StoreProvider>
            <Navbar/>
            {children}
            <Footer/>
            <ToastContainer position="bottom-right" theme="dark" autoClose={3000}/>
          </StoreProvider>
          
        
            
        </body>
      </html>
    )
}
