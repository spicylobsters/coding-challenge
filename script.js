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

renderProduct()
subOrder()
render()
deleteItem()

//1.display product 
function renderProduct () {
  let products = ''
  goodsList.forEach((item) => {
    const { id, name, price, picture } = item
    products += `
<div class="item">
  <img src=${picture} alt="">
  <p class="name">${name}</p>
  <p class="price">${price}</p>
  <div class="num">
            <a href="javascript:;" id="minus">-</a>
            <input type="text" value="1">
            <a href="javascript:;" id="plus">+</a>
            <button id=${id}>Add to cart</button>
  </div>
  

</div>
`
  })
  document.querySelector('.list').innerHTML = products

}



//2.add or min number for each product submit order

function subOrder () {
  document.querySelector('.list').addEventListener('click', function (e) {
    e.preventDefault
    const count = e.target
    if (count.tagName === 'A') {
      if (count.id === 'plus') {
        count.previousElementSibling.value++
      } else if (count.id === 'minus') {
        if (count.nextElementSibling.value > 1) {
          count.nextElementSibling.value--
        }
      }
    }
    if (count.tagName === 'BUTTON') {
      const num = count.previousElementSibling.previousElementSibling.value
      const order = {}
      order.productId = count.id
      order.amount = num

      const index = arr.findIndex((item) => item.productId === count.id)

      if (index >= 0) {
        arr[index].amount = num
      } else {
        arr.push(order)
      }

      localStorage.setItem('order-data', JSON.stringify(arr))
      render()
      count.previousElementSibling.previousElementSibling.value = 1
    }
  })

}



//3. display cart
function render () {
  let totalMoney = []
  document.querySelector('.cart').innerHTML = arr
    .map((item, index) => {
      const { productId, amount } = item

      const product = goodsList.find((item) => item.id === productId)

      const subTotal = ((product.price * 100 * amount) / 100).toFixed(2)
      totalMoney.push(subTotal)
      return `
  <div class="order">
    <img src=${product.picture} alt="">
    <p class="name">${product.name} </p>
    <p class="price">${product.price}</p>
    <p class="count">x${amount}</p>
    <p class="sub-total">${subTotal}</p>
    <button id=${index}>delete</button>
  </div>
`
    })
    .join('')

  const total = totalMoney.reduce(
    (prev, item) => prev + (item * 100) / 100,
    0
  )

  document.querySelector('.amount').innerHTML = total.toFixed(2)
}



//4.delete function

function deleteItem () {
  document.querySelector('.cart').addEventListener('click', function (e) {
    e.preventDefault
    if (e.target.tagName === 'BUTTON') {
      arr.splice(e.target.id, 1)
      localStorage.setItem('order-data', JSON.stringify(arr))
      render()
    }
  })
}



