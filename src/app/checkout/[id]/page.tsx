import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Order.module.css'



const checkoutPage = () => {
  const status = 0;

  const statusClass = (index: number) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  }

  return (
    <div className="flex px-4 mt-11">
      <div className="flex-[2]">
        <div>
          <table className="w-full">
            <thead className="border-b border-b-gray-200">
              <tr className="text-left">
                  <th className="mb-2 py-2">Order ID</th>
                  <th className="mb-2 py-2">Customer</th>
                  <th className="mb-2 py-2">Address</th>
                  <th className="mb-2 py-2">Total</th>
              </tr>
            </thead>       
                
            <tbody className="border-b border-b-gray-200">
            
              <tr className="align-top" >
                <td className="py-2"> 1298378192376e2tr4567 </td>
                <td className=" py-2"> 08162648391 </td>
                <td className=" py-2"> 10 John street </td>
                <td className=" py-2">$160</td>
              </tr>
            </tbody> 
                                                    
          </table>  
        </div>

        <div className="w-[80%] flex justify-between m-auto mt-8">
          <div className={statusClass(0)}>
            <Image src="/images/payment.png" 
              alt="" 
              width={40} 
              height={40} 
            />
            <span> Payment </span>
            <div className={styles.checkedIcon}>
              <Image 
                src="/images/checked.png" 
                alt="" width={20} 
                height={20}
                className={styles.checkedIcon} 
              />
            </div>
          </div>

          <div className={statusClass(1)}>
            <Image src="/images/preparing.png" alt="" width={40} height={40} />
            <span> Preparing </span>

            <div className={styles.checkedIcon}>
              <Image 
                src="/images/checked.png" 
                alt="" 
                width={20} 
                height={20}
                className={styles.checkedIcon}
              />
            </div>
          </div>

          <div className={statusClass(2)}>
            <Image src="/images/bike-delivery.png" alt="" width={40} height={40} />
            <span> On the way </span>

            <div className={styles.checkedIcon}>
              <Image
                src="/images/checked.png" 
                alt="" 
                width={20} 
                height={20} 
                className={styles.checkedIcon}
              />
            </div>
          </div>

          <div className={statusClass(3)}>
            <Image src="/images/pizza-deliver.png" alt="" width={40} height={40} />
            <span> On the way </span>

            <div className={styles.checkedIcon}>
              <Image 
                src="/images/checked.png" 
                alt="" 
                width={20} 
                height={20} 
                className={styles.checkedIcon}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className=" flex-1 text-white">
        <div className="w-[90%] max-h-[400px] bg-gray-800 flex flex-col justify-between mt-2 px-12 pt-3 pb-12">
          <h1 className="uppercase text-white font-semibold text-xl mb-2 "> Cart Total </h1>
          <div>
            <span className="font-semibold mr-2"> Subtotal: </span> 
            <span> $160 </span>
          </div>

          <div>
            <span className="font-semibold mr-2"> Discount: </span> 
            <span> $79.60 </span>
          </div>

          <div>
            <span className="font-semibold mr-2">Total: </span>
            <span> $160 </span>
          </div>

          <button type="submit" className="mt-10 bg-goldenyellow cursor-not-allowed font-bold p-2 uppercase rounded-full"> Paid </button>
        
        </div>          
      </div>
    </div>
  )
}

export default checkoutPage