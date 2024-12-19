import { MockMethod } from 'vite-plugin-mock'
import { baseUrl, ServiceMap } from '../index'

const api = ServiceMap.getSearchHistory

export default {
  url: baseUrl + api.url,
  method: api.method,
  response: ({ query }) => {
    return [
      {
        code: 'COMP9032',
        name: 'Software Engineering Studio 3A',
        kind: 'Course',
      },
      {
        code: 'COMP9032',
        name: 'Software Engineering Studio 3A',
        kind: 'Program',
      },
      {
        code: 'COMP9032',
        name: 'Software Engineering Studio 3A',
        kind: 'Course',
      },
      {
        code: 'COMP9032',
        name: 'Software Engineering Studio 3A',
        kind: 'Double program',
      },
      {
        code: 'COMP9032',
        name: 'Software Engineering Studio 3A',
        kind: 'Course',
      },
    ]
  },
} as MockMethod

console.log('Mock data for searchHistory is enabled.')
