let cart = JSON.parse(localStorage.getItem("cart")) || [];
let favorites = JSON.parse(localStorage.getItem("fav")) || [];

/* =====================
   SAVE STATE
===================== */
function save(){
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("fav", JSON.stringify(favorites));
}

/* =====================
   NOTIFICATION (TOAST)
===================== */
function toast(msg){
    let t = document.createElement("div");
    t.innerText = msg;

    t.style.position = "fixed";
    t.style.bottom = "20px";
    t.style.right = "20px";
    t.style.background = "#ff3d7f";
    t.style.color = "white";
    t.style.padding = "12px 16px";
    t.style.borderRadius = "10px";
    t.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
    t.style.zIndex = "9999";
    t.style.animation = "fade 0.3s ease";

    document.body.appendChild(t);

    setTimeout(()=>t.remove(), 2000);
}

/* =====================
   ADD TO CART
===================== */
function addToCart(name, price){
    cart.push({name, price});
    save();
    updateCart();
    toast("Добавено в количката 💖");
}

/* =====================
   FAVORITES
===================== */
function toggleFav(name){
    if(favorites.includes(name)){
        favorites = favorites.filter(f=>f!==name);
        toast("Премахнато от любими");
    } else {
        favorites.push(name);
        toast("Добавено в любими 💕");
    }
    save();
}

/* =====================
   CART RENDER
===================== */
function updateCart(){
    let box = document.getElementById("cartBox");
    if(!box) return;

    box.innerHTML = "";
    let total = 0;

    cart.forEach((item, i)=>{
        total += item.price;

        box.innerHTML += `
        <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
            <span>${item.name}</span>
            <b>${item.price} лв</b>
        </div>`;
    });

    let totalEl = document.getElementById("total");
    if(totalEl) totalEl.innerText = "Общо: " + total + " лв";
}

/* =====================
   CHECKOUT
===================== */
function checkout(){
    if(cart.length === 0){
        toast("Количката е празна!");
        return;
    }

    cart = [];
    save();
    updateCart();
    toast("Поръчката е успешна 💖✨");
}

/* =====================
   SEARCH FUNCTION
===================== */
function searchProducts(){
    let input = document.getElementById("searchInput");
    if(!input) return;

    let filter = input.value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card=>{
        let text = card.innerText.toLowerCase();

        if(text.includes(filter)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

/* =====================
   PRODUCT ENHANCEMENT
   (adds ♥ button automatically)
===================== */
function enhanceProducts(){
    document.querySelectorAll(".card").forEach(card=>{
        if(card.querySelector(".favBtn")) return;

        let name = card.querySelector("h4")?.innerText || "";

        let btn = document.createElement("button");
        btn.innerText = "♥ Любими";
        btn.className = "favBtn";

        btn.style.background = "#111";
        btn.style.marginTop = "5px";

        btn.onclick = ()=>toggleFav(name);

        card.appendChild(btn);
    });
}

/* =====================
   INIT LOOP
===================== */
setInterval(()=>{
    enhanceProducts();
}, 1000);

/* initial load */
updateCart();
