function toggleMode() {
  const html = document.documentElement

  /*Troca o tema de claro para escuro
  Também funciona dessa maneira, mas com o toggle ele faz sozinho esse IF ELSE
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/
  html.classList.toggle("light")

  /*Troca a imagem para acompanhar o tema Claro Escuro*/
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Skyress1")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de um motoqueiro admirando a paisagem")
  }
}
