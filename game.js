function mover(direccion) {
  const movible = document.getElementById("cuadrito");
  const estilo = window.getComputedStyle(movible);
  let top = parseInt(estilo.top);
  let left = parseInt(estilo.left);

  switch (direccion) {
    case "up":
      movible.style.top = top - 10 + "px";
      break;
    case "down":
      movible.style.top = top + 10 + "px";
      break;
    case "left":
      movible.style.left = left - 10 + "px";
      break;
    case "right":
      movible.style.left = left + 10 + "px";
      break;
  }
}
