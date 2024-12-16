import { MockMethod } from 'vite-plugin-mock'

export default {
  url: '/api/searchHistory',
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
