import React from 'react'
import { SignupForm } from './signup-form';
import { LoginForm } from './login-form';
// import { useRouter } from 'next/navigation';

type FormType = 'sign-up' | 'sign-in'; // Define FormType or import it if defined elsewhere

const AuthForm = ({ type }: { type: FormType }) => {
  // const router = useRouter();
  return (
      <div className='w-full max-w-sm sm:w-max-md md:max-w-lg'>{type === 'sign-up'? <SignupForm /> : <LoginForm /> }</div>
  )
}

export default AuthForm