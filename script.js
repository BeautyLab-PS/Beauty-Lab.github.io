const products = [
  // 🌸 FACE (20)
  {id:1,name:"Glow Serum",price:25,cat:"face",img:"https://images.unsplash.com/photo-1612810436542",desc:"Сияйна кожа и хидратация"},
  {id:2,name:"Hydra Cream",price:30,cat:"face",img:"https://images.unsplash.com/photo-1620916566398",desc:"Дълбока хидратация"},
  {id:3,name:"Vitamin C Serum",price:35,cat:"face",img:"https://images.unsplash.com/photo-1596704017254",desc:"Изравнява тена"},
  {id:4,name:"Night Repair",price:40,cat:"face",img:"https://images.unsplash.com/photo-1586105251261",desc:"Нощна грижа"},
  {id:5,name:"Clean Toner",price:18,cat:"face",img:"https://images.unsplash.com/photo-1612810436541",desc:"Почиства кожата"},

  // 🧴 BODY (20)
  {id:21,name:"Body Lotion Pink",price:20,cat:"body",img:"https://images.unsplash.com/photo-1612810436542",desc:"Мека кожа"},
  {id:22,name:"Body Scrub",price:22,cat:"body",img:"https://images.unsplash.com/photo-1620916566398",desc:"Ексфолиране"},
  {id:23,name:"Shower Gel Luxury",price:18,cat:"body",img:"https://images.unsplash.com/photo-1596704017254",desc:"Свеж аромат"},

  // 💇 HAIR (20)
  {id:41,name:"Hair Oil",price:45,cat:"hair",img:"https://images.unsplash.com/photo-1616671276441",desc:"Блясък и сила"},
  {id:42,name:"Repair Mask",price:38,cat:"hair",img:"https://images.unsplash.com/photo-1612810436541",desc:"Възстановява косата"},
  {id:43,name:"Keratin Spray",price:32,cat:"hair",img:"https://images.unsplash.com/photo-1620916566398",desc:"Изглажда косата"},

  // 💄 MAKEUP (20)
  {id:61,name:"Rare Blush",price:42,cat:"makeup",img:"https://images.unsplash.com/photo-1612810436541",desc:"Натурален руж"},
  {id:62,name:"Lip Gloss Pink",price:19,cat:"makeup",img:"https://images.unsplash.com/photo-1596704017254",desc:"Блясък за устни"},
  {id:63,name:"Foundation Glow",price:50,cat:"makeup",img:"https://images.unsplash.com/photo-1612810436542",desc:"Перфектно покритие"},

  // ✨ ACCESSORIES (20)
  {id:81,name:"Beauty Blender",price:18,cat:"accessories",img:"https://images.unsplash.com/photo-1620916566398",desc:"Грим гъбичка"},
  {id:82,name:"Brush Set",price:35,cat:"accessories",img:"https://images.unsplash.com/photo-1596704017254",desc:"Четки за грим"},
  {id:83,name:"LED Mirror",price:60,cat:"accessories",img:"https://images.unsplash.com/photo-1586105251261",desc:"Луксозно огледало"}
];

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
      </div>
    `;
  });
}

/* PRODUCT PAGE */
function openProduct(id){
  current = products.find(p=>p.id===id);

  document.getElementById("pImg").src = current.img;
  document.getElementById("pName").innerText = current.name;
  document.getElementById("pDesc").innerText = current.desc;
  document.getElementById("pPrice").innerText = current.price + " лв";

  document.getElementById("productPage").style.display = "block";
}

function closeProduct(){
  document.getElementById("productPage").style.display = "none";
}

function addCart(){
  alert(current.name + " добавен в количката 🛒");
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
