import render from "./render.js"
function deleteItem (goodsList, arr) {
  document.querySelector('.cart').addEventListener('click', function (e) {
    e.preventDefault
    if (e.target.tagName === 'BUTTON') {
      arr.splice(e.target.id, 1)
      localStorage.setItem('order-data', JSON.stringify(arr))


      render(goodsList)
    }
  })
}

export default deleteItem