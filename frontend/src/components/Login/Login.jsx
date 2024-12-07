import React from 'react'

const Login = () => {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md '>
                <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                    Login To your account 
                </h2>
        </div>

        <div className='mt=8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                 <form className='space-y-6'>
                    <div>
                      <label htmlFor="email" className='block text-sm font-medium text-gray-700'>
                        Email Address
                      </label>
                      <div className="mt-1">
                        <input type="email" name="email" autoComplete='email' required value={email} onChange={(e) => setEmail(e.target.value)} className='appearance-none block w-full px-3 py-2 boreder-gray-300 rounded-md'/>
                      </div>
                    </div>
                 </form>
            </div>
        </div>
    </div>
  )
}

export default Login
