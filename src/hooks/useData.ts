import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react"
import apiClient from "../services/api-client"

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endPoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setLoading(true)
    apiClient
      .get<FetchResponse<T>>(endPoint, { signal: controller.signal, ...requestConfig })
      .then(res => {
        setData(res.data.results)
        setLoading(false)
      })
      .catch(err => {
        if(err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false)
      })

    return () => controller.abort()
  }, deps ? [...deps] : [])

  return { data, error, isLoading }
}

export default useData
