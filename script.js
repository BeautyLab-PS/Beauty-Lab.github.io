const products = [

/* FACE */

{
id:1,
name:"Tatcha ",
price:70,
category:"face",
image:"images/face1.jpg",
description:"Indigo Overnight Repair Redness Reducing Barrier Cream Moisturizer"
},

{
id:2,
name:"CeraVe Cleanser",
price:24.99,
category:"face",
image:"images/face2.jpg",
description:"Нежен почистващ гел."
},

{
id:3,
name:"La Roche Posay Effaclar",
price:29.99,
category:"face",
image:"images/face3.jpg",
description:"Грижа за проблемна кожа."
},

/* BODY */

{
id:11,
name:"Sol de Janeiro Cream",
price:49.99,
category:"body",
image:"images/body1.jpg",
description:"Популярен крем за тяло."
},

{
id:12,
name:"Victoria Secret Lotion",
price:35.99,
category:"body",
image:"images/body2.jpg",
description:"Хидратиращ лосион."
},

{
id:13,
name:"Dove Body Scrub",
price:16.99,
category:"body",
image:"images/body3.jpg",
description:"Нежен скраб."
},

/* HAIR */

{
id:21,
name:"Kerastase Oil",
price:59.99,
category:"hair",
image:"images/hair1.jpg",
description:"Подхранващо масло."
},

{
id:22,
name:"Olaplex No.3",
price:54.99,
category:"hair",
image:"images/hair2.jpg",
description:"Възстановяваща терапия."
},

{
id:23,
name:"Moroccanoil",
price:49.99,
category:"hair",
image:"images/hair3.jpg",
description:"Арганово масло."
},

/* MAKEUP */

{
id:31,
name:"Rare Beauty Blush",
price:42.99,
category:"makeup",
image:"images/makeup1.jpg",
description:"Течен руж."
},

{
id:32,
name:"Maybelline Sky High",
price:19.99,
category:"makeup",
image:"images/makeup2.jpg",
description:"Спирала за обем."
},

{
id:33,
name:"Fenty Gloss Bomb",
price:39.99,
category:"makeup",
image:"images/makeup3.jpg",
description:"Гланц за устни."
},

/* ACCESSORIES */

{
id:41,
name:"Brush Set",
price:34.99,
category:"accessories",
image:"images/accessory1.jpg",
description:"Комплект четки."
},

{
id:42,
name:"Beauty Blender",
price:14.99,
category:"accessories",
image:"images/accessory2.jpg",
description:"Гъбичка за грим."
},

{
id:43,
name:"LED Mirror",
price:69.99,
category:"accessories",
image:"images/accessory3.jpg",
description:"LED огледало."
}

];

let cart = [];
let favorites = [];
let selectedProduct = null;

/* PRODUCTS */

function renderProducts(items){

const container =
document.getElementById("productsContainer");

container.innerHTML = "";

items.forEach(product=>{

container.innerHTML += `

<div class="product-card">

<img src="${product.image}"
alt="${product.name}">

<div class="product-info">

<h3>${product.name}</h3>

<p>${product.description}</p>

<div class="product-price">
${product.price.toFixed(2)} лв
</div>

<div class="product-buttons">

<button
class="view-btn"
onclick="openProduct(${product.id})">
Преглед </button>

<button
class="cart-btn"
onclick="addToCart(${product.id})">
🛒 </button>

</div>

</div>

</div>

`;

});

}

/* FILTER */

function filterProducts(category){

if(category === "all"){

renderProducts(products);

return;

}

const filtered =
products.filter(
product => product.category === category
);

renderProducts(filtered);

}

/* SEARCH */

document
.getElementById("searchInput")
.addEventListener("input", function(){

const value =
this.value.toLowerCase();

const filtered =
products.filter(product =>

product.name
.toLowerCase()
.includes(value)

);

renderProducts(filtered);

});

/* PRODUCT MODAL */

function openProduct(id){

selectedProduct =
products.find(
product => product.id === id
);

document
.getElementById("modalImage")
.src =
selectedProduct.image;

document
.getElementById("modalTitle")
.textContent =
selectedProduct.name;

document
.getElementById("modalDescription")
.textContent =
selectedProduct.description;

document
.getElementById("modalPrice")
.textContent =
selectedProduct.price.toFixed(2)

* " лв";

document
.getElementById("productModal")
.style.display =
"block";

}

document
.querySelector(".close-modal")
.addEventListener("click", ()=>{

document
.getElementById("productModal")
.style.display =
"none";

});

/* CART */

function addToCart(id){

const product =
products.find(
product => product.id === id
);

cart.push(product);

updateCart();

}

function updateCart(){

const cartItems =
document.getElementById("cartItems");

cartItems.innerHTML = "";

let total = 0;

cart.forEach(item=>{

total += item.price;

cartItems.innerHTML +=
`

<p>
${item.name}
-
${item.price.toFixed(2)} лв
</p>
`;

});

document
.getElementById("cartTotal")
.textContent =
"Общо: " +
total.toFixed(2) +
" лв";

}

/* FAVORITES */

function addToFavorites(id){

const product =
products.find(
product => product.id === id
);

favorites.push(product);

updateFavorites();

}

function updateFavorites(){

const container =
document.getElementById("favoriteItems");

container.innerHTML = "";

favorites.forEach(item=>{

container.innerHTML +=
`

<p>❤️ ${item.name}</p>
`;

});

}

/* SIDEBARS */

const cartSidebar =
document.getElementById("cartSidebar");

const favoritesSidebar =
document.getElementById("favoritesSidebar");

document
.getElementById("cartBtn")
.addEventListener("click",()=>{

cartSidebar.classList.toggle("active");

});

document
.getElementById("favoritesBtn")
.addEventListener("click",()=>{

favoritesSidebar.classList.toggle("active");

});

document
.getElementById("closeCart")
.addEventListener("click",()=>{

cartSidebar.classList.remove("active");

});

document
.getElementById("closeFavorites")
.addEventListener("click",()=>{

favoritesSidebar.classList.remove("active");

});

/* START */

renderProducts(products);

