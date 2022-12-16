import render from "./render.js"
function subOrder (goodsList, arr) {
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
      render(goodsList)
      count.previousElementSibling.previousElementSibling.value = 1
    }
  })

}

export default subOrder