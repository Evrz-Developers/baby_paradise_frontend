import React from 'react'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import Link from 'next/link'

const home = () => {
  return (
    <DefaultLayout className={'min-h-[calc(100vh-89px)] bg-slate-400 flex flex-col items-center justify-center'}>
      {/* Text */}
      <div className='w-full h-auto flex justify-center text-white text-[7rem]'>
        Portfolio
      </div>
      <Link href='/help' className=' text-color-label-text text-[2rem]'>
        Need help?
      </Link>

    </DefaultLayout>
  )
}

export default home