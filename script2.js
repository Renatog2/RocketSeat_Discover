function fontSize(type) {
  var ids = ["#HeaderButton"]
  ids.forEach((id) => {
    var elemento = document.querySelector(id)
    var size = window
      .getComputedStyle(elemento, null)
      .getPropertyValue("font-size")
    size = parseFloat(size)
    if (type == "Increase") {
      elemento.style.fontSize = size + 2 + "px"
    } else {
      elemento.style.fontSize = size - 2 + "px"
    }
  })
}
