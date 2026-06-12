const products = [
  { id: 1, name: "Rare Beauty Blush", price: 42, cat: "makeup", img: "https://images.unsplash.com/photo-1612810436541", desc: "Луксозен руж с естествен ефект" },
  { id: 2, name: "Glow Serum", price: 25, cat: "face", img: "https://images.unsplash.com/photo-1612810436542", desc: "Сияйна и гладка кожа" },
  { id: 3, name: "Kerastase Hair Oil", price: 55, cat: "hair", img: "https://images.unsplash.com/photo-1616671276441", desc: "Професионална грижа за коса" },

  // ✨ Accessories
  { id: 4, name: "Beauty Blender", price: 18, cat: "accessories", img: "https://images.unsplash.com/photo-1620916566398", desc: "Перфектно нанасяне на грим" },
  { id: 5, name: "Brush Set", price: 35, cat: "accessories", img: "https://images.unsplash.com/photo-1596704017254", desc: "Професионални четки за грим" },
  { id: 6, name: "LED Mirror", price: 60, cat: "accessories", img: "https://images.unsplash.com/photo-1586105251261", desc: "Луксозно LED огледало" }
];

let cart = [];
let fav = [];
let current = null;

function render(list = products) {
  const box = document.getElementById("products");
  box.innerHTML = "";

  list.forEach(p => {
    box.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>${p.price} лв</p>
        <button onclick="openProduct(${p.id})">Преглед</button>
        <button onclick="addCart(${p.id})">🛒</button>
        <button onclick="addFav(${p.id})">❤️</button>
      </div>
    `;
  });
}

function openProduct(id){
  current = products.find(p => p.id === id);

  document.getElementById("mImg").src = current.img;
  document.getElementById("mName").innerText = current.name;
  document.getElementById("mDesc").innerText = current.desc;
  document.getElementById("mPrice").innerText = current.price + " лв";

  document.getElementById("modal").style.display = "block";
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}

function addCart(id){
  cart.push(products.find(p => p.id === id));
  updateCart();
  alert("Добавено в количката 🛒");
}

function addToCart(){
  cart.push(current);
  updateCart();
  closeModal();
}

function updateCart(){
  document.getElementById("cartItems").innerHTML =
    cart.map(p => `<p>${p.name} - ${p.price} лв</p>`).join("");
}

function addFav(id){
  fav.push(products.find(p => p.id === id));
  updateFav();
  alert("Добавено в любими ❤️");
}

function updateFav(){
  document.getElementById("favItems").innerHTML =
    fav.map(p => `<p>❤️ ${p.name}</p>`).join("");
}

function showCart(){
  togglePanel("cart");
  updateCart();
}

function showFav(){
  togglePanel("fav");
  updateFav();
}

function togglePanel(id){
  const el = document.getElementById(id);
  el.style.display = el.style.display === "block" ? "none" : "block";
}

function filter(cat){
  if(cat === "all") render();
  else render(products.filter(p => p.cat === cat));
}

document.getElementById("search").addEventListener("input", e => {
  render(products.filter(p =>
    p.name.toLowerCase().includes(e.target.value.toLowerCase())
  ));
});

render();
renderProducts();
