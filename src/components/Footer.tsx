import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faPinterestP } from '@fortawesome/free-brands-svg-icons/faPinterestP'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
      <div className="bg-yellow-50 h-96 w-full gap-6 py-3 flex items-end justify-start ">
        <div className="flex w-full px-4" style={{marginBottom: "25px"}}>
          <div className="flex flex-1 flex-col gap-6">
            <h2 className="font-bold uppercase"> Information </h2>
            <Link href="/"> Home </Link>
            <Link href="/blog"> Blog </Link>
            <Link href="/about"> About Us </Link>
            <Link href="/menu"> Menu </Link>
            <Link href="/contact"> Contact Us </Link>
          </div>

          <div className="flex flex-1 gap-6 flex-col">
            <h2 className="font-bold uppercase"> Top items </h2>
              <Link href="/menu/1"> Pepperoni </Link>
              <Link href="/menu/2"> Swiss Mushroom </Link>
              <Link href="/menu/3"> Barbeque Chicken </Link>
              <Link href="/menu/4"> Vegetarian </Link>
              <Link href="/menu/5"> Ham & Cheese </Link>       
          </div>

          <div className="flex flex-1 gap-6 flex-col">
            <h2 className="font-bold uppercase"> Others </h2>
            <Link href="/checkout"> Checkout </Link>
            <Link href="/cart"> Cart </Link>
            <Link href="/product"> Product </Link>
            <Link href="/location"> Location </Link>
            <Link href="/legal"> Legal </Link>
          </div>

          <div className="flex flex-1 gap-8 flex-col">
            <h2 className="font-bold uppercase"> Social media </h2>

            <div className="flex flex-row gap-4">
              <div className="bg-blue-900 h-9 w-9 flex items-center justify-center">
                <FontAwesomeIcon icon={faFacebookF} className="text-white w-5 h-5" />
              </div>

              <div className="bg-shinyred flex items-center justify-center h-9 w-9">
                <FontAwesomeIcon icon={faPinterestP} className="text-white w-5 h-5 " />
              </div>

              <div className="bg-cyan-500 flex items-center justify-center w-9 h-9">
                <FontAwesomeIcon icon={faTwitter} className="text-white w-5 h-5" />
              </div>

              <div className="bg-orange-600 flex items-center justify-center w-9 h-9">
                <FontAwesomeIcon icon={faInstagram} className="text-white w-5 h-5" />
              </div>
            </div>

            <p> Signup and get exclusive offers and coupon codes </p>

            <button className="bg-goldenyellow hover:bg-red-500 transition-all duration-300 text-white font-bold w-24 p-2 rounded-full uppercase"> Sign up </button>
          </div>
        </div>
      </div>
  )
}

export default Footer