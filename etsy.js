



let template = `
<div class="products">
  <img src ="">
  <p class="title"></p>
  <p class="maker"></p>
  <p class="product-price"></p>
</div>`

let products = document.querySelector(".json");

const viewitems = items.results.map(a => {
  return {
    title: a.title,
    shop: a.Shop.shop_name,
    price: a.price,
    image: unescape(a.Images[0].url_170x135)
  }
});








let jsonstr = viewitems.map(a => {
  return `
  <div class="products">
    <img src ="${a.image}">
    <p class="title">${a.title.substring(0, 25)}...</p>
    <p class="maker">${a.shop}</p>
    <p class="product-price">$${a.price}</p>
  </div>
  `
}).join("")

products.innerHTML = jsonstr
