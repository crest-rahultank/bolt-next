import React from 'react'
import Link from 'next/link';

const ContentHeader = () => {
  return (
    <div className='banner-header-bar d-flex px-12 h-24 bg-[#3D3D3D] justify-content-between'>
      <div className='d-flex my-auto h-8 text-white'>
        <span className='cursor-pointer my-auto mx-2 font-bold text-[#FFFFFF] mb-4'><Link href={'/auth/login'}>
          <span className="rounded-divider-banner p-2">FOR DRIVERS</span></Link>
        </span>
        <span className='cursor-pointer my-auto mx-2 font-bold text-[#ECECEC]'><Link href={'/faq/business'}><span className="">FOR BUSINESSES</span></Link></span>
        <span className='cursor-pointer my-auto mx-2 font-bold text-[#ECECEC]'>BOLT APP</span>
        <span className='cursor-pointer my-auto mx-2 font-bold text-[#ECECEC]'>CHARGING TROUBLESHOOTING</span>
      </div>
    </div>
  )
}

export default ContentHeader