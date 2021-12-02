const lg = document.querySelector(`#lrgimg`)
const t1 = document.querySelector(`#thumb1`)
const t2 = document.querySelector(`#thumb2`)
const t3 = document.querySelector(`#thumb3`)


// Get the url string from the target, assigns it to the src of the large image
const handleThumbClick = function(event) {
  // Element that was clicked
  const thumb = event.target

  // The src url from the element
  const url = thumb.getAttribute(`src`)

  // Assign the strin to the large image
  lg.setAttribute(`src`, url)
}


// Add listeners to each thumbnail one by one
t1.addEventListener(`click`, handleThumbClick)
t2.addEventListener(`click`, handleThumbClick)
t3.addEventListener(`click`, handleThumbClick)