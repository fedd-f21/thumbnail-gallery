const lg = document.querySelector(`#lrgimg`)

// Collect all .thumbnail <img> together in an Array (NodeList)
const thumbs = document.querySelectorAll(`.thumbnail`)

// Get the url string from the target, assigns it to the src of the large image
const handleThumbClick = function(event) {
  // The same as the above 3 lines, as one line of code
  lg.setAttribute(`src`, event.target.getAttribute(`src`))
}

// LOOP: Add listeners to each thumbnail one by one
thumbs.forEach(function(thumb) {
  // For each of the thumbnails found, make it clickable
  thumb.addEventListener(`click`, handleThumbClick)
})