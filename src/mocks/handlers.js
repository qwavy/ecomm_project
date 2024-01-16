// 1. Import the "HttpResponse" class from the library.
import { http, HttpResponse } from 'msw'
import products from '../storage/data.json'
import reviewsSite from '../storage/reviewsSite.json'
import news from '../storage/news.json'
const url = '/api/test/'

let laptops = []
let desktops = []
let monitors = []
let motherboards = []

let product = []

let cartProducts = []
let reviewsProducts = []




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
  http.get('/products/motherboards', () => {
    return HttpResponse.json(motherboards)
  }),

  http.post('/product/:id', async (req, res, ctx) => {
    const { params, body } = req
    let productId = products.findIndex((product) => {
      return product.id == params.id
    })
    return HttpResponse.json(products[productId])
  }),



  http.post('/addCart/', async ({ request }) => {
    const newProduct = await request.json()



    cartProducts.push(newProduct)

    return HttpResponse.json(newProduct, { status: 201 })
  }),
  http.post('/addReviews/', async ({ request }) => {
    const newReview = await request.json()

    reviewsProducts.push(newReview)

    return HttpResponse.json(newReview, { status: 201 })

  }),

  http.get('/cartProducts', () => {
    return HttpResponse.json(cartProducts)
  }),

  http.get('/reviews/', () => {
    return HttpResponse.json(reviewsSite)
  }),


  http.get('/news', () => {
    return HttpResponse.json(news)
  }),

  http.post('/news/:id', async (req, res, ctx) => {

    const { params, body } = req

    let newsId = news.findIndex((item) => {
      return item.id == params.id
    })

    return HttpResponse.json(news[newsId])
  })



  // http.delete('/cart/:id')

]