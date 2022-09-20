import { useRouter } from 'next/router';
import { Layout } from 'components/auth'
import React from 'react'
import { Link } from 'components';

const ConfirmEmail = () => {
  const router = useRouter();
  return (
    <Layout>
      <div className="card border-0">
        <h3 className="title text-center">
          Let&apos;s Confirm Your Email Address
        </h3>
        <p className="text-center mt-4">
          Please complete the verification below.
        </p>
        <hr className="mt-4" />
        <div className="card-body">
          <form>
            <p className="text-center">
              Receive your code via email at tranm••••••••••••@gm•••.com
            </p>
            <Link href={"/auth/otp"}>
              <span>
                <button className="btn btn-success btn-lg btn-block mt-4">
                  Continue
                </button>
              </span>
            </Link>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default ConfirmEmail