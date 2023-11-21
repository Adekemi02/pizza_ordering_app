import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SearchIcon = () => {
  return (
    <Link href="/search">
        <div>
            <Image src="/images/search_icon_dark.png" alt="Search" width={20} height={20} />
        </div>
    </Link>
  )
}

export default SearchIcon