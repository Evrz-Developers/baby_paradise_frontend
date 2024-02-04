// import AUTH from "./auth";
import Storage from "@/utilities/storage";

const DEFAULT_HOST = process.env.NEXT_PUBLIC_API_HOST
const REFRESH_TOKEN_PATH = '/api/v1/accounts/refresh-token/'
const USE_TOKEN_BY_DEFAULT = true

/**
 * General utility function to make http calls
 * @param {string} method
 * @param {string} path
 * @param {Object} [n] options
 * @returns
 */
const serverRequest = async (method, path, requestOptions) => {
    const { body = {}, useToken = USE_TOKEN_BY_DEFAULT, sendAsForm = false, host } = requestOptions || {}
    const url = (host ? host : DEFAULT_HOST) + path;

    const options = {
        body: method.toUpperCase() != "GET" ? sendAsForm ? convertToFormData(body) : JSON.stringify(body) : null,
        method: method,
        headers: sendAsForm ? {} : {
            "Content-Type": "application/json"
        }
    };

    if (useToken) {
        const { access } = Storage.readTokens() || {}
        if (!access) return handleLogout('token_missing')
        options['headers']['Authorization'] = `Bearer ${access}`
    }

    try {
        const response = await fetch(url, options);
        let data;
        try {
            data = await response.json()
        } catch (error) {
            data = {}
        }

        if (response.status >= 200 && response.status < 300)
            return { hasError: false, message: "ok", response: data, status: response.status };

        // token expire handle
        if (response.status == 401) {
            if (data && data.code == 'token_not_valid') {
                const callback = () => serverRequest(method, path, { body, useToken: true, sendAsForm })
                return await refreshToken(callback)
            }
        }
        // other error handling
        const message = getErrorMessage(data)
        return { hasError: true, message: message, response: data, status: response.status };
    } catch (error) {
        return {
            hasError: true,
            message: "Something went wrong",
            response: null,
            status: null,
        };
    }
};

const refreshToken = async (callback) => {
    const { refresh } = Storage.readTokens() || {}
    if (!refresh) return handleLogout('token_missing')
    const options = {
        method: 'POST',
        body: JSON.stringify({ refresh }),
        headers: { "Content-Type": "application/json" }
    };
    const response = await fetch(`${DEFAULT_HOST}${REFRESH_TOKEN_PATH}`, options)
    if (response.status != 200) return handleLogout('token_expired')
    const tokens = await response.json()
    Storage.writeTokens(tokens)
    return callback()
}

const convertToFormData = (data) => {
    const form = new FormData()
    for (const key in data) form.append(key, data[key])
    return form
}

const getErrorMessage = (data) => {
    let message = 'Something went wrong'
    if (data && typeof data == 'string') message = data
    else if (data && data.messages && data.messages.length > 0 && data.messages[0].message) message = data.messages[0].message
    else if (data && data.detail) message = data.detail
    else if (data && data.message) message = data.message
    return message
}

const handleLogout = (code = 'request_failed') => {
    // AUTH.logout()
    return { hasError: true, status: null, message: `${code}, Please login again`, response: null, }
}

export default serverRequest