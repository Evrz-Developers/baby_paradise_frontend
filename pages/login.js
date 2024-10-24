import React from 'react'
import Login from '@/components/auth/Login'
import DefaultLayout from '@/components/layouts/DefaultLayout'

const login = () => {
    return (
        <DefaultLayout>
            <Login />
        </DefaultLayout>
    )
}

export default login