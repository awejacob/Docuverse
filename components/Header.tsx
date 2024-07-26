import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { FilePlus2Icon } from 'lucide-react'
import { link } from 'fs'

function Header() {
  return (
    <div className='flex justify-between items-center p-5 text-gray-600 shadow-sm border-b'>
     <Link href='/' className='text-xl font-semibold'>
      Chat To <span className='text-indigo-600'>PDF</span>
     </Link>
      
      <SignedIn>
       <div className='flex items-center space-x-2'>
        
        <Button asChild variant='link' className='hidden md:flex'>
          <Link href='/dashboard/upgrade'>Pricing</Link>
        </Button>

        <Button asChild variant='outline'>
          <Link href='/dasboard/'>My Documents</Link>
        </Button>

         <Button asChild variant='outline' className='text-indigo-600'>
          <Link href='/dasboard/upload'>
           <FilePlus2Icon/>
          </Link>
         </Button>

       <UserButton/>
       </div>
      </SignedIn>
    </div>
  )
}

export default Header
