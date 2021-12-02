const lg = document.querySelector(`#lrgimg`)
const t1 = document.querySelector(`#thumb1`)
const t2 = document.querySelector(`#thumb2`)
const t3 = document.querySelector(`#thumb3`)

// Recieves a url string, assigns it to the src of the large image
const setLargeImgSrc = function(thumb) {
  const url = thumb.getAttribute(`src`)
  lg.setAttribute(`src`, url)
}

// Add listeners to each thumbnail one by one
t1.addEventListener(`click`, function() {
  setLargeImgSrc(t1)
})

t2.addEventListener(`click`, function() {
  setLargeImgSrc(t2)
})

t3.addEventListener(`click`, function() {
  setLargeImgSrc(t3)
})