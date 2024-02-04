import React from 'react'
import Highlight from '@/components/common/Highlight'
import Table from '@/components/common/Table'
import ContentWrapper from '@/components/layouts/ContentWrapper'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import Contents from '@/contents/content'

const help = () => {
    return (
        <DefaultLayout>

            {/* Hero Section */}
            <div className='relative min-h-[500px] flex overflow-hidden'>

                {/* Background */}
                <div className='w-full h-full bg-slate-400 -z-10 absolute' />

                <ContentWrapper>
                    <div className='flex justify-center'>

                        {/* Links */}
                        <div className='w-2/6 p-10 rounded-xl bg-white/30 text-white backdrop-blur-md'>
                            <div className='grid grid-cols-2 gap-5 text-white/99'>
                                <div>
                                    <h6 className='text-md font-bold'> Utilities </h6>
                                    <ul className='list-disc list-inside'>
                                        <li className='text-sm font-semibold mt-2'> ServerRequest </li>
                                        <li className='text-sm font-semibold mt-2'> Authentication </li>
                                        <li className='text-sm font-semibold mt-2'> Storage </li>
                                        <li className='text-sm font-semibold mt-2'> Form Validation </li>
                                    </ul>
                                </div>
                                <div>
                                    <h6 className='text-md font-bold'> Custom Hooks </h6>
                                    <ul className='list-disc list-inside'>
                                        <li className='text-sm font-semibold mt-2'> useServerRequest </li>
                                        <li className='text-sm font-semibold mt-2'> useUserData </li>
                                    </ul>
                                </div>
                                <div className='col-span-2'>
                                    <h6 className='text-md font-bold'> Other Packages </h6>
                                    <ul className='list-disc list-inside'>
                                        <li className='text-sm font-semibold mt-2'> Recoil - for state management </li>
                                        <li className='text-sm font-semibold mt-2'> React Icons - as a icon library </li>
                                        <li className='text-sm font-semibold mt-2'> React Hook Forms - handle forms with ease </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </ContentWrapper>

            </div>

            {/* Config */}
            <ContentWrapper>
                <div className='mt-10'>
                    <h3 className='text-lg'> Config Starter Project </h3>
                    <ol className='list-decimal list-inside'>
                        <li className='mt-5'>
                            Setup <Highlight> .env.local </Highlight> file.
                            <Table className="mt-3" data={Contents.starterProjectConfig.env_variables} />
                        </li>
                        <li className='mt-5'>
                            Setup utility files. See <Highlight> ./utilities </Highlight> folder
                            <ol className='list-roman list-inside ml-5'>
                                <li className='mt-3'>
                                    Setup <Highlight> serverRequest.js </Highlight> file
                                    <Table className="mt-2" data={Contents.starterProjectConfig.server_request_variables} />
                                </li>
                                <li className='mt-3'>
                                    Setup <Highlight> auth.js </Highlight> file
                                    <Table className="mt-2" data={Contents.starterProjectConfig.auth_variables} />
                                </li>
                            </ol>
                        </li>
                    </ol>
                </div>
            </ContentWrapper>

        </DefaultLayout>
    )
}

export default help