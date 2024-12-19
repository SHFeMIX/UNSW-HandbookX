import request, { ServiceMap } from '../index'

export default function (config?) {
  return request(ServiceMap.getSearchHistory, config)
}
