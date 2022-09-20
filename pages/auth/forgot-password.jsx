import { Layout } from 'components/auth'
import React from 'react'
import Image from 'next/image';

import MailSvg from '../../assets/svg/envelope/Union.svg'
import router from 'next/router';

const ForgotPwd = () => {
  return (
    <Layout>
      <div className="card border-0">
        <h3 className="title text-center title-forgot-pwd title-space">Forgot Password</h3>
        <p className="block-title graphite-grey text-center mt-8">
          Enter the email you used to create this account to reset your
          password.
        </p>
        <div className="card-body">
          <form className='register'>
            <label className="block-title mt-8">Email</label>
            <div className="form-group input-icons">
                <div className='icon'>
                  <Image src={MailSvg} alt={''}/>
                </div>
              <input name="email" 
              className="form-control input-field" 
              type="email" 
              placeholder='Enter your email address'/>
            </div>

            <button className="btn btn-success btn-lg btn-block mt-8">
              Continue
            </button>
            <p className="text-center mt-12">Nevermind, I got it</p>
            <div className='text-center mt-8'>
            <button 
            className='btn btn-back-to-login p'
            onClick={() => {router.push('/auth/login')}}>
              Back to Log in
            </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default ForgotPwd