const products = [
  {
    id: 1,
    name: "Glow Serum",
    price: 29.99,
    category: "face",
    img: "https://images.unsplash.com/photo-1612810436541-336d9c3f6a3a",
    desc: "Серум за сияйна и гладка кожа."
  },
  {
    id: 2,
    name: "Body Lotion Pink Velvet",
    price: 19.99,
    category: "body",
    img: "https://images.unsplash.com/photo-1616671276441-1b9b8c2f3c8b",
    desc: "Хидратиращ луксозен лосион."
  },
  {
    id: 3,
    name: "Hair Repair Mask",
    price: 24.99,
    category: "hair",
    img: "https://images.unsplash.com/photo-1620916566398-39f2f2f4d1f3",
    desc: "Възстановяваща маска за коса."
  },
  {
    id: 4,
    name: "Luxury Lip Gloss",
    price: 14.99,
    category: "makeup",
    img: "https://images.unsplash.com/photo-1596704017254-9b121068fb31",
    desc: "Сладък гланц с блясък."
  }
];

let cart = [];
let favorites = [];
let currentProduct = null;

function showSection(id){
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function renderProducts(list = products){
  const container = document.getElementById("products");
  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>${p.price} лв</p>
        <button onclick="openProduct(${p.id})">Преглед</button>
        <button onclick="addToCart(${p.id})">🛒</button>
        <button onclick="addFav(${p.id})">❤️</button>
      </div>
    `;
  });
}

function openProduct(id){
  const p = products.find(x => x.id === id);
  currentProduct = p;

  document.getElementById("modalImg").src = p.img;
  document.getElementById("modalTitle").innerText = p.name;
  document.getElementById("modalDesc").innerText = p.desc;
  document.getElementById("modalPrice").innerText = p.price + " лв";

  document.getElementById("modal").style.display = "block";
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}

function addToCart(id){
  const p = products.find(x => x.id === id);
  cart.push(p);
  alert("Добавено в количката!");
  renderCart();
}

function addToCartFromModal(){
  cart.push(currentProduct);
  alert("Добавено!");
  renderCart();
}

function renderCart(){
  const c = document.getElementById("cartItems");
  c.innerHTML = cart.map(p => `<p>${p.name} - ${p.price} лв</p>`).join("");
}

function addFav(id){
  const p = products.find(x => x.id === id);
  favorites.push(p);
  renderFav();
}

function renderFav(){
  const f = document.getElementById("favItems");
  f.innerHTML = favorites.map(p => `<p>❤️ ${p.name}</p>`).join("");
}

function filterCategory(cat){
  if(cat === "all") renderProducts();
  else renderProducts(products.filter(p => p.category === cat));
}

document.getElementById("search").addEventListener("input", e => {
  const val = e.target.value.toLowerCase();
  renderProducts(products.filter(p => p.name.toLowerCase().includes(val)));
});

renderProducts();
