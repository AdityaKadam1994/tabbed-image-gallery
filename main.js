const clicked_img = document.getElementsByClassName("thumbnail");

const zoom_img = document.getElementById("main-img");
// const zoom_img = document.getElementById("main-img").getAttribute("src");
console.log("TCL: zoom_img", zoom_img);

for (let index = 0; index < clicked_img.length; index++) {
  const element = clicked_img[index];
  element.addEventListener("click", function() {
    const clicked_img_src = this.getAttribute("src");
    zoom_img.setAttribute("src", clicked_img_src);
  });
}
