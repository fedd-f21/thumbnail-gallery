const lg = document.querySelector(`#lrgimg`)
const t1 = document.querySelector(`#thumb1`)
const t2 = document.querySelector(`#thumb2`)
const t3 = document.querySelector(`#thumb3`)

t1.addEventListener(`click`, function() {
  lg.setAttribute(`src`, `img/one.jpg`)
})

t2.addEventListener(`click`, function() {
  lg.setAttribute(`src`, `img/two.jpg`)
})

t3.addEventListener(`click`, function() {
  lg.setAttribute(`src`, `img/three.jpg`)
})