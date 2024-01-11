// 1. Import the "HttpResponse" class from the library.
import { http, HttpResponse } from 'msw'
import products from '../storage/data.json'

const url = '/api/test/'

let laptops = []
let desktops = []
let monitors = []
let motherboards = []

let cartProducts = []
const allPosts = new Map()


products.forEach(product => {
  if (product.category == "laptop") {
    laptops.push(product)
  } else if (product.category == "desktop") {
    desktops.push(product)
  } else if (product.category == "monitoir") {
    monitors.push(product)
  } else if (product.category == "motherboard") {
    motherboards.push(product)
  }
})


export const handlers = [


  http.get('/products/laptops/', () => {
    return HttpResponse.json(laptops)
  }),
  http.get('/products/desktops', () => {
    return HttpResponse.json(desktops)
  }),
  http.get('/products/monitors', () => {
    return HttpResponse.json(monitors)
  }),
  http.get('/products/motherboards',() => {
    return HttpResponse.json(motherboards)
  }),


  http.post('/posts', async ({ request }) => {
    // Read the intercepted request body as JSON.
    const newPost = await request.json()
 
    // Push the new post to the map of all posts.
    allPosts.set(newPost.id, newPost)
    cartProducts.push(newPost)
 
    // Don't forget to declare a semantic "201 Created"
    // response and send back the newly created post!
    return HttpResponse.json(newPost, { status: 201 })
  }),

  http.get('/cartProducts' , () => {
    return HttpResponse.json(cartProducts)
  })

  http.delete('/cart/')

]