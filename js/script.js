const lg = document.querySelector(`#lrgimg`)
const t1 = document.querySelector(`#thumb1`)
const t2 = document.querySelector(`#thumb2`)
const t3 = document.querySelector(`#thumb3`)

// Recieves a url string, assigns it to the src of the large image
const setLargeImgSrc = function(url) {
  lg.setAttribute(`src`, url)
}


t1.addEventListener(`click`, function() {
  const url = t1.getAttribute(`src`)
  setLargeImgSrc(url)
})

t2.addEventListener(`click`, function() {
  const url = t2.getAttribute(`src`)
  setLargeImgSrc(url)
})

t3.addEventListener(`click`, function() {
  const url = t3.getAttribute(`src`)
  setLargeImgSrc(url)
})