import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Layout } from 'components/auth';
import { userService, alertService } from 'services';

import LockSvg from '../../assets/svg/lock/light.svg'
import EyeSvg from '../../assets/svg/eye/light.svg'

import Image from 'next/image';

const NewPassword = () => {
  const router = useRouter();

  // form validation rules
  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Password is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(user) {
    return userService
      .register(user)
      .then(() => {
        alertService.success("Registration successful", {
          keepAfterRouteChange: true,
        });
        router.push("login");
      })
      .catch(alertService.error);
  }

  return (
    <Layout>
      <div className="card border-0">
        <h3 className="title text-center mb-4 title-new-pwd title-space ">New Password</h3>
        <div className="card-body">
          <form className='register' onSubmit={handleSubmit(onSubmit)}>
              <label className="block-title">New Password</label>
              <div className="form-group input-icons">
                <div className='icon-lock'>
                  <Image src={LockSvg} alt={''}/>
                </div>
                <div className='icon-right'>
                  <Image src={EyeSvg} alt={''}/>
                </div>
              <input
                name="password"
                type="password"
                placeholder="Create new password"
                {...register("password")}
                className={`form-control input-field ${errors.email ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
              <label className="block-title mt-4">Confirm Password</label>
              <div className="form-group input-icons">
                <div className='icon-lock'>
                  <Image src={LockSvg} alt={''}/>
                </div>
                <div className='icon-right'>
                  <Image src={EyeSvg} alt={''}/>
                </div>
              <input
                name="password"
                type="password"
                placeholder="Confirm password"
                {...register("password")}
                className={`form-control input-field ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>

            <button
              disabled={formState.isSubmitting}
              className="btn btn-success btn-lg btn-block mt-4"
            >
              {formState.isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              )}
              Submit
            </button>
            {/* <Link href="/auth/signup" className="btn btn-link">
              Register
            </Link> */}
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default NewPassword