import Header from '@/components/Header'
import React, { ReactNode } from 'react'

function DashboardLayout({children}:{children:React.ReactNode}) {
  return (
    <div className='flex-1 flex flex-col h-screen'>
      <Header/>
      <main>
        {children}
    </main>
    </div>
  )
}

export default DashboardLayout
