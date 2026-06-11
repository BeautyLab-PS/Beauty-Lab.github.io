const data = {
body:[
["Body Lotion Rose",12,"https://images.unsplash.com/photo-1612810436541-336d3f4f9f8f"],
["Vanilla Scrub",14,"https://images.unsplash.com/photo-1611930022073-84f7f5f2f3a0"],
["Coconut Gel",10,"https://images.unsplash.com/photo-1612810436541-8f2a1b2c3d4e"],
["Almond Oil",15,"https://images.unsplash.com/photo-1611930022412-0f5f6f7a8b9c"],
["Hand Cream",8,"https://images.unsplash.com/photo-1612810436580-1a2b3c4d5e6f"]
],

hair:[
["Repair Shampoo",14,"https://images.unsplash.com/photo-1620916566398-39f8d2c1a1a1"],
["Silk Balm",13,"https://images.unsplash.com/photo-1616671276441-2a3b4c5d6e7f"],
["Argan Mask",18,"https://images.unsplash.com/photo-1620916566600-1f2e3d4c5b6a"]
],

face:[
["Face Foam",12,"https://images.unsplash.com/photo-1596462502278-27bfdc403348"],
["Vitamin C Serum",18,"https://images.unsplash.com/photo-1611930022232-1a2b3c4d5e6f"],
["Hydra Cream",16,"https://images.unsplash.com/photo-1612810436600-abcdef123456"]
],

makeup:[
["Lipstick",10,"https://images.unsplash.com/photo-1586495777744-4413f21062fa"],
["Foundation",18,"https://images.unsplash.com/photo-1596462502278-1a2b3c4d5e6f"],
["Mascara",15,"https://images.unsplash.com/photo-1612810436610-abcdef987654"]
],

acc:[
["Brush Set",20,"https://images.unsplash.com/photo-1612810436620-123456abcdef"],
["Beauty Sponge",10,"https://images.unsplash.com/photo-1612810436630-abcdefabcdef"]
]
};

let cart=[];

/* RENDER */
function render(list,id){
let box=document.getElementById(id);
box.innerHTML="";

list.forEach(p=>{
box.innerHTML+=`
<div class="card">
<img src="${p[2]}" />
<h4>${p[0]}</h4>
<p>${p[1]} лв</p>
<button onclick="add('${p[0]}',${p[1]})">Добави</button>
</div>`;
});
}

/* ADD */
function add(n,p){
cart.push({n,p});
update();
}

/* UPDATE CART */
function update(){
let box=document.getElementById("cartBox");
let total=0;
box.innerHTML="";

cart.forEach(i=>{
total+=i.p;
box.innerHTML+=`<p>${i.n} - ${i.p} лв</p>`;
});

document.getElementById("total").innerText="Общо: "+total+" лв";
}

/* CHECKOUT */
function checkout(){
alert("Поръчката е успешна 💖");
cart=[];
update();
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
