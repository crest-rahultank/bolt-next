import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import Link from 'next/link';
const TopHeader = () => {
  return (
    <div className='top-bar bg-[#3D3D3D] px-4 py-2'>
      <div className='container-fluid'>
        <div className='row align-items-center'>
          <div className='col-12 col-sm-3 col-md-3 col-lg-4 col-xl-4'>
            <div className='d-flex my-auto align-items-center'>
              <Link href={'https://www.facebook.com/BOLTEarth'} passHref={true}><FaFacebookSquare size={24} className='mx-2 text-white' /></Link>
              <Link href={'https://www.instagram.com/bolt.earth/'} passHref={true}><AiFillInstagram size={24} className='mx-2 text-white' /></Link>
              <Link href={'https://twitter.com/bolt_earth'} passHref={true}><FaTwitterSquare size={24} className='mx-2 text-white' /></Link>
            </div>
          </div>
          <div className='col-12 col-sm-9 col-md-9 col-lg-8 col-xl-8'>
            <div className='topbar_links d-flex justify-content-end'>
              <div className='mx-3 text-white font-normal'>
                <Link href={'/auth/login'}>Login</Link>
              </div>
              <div className='mx-3 text-white font-normal'>
                <Link href={''}>Find a Charger</Link>
              </div>
              <div className='mx-3 text-white font-normal'>
                <Link href={'/download'}>Download App</Link>
              </div>
              <div className='mx-3 text-white font-normal'>
                <Link href={''}>Contact</Link>
              </div>
              <div className='mx-3 text-white font-normal'>
                <Link href={'/faq/drivers'}>FAQ</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;