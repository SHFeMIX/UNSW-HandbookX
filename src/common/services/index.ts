import axios, { type AxiosRequestConfig } from 'axios'

export const baseUrl = '/api/'

interface ServiceType {
  url: string
  method: string
}

export const ServiceMap: { [key:string]: ServiceType } = {
  getSearchRecommendation: {
    url: 'searchRecommendation',
    method: 'GET'
  },
  getSearchHistory: {
    url: 'searchHistory',
    method: 'GET'
  }
}

const axiosInstance = axios.create()
axiosInstance.defaults.baseURL = baseUrl

export default function <R>(service: ServiceType, config?: AxiosRequestConfig) {
  console.log('service:', service)
  console.log('config:', config)
  return axiosInstance.request<R>({ ...service, ...config })
}
