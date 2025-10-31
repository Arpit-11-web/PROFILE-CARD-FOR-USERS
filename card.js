let box = document.querySelector("#box");
let form = document.querySelector("#container");
let picture = document.querySelector("#picture");
let occupation = document.querySelector("#occupation");
let address = document .querySelector("#address");
let hobies = document.querySelector("#hobies");
let btn = document.querySelector("#btn");
form.addEventListener("submit",function(dets){
    form.style.display = "none";
    dets.preventDefault();
    
const a = picture.value;
const b = occupation.value;
const c = address.value;
const d = hobies.value;
let card = document.createElement("div");
card.id = "card";
let photo = document.createElement("div");
photo.id = "photo";
let img = document.createElement("img");
img.setAttribute("src",a);
let occu = document.createElement("div");
occu.id = "occu";
occu.textContent = b;

let addr = document.createElement("div");
addr.id = "addr";
addr.textContent = c;


let hobe = document.createElement("div");
hobe.id = "hobe";
hobe.textContent = d;
console.dir(hobe);
let newc = document.createElement("button");
newc.id = "newcard";
newc.textContent = "create new";
newc.addEventListener("click",function(){
    card.style.display = "none";
    form.style.display = "initial";
    // form.reset();
});




photo.appendChild(img);
card.appendChild(photo);
card.appendChild(occu);
card.appendChild(addr);
card.appendChild(hobe);
card.appendChild(newc);
box.appendChild(card);



//  newc.addEventListener("click",function(){
    form.style.display = "intial";
    form.reset();
//  });

});

// document.querySelector("#newcard").addEventListener("click",function(){
    form.style.display = "intial";
    form.reset();
// });
