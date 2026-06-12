const products = [
  {
    id:1,
    name:"Rare Beauty Blush",
    price:42,
    cat:"makeup",
    img:"https://images.unsplash.com/photo-1612810436541",
    desc:"Луксозен руж"
  },
  {
    id:2,
    name:"Glow Serum",
    price:25,
    cat:"face",
    img:"https://images.unsplash.com/photo-1612810436542",
    desc:"Сияйна кожа"
  },
  {
    id:3,
    name:"Hair Oil",
    price:55,
    cat:"hair",
    img:"https://images.unsplash.com/photo-1616671276441",
    desc:"Грижа за коса"
  },
  {
    id:4,
    name:"Beauty Blender",
    price:18,
    cat:"accessories",
    img:"https://images.unsplash.com/photo-1620916566398",
    desc:"Грим гъбичка"
  }
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
        <p>${p.price} лв</p>
        <button onclick="openProduct(${p.id})">Преглед</button>
        <button onclick="addCart(${p.id})">🛒</button>
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
  document.getElementById("mPrice").innerText = current.price + " лв";

  document.getElementById("modal").style.display="block";
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}

/* CART */
function addCart(id){
  cart.push(products.find(p=>p.id===id));
  alert("Добавено в количката 🛒");
}

/* FILTER */
function filter(cat){
  if(cat==="all") render();
  else render(products.filter(p=>p.cat===cat));
}

/* SEARCH */
document.getElementById("search").addEventListener("input", e=>{
  render(products.filter(p=>
    p.name.toLowerCase().includes(e.target.value.toLowerCase())
  ));
});

render();
