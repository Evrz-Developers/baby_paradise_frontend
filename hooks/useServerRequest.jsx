import { useEffect, useState } from 'react'
import serverRequest from '@/utilities/serverRequest'

const useServerRequest = (method, path, options, dependencies = []) => {

    const [loading, setLoading] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [message, setMessage] = useState('')
    const [response, setResponse] = useState(null)
    const [status, setStatus] = useState(null)

    const resetStates = () => {
        setLoading(true)
        setLoaded(false)
        setStatus()
        setMessage()
        setHasError(false)
        setResponse()
    }

    const apiCall = async () => {

        // reset
        resetStates()

        // Api Call
        const { status, response, message, hasError } = await serverRequest(method, path, options)
        setLoading(false)
        setLoaded(true)
        setStatus(status)
        setMessage(message)
        hasError ? setHasError(true) : setResponse(response)
    }

    useEffect(() => {
        apiCall()
    }, [...dependencies])

    return {
        loading, loaded, hasError, message, response, status,
    }
}

export default useServerRequest