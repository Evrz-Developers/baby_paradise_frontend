import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

const Register = () => {

    const { handleSubmit, register, watch, setError, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        console.log(data);
    }

    const handlePasswordMatch = (confirm_password) => {
        const password = watch('password')
        if (password !== confirm_password) return 'Not same as password'
    }

    return (

        <div className='mt-10 '>
            <div className='w-full max-w-[500px] rounded md:shadow-md p-10 m-auto'>
                <h3 className='text-2xl'> Create account </h3>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='mt-3 text-sm'>
                        <label htmlFor="first_name"> First Name </label>
                        <input type="name" id='first_name' {...register('first_name', { required: 'This is required' })} className={`px-5 py-3 w-full bg-gray-100 rounded-md ${errors?.first_name ? 'border-2 border-red-400' : undefined}`} />
                        {errors && errors.first_name && (
                            <label htmlFor="first_name" className='text-red-600 mt-1'> {errors.first_name.message} </label>
                        )}
                    </div>
                    <div className='mt-3 text-sm'>
                        <label htmlFor="last_name"> Last Name </label>
                        <input type="name" id='last_name' {...register('last_name', { required: 'This is required' })} className={`px-5 py-3 w-full bg-gray-100 rounded-md ${errors?.last_name ? 'border-2 border-red-400' : undefined}`} />
                        {errors && errors.last_name && (
                            <label htmlFor="last_name" className='text-red-600 mt-1'> {errors.last_name.message} </label>
                        )}
                    </div>
                    <div className='mt-3 text-sm'>
                        <label htmlFor="email"> Email </label>
                        <input type="email" id='email' {...register('email', { required: 'This is required' })} className={`px-5 py-3 w-full bg-gray-100 rounded-md ${errors?.email ? 'border-2 border-red-400' : undefined}`} />
                        {errors && errors.email && (
                            <label htmlFor="email" className='text-red-600 mt-1'> {errors.email.message} </label>
                        )}
                    </div>
                    <div className='mt-3 text-sm'>
                        <label htmlFor="password"> Password </label>
                        <input type="password" id='password' {...register('password', { required: 'This is required' })} className={`px-5 py-3 w-full bg-gray-100 rounded-md ${errors?.password ? 'border-2 border-red-400' : undefined}`} />
                        {errors && errors.password && (
                            <label htmlFor="password" className='text-red-600 mt-1'> {errors.password.message} </label>
                        )}
                    </div>
                    <div className='mt-3 text-sm'>
                        <label htmlFor="confirm_password"> Confirm Password </label>
                        <input type="password" id='confirm_password' {...register('confirm_password', { required: 'This is required', validate: handlePasswordMatch })} className={`px-5 py-3 w-full bg-gray-100 rounded-md ${errors?.confirm_password ? 'border-2 border-red-400' : undefined}`} />
                        {errors && errors.confirm_password && (
                            <label htmlFor="confirm_password" className='text-red-600 mt-1'> {errors.confirm_password.message} </label>
                        )}
                    </div>

                    <div className='mt-6'>
                        <button type='submit' className='px-5 py-3 w-full bg-yellow-300 rounded-md'> Register </button>
                    </div>

                </form>

                <div className='mt-3 text-sm'>
                    I have an account,
                    <Link href={'/login'} className="ml-1 text-link">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register