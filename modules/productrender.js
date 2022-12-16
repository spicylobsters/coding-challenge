function renderProduct (goodsList) {
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

export default renderProduct