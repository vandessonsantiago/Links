function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a img
  // se tiver light mode, pegar a tag img light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  // se tiver dark mode, pegar a tag img dark
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png")
  }
}



