"use client"

import { Dash } from "@/components/dash"
import { Button } from "@/components/ui/button"
import { useUser } from "@clerk/nextjs"


export default function Dashboard(){
    const { user, isLoaded } = useUser();

    return (
        <section className='relative max-container padding-container xs:py-12 sm:py-28 xs:gap-16 sm:gap-32 gap-0 flex flex-col xl:flex-row'>
        <div className='bg-hero h-screen w-screen xs:right-[5%] xs:top-[45%] sm:right-[5%] xl:top-[4%] xl:right-[-20%]'/>
        
        {/* LEFT  */}
        <div className='relative z-2 flex flex-1 flex-col gap-8 xl:w-2/5'>

          <h1 className='sm:text-7xl text- font-semibold'>Hello {isLoaded ? user.firstName : ""}</h1>
          <p className='text-[#191825] text-opacity-50 text-xl'>We always make our customer happy by providing as many choices as possible </p>
          <div className='btn-container flex gap-4'>
            <Button type='button' title='Get Started' variant='btn_purple shadow' />
          </div>
        </div>
        <div>
          hello jack!
        </div>
  
        {/* RIGHT */}
        <div className='relative z-1 xl:w-3/5 flexCenter first-line:flex-1'>

        </div>
      </section>
    )
    
}