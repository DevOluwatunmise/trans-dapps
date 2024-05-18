import React from 'react'
import { Navbar, Welcome , Services, Footer} from '@/components'
// import Server from 'next/dist/server/base-server'

const page = () => {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
        <Services/>
        <Footer/>
      </div>
    </div>
  )
}

export default page

