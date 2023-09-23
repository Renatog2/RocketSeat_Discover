function fontSize(type) {
  var elementos = document.querySelectorAll("*")
  elementos.forEach(function (elemento) {
    var tamanhoDaFonte = window
      .getComputedStyle(elemento, null)
      .getPropertyValue("font-size")
    tamanhoDaFonte = parseFloat(tamanhoDaFonte)
    if (type == "Increase") {
      if (tamanhoDaFonte <= 20) {
        elemento.style.fontSize = tamanhoDaFonte + 2 + "px"
      }
    } else if (type == "Decrease") {
      if (tamanhoDaFonte >= 12) {
        elemento.style.fontSize = tamanhoDaFonte - 2 + "px"
      }
    } else {
      elemento.style.fontSize = 16 + "px"
    }
  })
}

function fontStrong(botao) {
  var elementos = document.querySelectorAll("*")
  elementos.forEach(function (elemento) {
    var intensidadeDaFonte = window
      .getComputedStyle(elemento, null)
      .getPropertyValue("font-weight")
    intensidadeDaFonte = parseFloat(intensidadeDaFonte)

    if (intensidadeDaFonte == 400) {
      elemento.style.fontWeight = 700
    } else {
      elemento.style.fontWeight = 400
    }
  })
}

function fontChange() {
  const html = document.documentElement
  if (html.classList.contains("contrast")) {
    html.classList.remove("contrast")
  } else {
    html.classList.add("contrast")
  }
}
