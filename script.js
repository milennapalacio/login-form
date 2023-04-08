function clicou() {
  const input = document.querySelector(".senha");

  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }
}
