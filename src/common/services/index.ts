import axios from 'axios'

export const baseUrl = '/api/'

export const ServiceMap = {
    getSearchRecommendation: {
        url: 'searchRecommendation',
        method: 'GET'
    },
    getSearchHistory: {
        url: 'searchHistory',
        method: 'GET'
    }
}

// create and congif a new axios instance
const axiosInstance = axios.create()
axiosInstance.defaults.baseURL = baseUrl

export default function (service, config) {
    console.log('service:', service)
    console.log('config:', config)
    return axiosInstance.request({...service, ...config})
}
