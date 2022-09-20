import { Layout } from 'components/auth'
import React from 'react'

const SecurityVerification = () => {
  return (
    <Layout>
      <div className="card border-0">
        <h3 className="title text-center title-security-verification title-space">Security Verification</h3>
        <p className="block-title graphite-grey text-center mt-4">Enter the 4-digit code we sent to t*m@gmail.com</p>
        <hr className='mt-4'/>
        <div className="card-body mt-2">
        <div
            id="otp"
            className="inputs d-flex flex-row justify-content-center mt-2"
          >
            <input
              className="m-2 text-center form-control rpounded"
              type="text"
              id="first"
              maxLength="1"
            />
            <input
              className="m-2 text-center form-control rounded"
              type="text"
              id="second"
              maxLength="1"
            />
            <input
              className="m-2 text-center form-control rounded"
              type="text"
              id="third"
              maxLength="1"
            />
            <input
              className="m-2 text-center form-control rounded"
              type="text"
              id="fourth"
              maxLength="1"
            />
          </div>
          <div className="row mt-4 d-none d-sm-block">
            <div className="col-sm-12 text-center">
              <button className="btn btn-resend btn-md">Resend Code</button>
              <button className="btn btn-success btn-continue btn-md ml-80">
                Continue
              </button>
            </div>
          </div>
          <div className="row mt-4 d-block d-sm-none">
            <div className="text-center">
              <button className="btn btn-success btn-continue btn-md">
                Continue
              </button>
              <button className="btn btn-resend btn-md mt-3">
                Resend Code
              </button>
            </div>
          </div>
        </div>  
      </div>
    </Layout>
  )
}

export default SecurityVerification