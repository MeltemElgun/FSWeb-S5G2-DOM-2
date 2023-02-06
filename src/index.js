import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!
document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("mouseover", (item) => {
    item.target.style.color = "red";
  });
});

document.querySelectorAll(".destination h4").forEach((item) => {
  item.addEventListener(
    "click",
    (item) => (item.target.textContent = "merhaba!")
  );
});

let imgOtobus = document.querySelector(".intro img");
imgOtobus.addEventListener("select", grilestir);
function grilestir() {
  imgOtobus.setAttribute("style", "filter: grayscale(100%");
}

document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.target.textContent = event.target.nodeName;
  });
});
