import Link from 'next/link'
import React from 'react'
import ContentWrapper from '@/components/layouts/ContentWrapper'

const DefaultHeader = () => {
    return (
        <header className='w-full p-3 shadow-md'>
            <ContentWrapper>
                <div className='flex justify-between'>
                    {/* Title */}
                    <h3> Starter Project </h3>

                    {/* Navbar */}
                    <div className='flex items-center'>
                        <ul className='flex justify-between items-center gap-5 text-xs'>
                            <li>
                                <Link href={'#home'}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={'#features'}>
                                    Features
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </ContentWrapper>
        </header>
    )
}

export default DefaultHeader