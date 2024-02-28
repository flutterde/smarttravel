"use client"

import { Dash } from "@/components/dash"
import { Button } from "@/components/ui/button"
import { useUser } from "@clerk/nextjs"


export default function Dashboard(){
    const { user, isLoaded } = useUser();

    return (
        <section className='relative max-container padding-container xs:py-12 sm:py-28 xs:gap-16 sm:gap-32 gap-0 flex flex-col xl:flex-row'>
          <div>
          <div className='bg-hero h-screen w-screen xs:right-[5%] xs:top-[45%] sm:right-[5%] xl:top-[4%] xl:right-[-20%]'/>
          
          <div className='relative z-2 flex flex-1 flex-col gap-8 xl:w-2/5'>

            <h1 className='text-3xl text- font-semibold'>Hello {isLoaded ? user.firstName : ""}!</h1>
            <p className='text-[#191825] text-opacity-50 text-md'>Here's the historical sites near you!</p>
          </div>
          <div className='relative z-1 xl:w-3/5 flexCenter first-line:flex-1'>
          </div>

          </div>
          <Dash/>
      </section>
    )
    
}