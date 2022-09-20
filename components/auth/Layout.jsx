import { useRouter } from 'next/router';
import Image from 'next/image';

import { Link } from 'components/Link';
import BoltLogo from '../../assets/images/bolt.svg'
import { Col, Container, Row } from 'reactstrap';

export { Layout };

function 
Layout({ children }) {
    const router = useRouter();

    return (
      <Container fluid className="ps-md-0">
        <Row>
          <Col md={4} lg={4} className="d-none d-md-flex bg-image align-items-start pt-4 pl-12">
            <div>
            <Link href={'/landing/landing'}><Image src={BoltLogo} alt={''}></Image></Link><br/>
            <p className='text-light text-logo'>INDIA&apos;S LARGEST <br/> EV CHARGING NETWORK</p>
            </div>     
          </Col>
          <Col md={8} lg={8}> 
            <Row>
            <div className="fixed-header">
            <div className='d-inline-block d-sm-none p-2 w-35 h-15 ml-2'>
            <Image src={BoltLogo} alt={''}></Image><br/>
            <p className='text-dark text-logo'>INDIA&apos;S LARGEST <br/> EV CHARGING NETWORK</p>
            </div>
              {router.pathname == "/auth/login" ? (
                <p className="header-text text-center mt-3 d pre-text">
                  Don&apos;t have an account?{" "}
                  <Link className="theme-green" href="/auth/signup">
                    Sign Up for Free
                  </Link>
                </p>
              ) : (
                <p className="header-text text-center mt-2 d pre-text">
                  Already have an account?{" "}
                  <Link className="theme-green" href="/auth/login">
                    Log in
                  </Link>
                </p>
              )}
              {router.pathname == "/auth/login" ? (
                <Link
                  className="float-right .d-block d-sm-none mt-4 mr-5"
                  href="/auth/signup"
                >
                  <p className='theme-green'>Sign Up</p>
                </Link>
              ) : (
                <Link
                  className="float-right .d-block d-sm-none mt-4 mr-5 "
                  href="/auth/login"
                >
                  <p className='theme-green'>Log in</p>
                </Link>
              )}
            </div>
            </Row>
            <Row className="login justify-center mt-5">
              <Col sm={12} md={9} lg={8} xl={8}>{children}</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
}