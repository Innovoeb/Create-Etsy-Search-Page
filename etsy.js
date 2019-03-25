



let template = `
<div class="products">
  <img src ="">
  <p class="title"></p>
  <p class="maker"></p>
  <p class="product-price"></p>
</div>`

let products = document.querySelector(".json");









let jsonstr = items.map(item => {
return `
  <div class="products">
  /<img src ="${a.Images}">
    <p class="title">${a.title}</p>
    <p class="maker">${a.Shop}</p>
    <p class="product-price">${a.price}</p>
  </div>
  `
}).join("")
