

function render (goodsList) {

  const data = localStorage.getItem('order-data')

  const arr = data ? JSON.parse(data) : []
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

export default render