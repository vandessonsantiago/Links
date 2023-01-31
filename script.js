function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  const favicon = document.querySelector("#favicon")

  console.log(favicon)

  // substituir a img
  // se tiver light mode, pegar a tag img light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    favicon.setAttribute("href", "./assets/favicon.ico")
  // se tiver dark mode, pegar a tag img dark
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png")
    favicon.setAttribute("href", "./assets/favicon-dark.ico")
  }
}



