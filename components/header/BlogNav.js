import React from 'react'
import { Row } from 'reactstrap';

const BlogNav = () => {
  return (
      <Row className='justify-center px-12 h-24 bg-[#3D3D3D]'>
        <div className='my-auto h-8 text-white'>
          <span className='cursor-pointer my-auto mx-2 font-bold text-[#ECECEC]'>
          <span className="rounded-divider-banner p-2">CATEGORY #1</span></span>
          <span className='cursor-pointer my-auto mx-2 font-bold text-[#ECECEC]'>CATEGORY #2</span>
          <span className='cursor-pointer my-auto mx-2 font-bold text-[#ECECEC]'>CATEGORY #3</span>
        </div>
      </Row>  
    )
}

export default BlogNav