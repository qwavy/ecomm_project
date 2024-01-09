// 1. Import the "HttpResponse" class from the library.
import { http, HttpResponse } from 'msw'

const url = '/api/test/'

export const handlers = [
  http.get('/api/test/', () => {
    // 2. Return a mocked "Response" instance from the handler.
    return HttpResponse.text('Hello world!')
  }),
]