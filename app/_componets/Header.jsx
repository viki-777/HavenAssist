import React from 'react'
import Image from 'next/image'
import {Button} from '@/components/ui/button'
function Header() {
  return (
    <div className='p-5 shadow-md flex justify-between'>

      <div className='flex item-center gap-8'>
      <Image src='/logo.svg' alt='logo' width={180} height={100} />
          <div className='flex items-center gap-6'>
                <h2 className='hover:scale-105 hover:text-primary hover:cursor-pointer'> Home</h2>
                <h2 className='hover:scale-105 hover:text-primary hover:cursor-pointer'> Services</h2>

                <h2 className='hover:scale-105 hover:text-primary hover:cursor-pointer'> About Us</h2>

          </div>
      
      </div>
      <div>
            <Button className='hover:scale-105'>Get Started</Button>
      </div>
    </div>
  )
}

export default Header