export const dynamic = "force-dynamic"
import Documents from '@/components/Documents'
import React from 'react'

function Dashboard() {
  return (
    <div className='mx-auto h-full max-w-7xl p-5 bg-gray-200 font-extralight text-2xl'>
     <div>
      <h2 className='text-indigo-600'>My Documents</h2>
      <Documents/>
      </div>
    </div>
  )
}

export default Dashboard
