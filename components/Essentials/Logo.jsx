import React from 'react'
import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
    <>
    <Link href={'/'}>
    <Image src='/img/r.svg' width={50} height={54} priority/>
    </Link>
    </>
  )
}

export default Logo