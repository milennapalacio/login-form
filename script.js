function clicou() {
  const input = document.querySelector(".senha");
  const image = document.querySelector("img");

  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }
}
