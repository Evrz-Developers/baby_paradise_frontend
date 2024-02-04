import serverRequest from '@/utilities/serverRequest';
import Storage from '@/utilities/storage';

const USER_PROFILE_URI = ''
const SIGNIN_URI = ''
const SIGNUP_URI = ''
const SIGNOUT_URI = null

const updateProfile = async () => {
    // get profile data from server
    const response = await serverRequest('GET', USER_PROFILE_URI)
    if (response.hasError) return response
    // write to storage
    Storage.writeUserData(response.response)
    // update to state
    // ..

    return response
}

const loginWithEmailPassword = async (email, password) => {
    // 1. get Tokens from API
    const body = { email, password };
    const response = await serverRequest('POST', SIGNIN_URI, body, false);
    if (response.hasError) return response
    const { refresh, access } = response.response;
    // 2. store token to localstorage
    Storage.writeTokens({ refresh, access });
    return response
}

const register = async (data) => {
    return await serverRequest('POST', SIGNUP_URI, { body: data })
}

const signout = async () => {
    // clear storage
    Storage.clear();

    // clear state
    // ..

    // api call (if any)
    if (SIGNOUT_URI) {
        await serverRequest('GET', SIGNOUT_URI)
    }
}

const verifyLogin = () => {
    const token = Storage.readTokens()
    return (token && token.refresh) ? true : false;
}

const AUTH = {
    register,
    profile: updateProfile,
    login: loginWithEmailPassword,
    logout: signout,
    verifyLogin: verifyLogin,
}

export default AUTH;