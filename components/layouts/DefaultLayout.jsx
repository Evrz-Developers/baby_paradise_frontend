import React from 'react'
import DefaultFooter from '@/components/layouts/DefaultFooter'
import DefaultHeader from '@/components/layouts/DefaultHeader'

const DefaultLayout = ({ children, className }) => {
    return (
        <>
            <DefaultHeader />
            <div className={`min-h-[calc(100vh-130px)] ${className}`}>
                {children}
            </div>
            <DefaultFooter />
        </>
    )
}

export default DefaultLayout