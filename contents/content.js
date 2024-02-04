const starterProjectConfig = {
    env_variables: [
        {
            'Variable': 'NEXT_PUBLIC_API_HOST',
            'Value Type': 'URL',
            'Example': 'https://evrz.com',
            'Description': 'Setting default host for making API calls. ServerRequest utility will use this value as default.',
        },
    ],
    server_request_variables: [
        {
            'Variable': 'REFRESH_TOKEN_PATH',
            'Value Type': 'path',
            'Example': '/api/v1/accounts/refresh-token/',
            'Description': 'Used to automatically call refresh token API once server returns a 401 response saying token_expired',
        },
        {
            'Variable': 'USE_TOKEN_BY_DEFAULT',
            'Value Type': 'bool',
            'Example': 'true',
            'Description': 'Setup default behaviour of request to use token'
        }
    ],
    auth_variables: [
        {
            'Variable': 'USER_PROFILE_URI',
            'Value Type': 'path',
            'Required': 'True',
            'Example': '/api/v1/accounts/profile/',
            'Description': 'api endpoint for fetching user profile',
        },
        {
            'Variable': 'SIGNIN_URI',
            'Value Type': 'path',
            'Required': 'True',
            'Example': '/api/v1/accounts/signIn/',
            'Description': 'api endpoint for login',
        },
        {
            'Variable': 'SIGNUP_URI',
            'Value Type': 'path',
            'Required': 'True',
            'Example': '/api/v1/accounts/signUp/',
            'Description': 'api endpoint for register',
        },
        {
            'Variable': 'SIGNOUT_URI',
            'Value Type': 'path',
            'Required': 'False',
            'Example': '/api/v1/accounts/signOut/',
            'Description': 'api endpoint for logout',
        },
    ]
}

const Contents = {
    starterProjectConfig,
}

export default Contents;