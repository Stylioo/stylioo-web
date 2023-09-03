import { useState, useEffect } from "react"
import axios from "@/axios"

type ConfigType = {
    axiosInstance?: any
    url?: string
    method?: string
    requestConfig?: {
        headers?: any
        params?: any
        data?: any
    }
}

const useAxios = () => {

    const [response, setResponse] = useState<any>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [controller, setController] = useState<any>()

    const axiosFetch = async (configObj: ConfigType) => {
        const {
            axiosInstance = axios,
            method = 'get',
            url,
            requestConfig = {}
        } = configObj

        try {
            setLoading(true)
            const ctrl = new AbortController()
            setController(ctrl)
            const res = await axiosInstance[method.toLowerCase()](url, {
                ...requestConfig,
                signal: ctrl.signal
            })
            if (res.status >= 200 && res.status < 300) {
                if (res.data.success) {
                    setResponse(res.data.data)
                } else {
                    setError(res.data.error)
                }
            } else {
                setError("Something went wrong")
            }

        } catch (error: any) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        return () => controller && controller.abort()
    }, [controller])

    return [response, error, loading, axiosFetch]
}

export default useAxios
