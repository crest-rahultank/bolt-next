import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Link } from 'components';
import { Layout } from 'components/auth';
import { userService, alertService } from 'services';

import GoogleSVG from '../../assets/svg/headers/google.svg';
import FacebokSVG from '../../assets/svg/headers/facebook.svg';
import Image from 'next/image';
import { Card, CardBody, Form } from 'reactstrap';
export default Login;

function Login() {
    const router = useRouter();

    // form validation rules 
    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Email is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({ email, password }) {
        return userService.login(email, password)
            .then(() => {
                // get return url from query parameters or default to '/'
                const returnUrl = router.query.returnUrl || '/';
                router.push(returnUrl);
            })
            .catch(alertService.error);
    }

    return (
      <Layout>
        <Card className="border-0">
          <h3 className="title text-center title-login">Sign In</h3>
          <p className="block-title graphite-grey text-center mb-3 mt-8">
            Log in with your social accounts.
          </p>
          <div className="btn-toolbar mx-auto social-buttons justify-center">
            <button
              type="button"
              className="btn btn-brand ml-0 mr-0 ml-sm-2 mr-sm-2 mb-2 d-flex align-items-center justify-center"
            >
              <Image src={GoogleSVG} alt={""}></Image>{" "}
              <span className="ml-2">Google</span>
            </button>
            <button
              type="button"
              className="btn btn-brand ml-2 mr-2 mb-2 d-none d-sm-flex align-items-center justify-center"
            >
              <Image src={FacebokSVG} alt={""}></Image>{" "}
              <span className="ml-2">Facebook</span>
            </button>
            <button
              type="button"
              className="btn btn-ellipsis ml-3 mb-2 d-block d-sm-none"
            >
              <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            </button>
          </div>
          <hr className="mt-4" />
          <p className="block-title text-center mt-4">Or continue with email</p>
          <CardBody>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label className="block-title">Email</label>
                <input
                  name="email"
                  type="text"
                  placeholder="Enter your email address"
                  {...register("email")}
                  className={`form-control input-field ${
                    errors.email ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>
              <div className="form-group">
                <label className="block-title">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  {...register("password")}
                  className={`form-control input-field ${
                    errors.password ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              </div>
              <div className="form-group">
                <Link
                  href="/auth/forgot-password"
                  className="text-success float-right mb-8"
                >
                  <p className="theme-green">Forgot Password? </p>
                </Link>
              </div>
              <button
                disabled={formState.isSubmitting}
                className="btn btn-success btn-lg btn-block"
                onClick={() => {
                  router.push("/charger/home");
                }}
              >
                {formState.isSubmitting && (
                  <span className="spinner-border spinner-border-sm mr-1"></span>
                )}
                Log In
              </button>
            </Form>
          </CardBody>
        </Card>
      </Layout>
    );
}
