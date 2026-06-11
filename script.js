const data = {
body:[
["Body Lotion Rose",12],["Vanilla Scrub",14],["Coconut Gel",10],
["Almond Oil",15],["Hand Cream",8],["Lavender Soap",7],
["Body Mist",11],["Bath Foam",13],["Shea Cream",16],
["Coffee Scrub",14],["Deodorant",9],["Aloe Gel",10],
["Fresh Lotion",12],["Body Balm",13],["Soft Cream",15]
],
hair:[
["Repair Shampoo",14],["Silk Balm",13],["Argan Mask",18],
["Shine Serum",17],["Heat Spray",12],["Curl Cream",15],
["Hair Oil",16],["Volume Shampoo",14],["Keratin Mask",19],
["Anti-frizz",15],["Gloss Spray",13],["Herbal Shampoo",12],
["Coconut Balm",13],["Hydra Mask",18],["Pro Serum",20]
],
face:[
["Face Foam",12],["Glow Toner",14],["Vitamin C Serum",18],
["Hydra Cream",16],["Clay Mask",15],["Soft Scrub",13],
["SPF 50",20],["Night Cream",17],["Eye Patches",19],
["Cleanser",14],["Hyaluron Serum",22],["Sheet Mask",15],
["BB Cream",16],["Gel Wash",13],["Face Balm",14]
],
makeup:[
["Lipstick",10],["Lip Gloss",9],["Foundation",18],
["Mascara",15],["Blush",12],["Eyeshadow",25],
["Highlighter",14],["BB Cream",16],["Powder",13],
["Brow Gel",11],["Contour",20],["Fix Spray",15],
["Lip Pencil",8],["Primer",19],["Makeup Oil",17]
],
acc:[
["Brush",12],["Sponge",10],["Hair Brush",14],
["Hair Ties",5],["Headband",8],["Brush Set",20],
["Mirror",15],["Cosmetic Bag",18],["Tweezers",7],
["Nail File",6],["Clips",5],["Manicure Set",22],
["Pins",6],["Beauty Case",30],["Scrunchies",9]
]
};

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* RENDER */
function render(list,id){
let box=document.getElementById(id);
box.innerHTML="";
list.forEach(p=>{
box.innerHTML+=`
<div class="card">
<img src="https://source.unsplash.com/400x300/?beauty,cosmetic" />
<h4>${p[0]}</h4>
<p>${p[1]} лв</p>
<button onclick="add('${p[0]}',${p[1]})">Добави</button>
</div>`;
});
}

/* ADD */
function add(n,p){
cart.push({n,p});
save();
update();
toast("Добавено 💖");
}

/* CART */
function update(){
let box=document.getElementById("cartBox");
let total=0;
box.innerHTML="";

cart.forEach(i=>{
total+=i.p;
box.innerHTML+=`<p>${i.n} - ${i.p} лв</p>`;
});

document.getElementById("total").innerText="Общо: "+total+" лв";
localStorage.setItem("cart",JSON.stringify(cart));
}

/* CHECKOUT */
function checkout(){
if(cart.length===0)return alert("Количката е празна!");
alert("Поръчката е направена 💖✨");
cart=[];
update();
localStorage.removeItem("cart");
}

/* SEARCH */
function searchProducts(){
let input=document.getElementById("searchInput").value.toLowerCase();
document.querySelectorAll(".card").forEach(c=>{
c.style.display=c.innerText.toLowerCase().includes(input)?"block":"none";
});
}

/* INIT */
render(data.body,"bodyP");
render(data.hair,"hairP");
render(data.face,"faceP");
render(data.makeup,"makeupP");
render(data.acc,"accP");
update();

/* TOAST */
function toast(msg){
let t=document.createElement("div");
t.innerText=msg;
t.style.cssText=`
position:fixed;bottom:20px;right:20px;
background:#ff3d7f;color:white;
padding:10px 15px;border-radius:10px;
`;
document.body.appendChild(t);
setTimeout(()=>t.remove(),2000);
}
