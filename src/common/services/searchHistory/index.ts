import { type AxiosRequestConfig } from 'axios'
import request, { ServiceMap } from '../index'
import type { SearchHistoryResType } from './types'

export default function (config?: AxiosRequestConfig) {
  return request<SearchHistoryResType>(ServiceMap.getSearchHistory, config)
}
