const cleanServiceBox = document.querySelector(".cleaning_service_box");
const cleanProcessBox = document.querySelector(".cleaning_process_box");
const contactBox = document.querySelector(".contact_box");
const estimateBox = document.querySelector(".estimate_box");
const estimate = document.querySelector(".estimate");
const contact = document.querySelector(".contact");
const cleanProcess = document.querySelector(".cleaning_process");
const cleanService = document.querySelector(".cleaning_services");
const close_service = document.querySelector("#close_service");
const close_process = document.querySelector("#close_process");
const close_contact = document.querySelector("#close_contact");
const close_estimate = document.querySelector("#close_estimate");

//for right side image popping up
const backimage = document.querySelector(".backimage");
const textP = document.querySelector(".backimage p");
const imageBlock = document.querySelector(".imageblock");
const cite = document.querySelector(".backimage cite");
const q = document.createElement("q");
textP.appendChild(q);

q.textContent = "";

const images = [
"mutalibbone.jpeg",
"mutalibbtwo.jpeg",
"mutalibbthree.jpeg",
"mutalibbfour.jpeg"
];
 const texts = [
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit Perferendis, doloribus. Ea iure placeat, provident ducimus porro inventore vero deleniti sit consectetur exercitationem et molestias eligendi",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit Perferendis, doloribus. Ea iure placeat, provident ducimus porro inventore vero deleniti sit consectetur exercitationem et molestias eligendi",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit Perferendis, doloribus. Ea iure placeat, provident ducimus porro inventore vero deleniti sit consectetur exercitationem et molestias eligendi",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit Perferendis, doloribus. Ea iure placeat, provident ducimus porro inventore vero deleniti sit consectetur exercitationem et molestias eligendi"
 ];

const cites = [
"-Adams Gabriel",
"-J. wonah",
"-W.A. Wale",
"-Mr. Lay"
];
let imageIndex = 0;

function changeImage(){
  imageBlock.innerHTML = `<img src="${images[imageIndex]}"
  alt ="image">`;
  q.textContent = `${texts[imageIndex]}`
  cite.textContent = `${cites[imageIndex]}`


  imageIndex =(imageIndex + 1) % images.length;
}
setInterval(changeImage, 10000);
//rigth side imaging poping stops here

cleanServiceBox.style.display = "none";
cleanProcessBox.style.display = "none";
contactBox.style.display = "none";
estimateBox.style.display = "none";

//function for when the header is toggle 
function boxShow(clean, cleanbox, close) {
  clean.addEventListener("click", () => {
    clean.animate(
      [{ transform: "translateY(0px)" }, { transform: "translateY(5px)" }],
      {
        duration: 50,
      },
    );
    if (cleanbox.style.display === "none") {
      cleanbox.style.display = "block";
      cleanbox.animate([{ transform: "scale(0)" }, { transform: "scale(1)" }], {
        duration: 1000,
      });
    } else {
      cleanbox.style.display = "none";
    }
  });

  close.addEventListener("click", () => {
    cleanbox.style.display = "none";
  });
}

boxShow(cleanService, cleanServiceBox, close_service);
boxShow(cleanProcess, cleanProcessBox, close_process);
boxShow(contact, contactBox, close_contact);
boxShow(estimate, estimateBox, close_estimate);
