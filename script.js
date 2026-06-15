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
name:"Summer Fridays ",
price:15.50,
category:"face",
image:"images/face2.jpg",
description:"Mini Pink Dew Gel Cleanser."
},

{
id:3,
name:"La Roche Posay Effaclar",
price:29.99,
category:"face",
image:"images/face3.jpg",
description:"Грижа за проблемна кожа."
},
 
{
id:4,
name:"Peace Out",
price:6.30,
category:"face",
image:"https://www.sephora.com/productimages/sku/s2860534-main-zoom.jpg?imwidth=1224",
description:"Overnight Barrier Hydrating Bio-Collagen Recovery Mask."
},

{
id:5,
name:"ILIA",
price:28.30,
category:"face",
image:"https://www.sephora.com/productimages/sku/s2860534-main-zoom.jpg?imwidth=1224",
description:"Sun Serum Mineral Sunscreen SPF 50 with 8-Hour Oil Control"
},


/* BODY */

{
id:6,
name:"Sol de Janeiro",
price:34.00,
category:"body",
image:"images/body1.jpg",
description:"Delícia Drench™ Jet Set"
},

{
id:7,
name:"Drunk Elephant",
price:25.99,
category:"body",
image:"images/body2.jpg",
description:"Scrubbi Bamboes™ Body Cleanser"
},

{
id:8,
name:"Salt & Stone",
price:48.99,
category:"body",
image:"images/body3.jpg",
description:"Santal & Vetiver Hydrating Body Lotion with Niacinamide"
},

{
id:9,
name:"Sol de Janeiro",
price:31.99,
category:"body",
image:"images/body3.jpg",
description:"Rio Radiance™ SPF 50 Body Spray Sunscreen with Niacinamide"
},

{
id:10,
name:"Saint Jane Beauty",
price:57.99,
category:"body",
image:"images/body3.jpg",
description:"Deep Sleep Bath Salts with Magnesium & Peptides"
},
 
/* HAIR */

{
id:11,
name:"Gisou"
category:"hair",
image:"images/hair1.jpg",
description:"Honey Gloss Ceramide Therapy Hydrating Shampoo"
},

{
id:12,
name:"Kérastase",
price:38.99,
category:"hair",
image:"images/hair2.jpg",
description:"Gloss Absolu Glaze Drops Anti-Frizz Hair Oil"
},

{
id:13,
name:"Vegamour",
price:35.99,
category:"hair",
image:"images/hair3.jpg",
description:"GRO Dry Shampoo for Thinning Hair"
},

{
id:14,
name:"COLOR WOW",
price:30.00,
category:"hair",
image:"images/hair3.jpg",
description:"Cult Favorite Firm + Flexible Hairspray"
},

{
id:15,
name:"OUAI",
price:37.99,
category:"hair",
image:"images/hair3.jpg",
description:"Treatment Mask for Thick Hair"
},

/* MAKEUP */

{
id:16,
name:"Yves Saint Laurent",
price:48.99,
category:"makeup",
image:"images/makeup1.jpg",
description:"Skin Affair Soft Glow Cushion Foundation"
},

{
id:17,
name:"Gucci",
price:36.00,
category:"makeup",
image:"images/makeup2.jpg",
description:"L'Obscur Lengthening Mascara"
},

{
id:18,
name:"Rare Beauty by Selena Gomez",
price:39.99,
category:"makeup",
image:"images/makeup3.jpg",
description:"Soft Pinch Tinted Lip Oil Stain"
},

{
id:19,
name:"MILK MAKEUP",
price:24.00,
category:"makeup",
image:"images/makeup3.jpg",
description:"Dewy Cream Highlighter Stick"
},

{
id:20,
name:"Urban Decay",
price:55.99,
category:"makeup",
image:"images/makeup3.jpg",
description:"Naked Shaped Cool-Toned Makeup Palette for Eyes & Face"
},

/* ACCESSORIES */

{
id:21,
name:"SEPHORA COLLECTION",
price:65.00,
category:"accessories",
image:"images/accessory1.jpg",
description:"The Total Brush Set"
},

{
id:22,
name:"Laura Mercier",
price:18.00,
category:"accessories",
image:"images/accessory2.jpg",
description:"Velour Puff"
},

{
id:23,
name:"Sincerely Yours",
price:18.00,
category:"accessories",
image:"images/accessory3.jpg",
description:"Sincerely Yours Blue Cloud Case Travel Bag"
}

{
id:24,
name:"Vegamour",
price:48.00,
category:"accessories",
image:"images/accessory3.jpg",
description:"0.25 mm GRO+ Advanced Scalp Dermaroller"
}

{
id:25,
name:"tarte",
price:18.00,
category:"accessories",
image:"images/accessory3.jpg",
description:"picture perfect™ lash curler"
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

