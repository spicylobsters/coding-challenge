import renderProduct from "./modules/productrender.js"
import subOrder from "./modules/subOrder.js"
import render from "./modules/render.js"
import deleteItem from "./modules/delete.js"

const goodsList = [
  {
    id: '1001',
    name: 'Insta360 X3 Action Camera',
    price: '799.00',
    picture:
      'https://cdn.shopify.com/s/files/1/0024/9803/5810/products/609056-Product-0-I-637981708640778290_1280x.jpg?v=1662618189',
  },
  {
    id: '1002',
    name: 'Lenovo Gaming Laptop [RTX 3070Ti]',
    price: '3899.00',
    picture:
      'https://cdn.shopify.com/s/files/1/0024/9803/5810/products/593127-Product-0-I-637916638379077616_fde5a615-1ef1-4c6e-9a64-b169fed487ec_1280x.jpg?v=1661407027',
  },
  {
    id: '1003',
    name: 'Apple iPhone 14 Pro(Deep Purple)',
    price: '2199.00',
    picture:
      'https://cdn.shopify.com/s/files/1/0024/9803/5810/products/596696-Product-0-I-637982217440527446_1280x.jpg?v=1662700888',
  },
  {
    id: '1004',
    name: 'Samsung Galaxy Watch5',
    price: '699.00',
    picture:
      'https://cdn.shopify.com/s/files/1/0024/9803/5810/products/597834-Product-0-I-637955540577121615_1280x.jpg?v=1660099911',
  },
]


const data = localStorage.getItem('order-data')
const arr = data ? JSON.parse(data) : []

//1.display product
renderProduct(goodsList)

//2.add or min number for each product submit order
subOrder(goodsList, arr)

//3. display cart
render(goodsList)

//4.delete function
deleteItem(goodsList, arr)




