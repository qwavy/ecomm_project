// 1. Import the "HttpResponse" class from the library.
import { http, HttpResponse } from 'msw'
import products from '../storage/data.json'
import reviews from '../storage/reviews.json'
const url = '/api/test/'

let laptops = []
let desktops = []
let monitors = []
let motherboards = []

let product = []

let cartProducts = []




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

  http.get('/product/:id', ({params}) => {
    let productId = products.findIndex((product) => {
      return product.id == params.id
    })
    // console.log(`Captured a "DELETE /posts/${params.id}" request`)
    return HttpResponse.json(products[productId])
  }),
  http.get('/product/1', () => {
    return HttpResponse.json(products[1])
  }),

  http.post('/addCart/', async ({ request }) => {
    const newProduct = await request.json()



    
    cartProducts.push(newProduct)
 
    return HttpResponse.json(newProduct, { status: 201 })
  }),

  http.get('/cartProducts' , () => {
    return HttpResponse.json(cartProducts)
  }),

  http.get('/reviews/', () => {
    return HttpResponse.json(reviews)
  })

  // http.delete('/cart/:id')

]