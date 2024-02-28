import React from 'react'
import Image from 'next/image'
import Button from './Button'
import Link from "next/link"

const Hero = () => {
  return (
    <section className='relative max-container padding-container xs:py-12 sm:py-28 xs:gap-16 sm:gap-32 gap-0 flex flex-col xl:flex-row'>
      <div className='bg-hero h-screen w-screen xs:right-[5%] xs:top-[45%] sm:right-[5%] xl:top-[4%] xl:right-[-20%]'/>
      
      <div className='relative z-2 flex flex-1 flex-col gap-8 xl:w-2/5'>
        <h1 className='sm:text-7xl xs:text-6xl text-blue-900 font-semibold'>Discover the hidden gems of morocco.</h1>
        <p className='text-black text-opacity-50  text-xl font-semibold'>Go take a look on historical sites near to you.</p>
        <div className='btn-container flex gap-4'>
           <Link href="/auth" >
                <Button type='button' title='Get Started' variant='btn_purple shadow' />
           </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero