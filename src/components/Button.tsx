import React from 'react'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = () => {
  return (
    <div>
        <button className="bg-goldenyellow hover:bg-yellow-600 transition-all duration-300 flex gap-2 mt-2 items-center justify-center text-white text-sm font-semibold w-34 py-2 px-4 rounded-full">
            <FontAwesomeIcon icon={faShoppingCart} className="w-4 h-4" />
            ORDER NOW
        </button>
    </div>
  )
}

export default Button