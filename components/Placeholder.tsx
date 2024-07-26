"use client"
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { CirclePlus } from 'lucide-react'

function Placeholder() {
    const router = useRouter()  
    function handleClick(){
     router.push('/dashboard/upload') 
    }
  return (
      <Button onClick={handleClick} className='mt-7 flex flex-col h-64 w-48 bg-gray-200 text-gray-500 items-center drop-shadow-md lg:h-80 w-64'>
        <CirclePlus/>
        <p>Add a Document</p>
      </Button>
    
  )
}

export default Placeholder
