const products = [
  // MAKEUP (20+ REAL BRANDS STYLE)
  {id:1,name:"Dior Lip Glow",price:55,cat:"makeup",img:"https://images.unsplash.com/photo-1596704017254",desc:"Hydrating luxury lip balm"},
  {id:2,name:"Rare Beauty Blush",price:42,cat:"makeup",img:"https://images.unsplash.com/photo-1612810436541",desc:"Soft natural blush"},
  {id:3,name:"NYX Butter Gloss",price:18,cat:"makeup",img:"https://images.unsplash.com/photo-1612810436542",desc:"Shiny lip gloss"},
  {id:4,name:"Fenty Foundation",price:65,cat:"makeup",img:"https://images.unsplash.com/photo-1586105251261",desc:"Full coverage foundation"},
  {id:5,name:"MAC Powder",price:50,cat:"makeup",img:"https://images.unsplash.com/photo-1620916566398",desc:"Matte finish powder"},

  // FACE
  {id:10,name:"The Ordinary Serum",price:25,cat:"face",img:"https://images.unsplash.com/photo-1612810436542",desc:"Hydration serum"},
  {id:11,name:"CeraVe Moisturizer",price:30,cat:"face",img:"https://images.unsplash.com/photo-1612810436541",desc:"Dermatologist cream"},

  // HAIR
  {id:20,name:"Kerastase Hair Oil",price:70,cat:"hair",img:"https://images.unsplash.com/photo-1616671276441",desc:"Luxury hair repair"},
  {id:21,name:"Moroccanoil Treatment",price:60,cat:"hair",img:"https://images.unsplash.com/photo-1620916566398",desc:"Smooth shiny hair"},

  // BODY
  {id:30,name:"Victoria Secret Lotion",price:28,cat:"body",img:"https://images.unsplash.com/photo-1596704017254",desc:"Soft scented skin"},
  {id:31,name:"Nivea Body Cream",price:15,cat:"body",img:"https://images.unsplash.com/photo-1612810436542",desc:"Daily hydration"},

  // ACCESSORIES
  {id:40,name:"Real Techniques Brush Set",price:35,cat:"accessories",img:"https://images.unsplash.com/photo-1620916566398",desc:"Pro makeup brushes"},
  {id:41,name:"Beauty Blender",price:18,cat:"accessories",img:"https://images.unsplash.com/photo-1612810436541",desc:"Flawless blending"}
];

let cart = [];
let current = null;

/* RENDER */
function render(list = products){
  const box = document.getElementById("products");
  box.innerHTML = "";

  list.forEach(p=>{
    box.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>${p.price} €</p>
        <button onclick="openProduct(${p.id})">View</button>
        <button onclick="addToCartById(${p.id})">🛒</button>
      </div>
    `;
  });
}

/* PRODUCT */
function openProduct(id){
  current = products.find(p=>p.id===id);

  document.getElementById("mImg").src = current.img;
  document.getElementById("mName").innerText = current.name;
  document.getElementById("mDesc").innerText = current.desc;
  document.getElementById("mPrice").innerText = current.price + " €";

  document.getElementById("modal").style.display="block";
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}

/* CART */
function addToCartById(id){
  cart.push(products.find(p=>p.id===id));
  updateCart();
}

function addToCart(){
  cart.push(current);
  updateCart();
  closeModal();
}

function updateCart(){
  document.getElementById("cartItems").innerHTML =
    cart.map(p=>`<p>${p.name} - ${p.price}€</p>`).join("");
}

/* CART PANEL */
function openCart(){
  document.getElementById("cart").style.display="block";
}

/* CHECKOUT */
function openCheckout(){
  document.getElementById("checkout").style.display="block";

  document.getElementById("checkoutItems").innerHTML =
    cart.map(p=>`<p>${p.name} - ${p.price}€</p>`).join("");
}

function closeCheckout(){
  document.getElementById("checkout").style.display="none";
}

function pay(){
  alert("Payment successful 💳✨");
  cart = [];
  updateCart();
  closeCheckout();
}

/* FILTER */
function filter(cat){
  if(cat==="all") render();
  else render(products.filter(p=>p.cat===cat));
}

/* SEARCH */
document.getElementById("search").addEventListener("input",(e)=>{
  render(products.filter(p=>
    p.name.toLowerCase().includes(e.target.value.toLowerCase())
  ));
});

render();
