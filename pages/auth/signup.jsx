import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Link } from 'components';
import { Layout } from 'components/auth';
import { userService, alertService } from 'services';
import Image from 'next/image';

import MailSvg from '../../assets/svg/envelope/Union.svg'
import LockSvg from '../../assets/svg/lock/light.svg'
import EyeSvg from '../../assets/svg/eye/light.svg'
import GoogleSVG from '../../assets/svg/headers/google.svg';
import FacebokSVG from '../../assets/svg/headers/facebook.svg';

export default Register;

function Register() {
    const router = useRouter();

    // form validation rules 
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(user) {
        return userService.register(user)
            .then(() => {
                alertService.success('Registration successful', { keepAfterRouteChange: true });
                router.push('login');
            })
            .catch(alertService.error);
    }

    return (
      <Layout>
        <div className="card border-0">
          <h3 className="title text-center mb-4 title-register">Create Account</h3>
          <p className="block-title graphite-grey text-center mb-4">Sign up with your social accounts.</p>
          <div className="btn-toolbar mx-auto social-buttons justify-center">
            <button type="button" className="btn btn-brand ml-0 mr-0 ml-sm-2 mr-sm-2 mb-2 d-flex align-items-center justify-center">
            <Image src={GoogleSVG} alt={''}></Image> <span className="ml-2">Google</span>
            </button>
            <button type="button" className="btn btn-brand ml-2 mr-2 mb-2 d-none d-sm-flex align-items-center justify-center">
            <Image src={FacebokSVG} alt={''}></Image> <span className="ml-2">Facebook</span>
            </button>
            <button type="button" className="btn btn-ellipsis ml-3 mb-2 d-block d-sm-none">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            </button>
          </div>
          <hr className="mt-4" />
          <p className="block-title text-center mt-4">Or continue with email</p>
          <div className="card-body">
            <form className="register" onSubmit={handleSubmit(onSubmit)}>
              <label className="block-title">Email</label>
              <div className="form-group input-icons mb-4">  
                <div className='icon'>
                  <Image src={MailSvg} alt={''}/>
                </div>                
                <input
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  {...register("email")}
                  className={`form-control input-field ${
                    errors.email ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>
              <label className="block-title">Password</label>
              <div className="form-group input-icons mb-4">
                <div className='icon-lock'>
                  <Image src={LockSvg} alt={''}/>
                </div>
                <div className='icon-right'>
                  <Image src={EyeSvg} alt={''}/>
                </div>
                <input
                  name="password"
                  type="password"
                  placeholder="Create password"
                  {...register("password")}
                  className={`form-control input-field ${
                    errors.password ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              </div>
              <label className="block-title">Confirm Password</label>
              <div className="form-group input-icons mb-4">
                <div className='icon-lock'>
                  <Image src={LockSvg} alt={''}/>
                </div>
                <div className='icon-right'>
                  <Image src={EyeSvg} alt={''}/>
                </div>
                <input
                  name="confirm-password"
                  type="password"
                  placeholder="Confirm password"
                  {...register("password")}
                  className={`form-control input-field ${
                    errors.password ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheckBox1"
                />
                <label className="custom-control-label">
                  By signing up, I confirm that I&apos;m 18 years of age or
                  older and that I&apos;ve read and agreed to the{" "}
                  <Link className="text-success" href={""}>
                    <u>User Agreements</u>
                  </Link>{" "}
                  and{" "}
                  <Link className="text-success" href={""}>
                    <u>Privacy Policy</u>
                  </Link>
                  .
                </label>
              </div>
              <button
                disabled={formState.isSubmitting}
                className="btn btn-success btn-lg btn-block mt-4"
                onClick={() => {router.push('/auth/confirm-email')}}
              >
                {formState.isSubmitting && (
                  <span className="spinner-border spinner-border-sm mr-1"></span>
                )}
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </Layout>
    );
}
