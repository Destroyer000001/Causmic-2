function toggleMenu() {

  const nav = document.querySelector(".nav-links");

  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";

    nav.style.position = "absolute";
    nav.style.top = "76px";
    nav.style.left = "0";
    nav.style.right = "0";

    nav.style.padding = "20px";

    nav.style.background = "white";

    nav.style.flexDirection = "column";
  }
}
