var color = "#3e5d58"
var rainbowMode = false
var eraserMode = false
function getRandomColor(){
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  return `#${randomColor}`
}

const grid = document.createElement("div");
grid.className = "grid" 
const content = document.querySelector('.content')
function createGrid(size){
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateelements = `repeat(${size}, 1fr)`
  for(i=0;i< size*size ;i++){
    const gridElement = document.createElement('div')
    gridElement.className = 'grid-element'
    grid.appendChild(gridElement)
  }
  content.appendChild(grid)
}
createGrid(32)

const gridElements = document.querySelectorAll(".grid-element")
var mouseDown = 0
document.body.onmousedown = function(){
  mouseDown++
}
document.body.onmouseup = function(){
  mouseDown--
}
gridElements.forEach(element => element.addEventListener('mouseover', () =>{
  if (eraserMode) {
    if(mouseDown){
      element.style.backgroundColor = "rgb(221, 229, 237)"
    }
    element.onmousedown = function(){
      element.style.backgroundColor = "rgb(221, 229, 237)"
    }
    return
  } else if (rainbowMode){
    if(mouseDown){
      element.style.backgroundColor = getRandomColor()
    }
    element.onmousedown = function(){
      element.style.backgroundColor = getRandomColor()
    }
    return
  } 
  if(mouseDown){
    element.style.backgroundColor = color
  }
  element.onmousedown = function(){
    element.style.backgroundColor = color
  }
}))


const eraser = document.querySelector('.eraser')
eraser.addEventListener('click', () =>{
  eraser.classList.toggle('active')
  if(eraser.classList.contains('active')){
    eraserMode = true
  } else {
    eraserMode = false
  }

})

const clear = document.querySelector('.clear')
clear.addEventListener('click', clearGrid)
function clearGrid(){
  gridElements.forEach((element) => {
    element.style.backgroundColor = '#dde5ed'
  })
}

const colorPicker = document.querySelector('.color-picker')
colorPicker.value = "#3e5d58"
colorPicker.style.backgroundColor = '#3e5d58'
colorPicker.addEventListener('change', () =>{
  color = colorPicker.value
  colorPicker.style.backgroundColor = colorPicker.value
})
colorPicker.addEventListener('click', () => {
  color = colorPicker.value
  colorPicker.style.backgroundColor = colorPicker.value
})

const rainbowButton = document.querySelector('.rainbow-mode')

rainbowButton.addEventListener('click', () => {
  rainbowButton.classList.toggle('active')
  if (rainbowButton.classList.contains('active')){
    rainbowMode = true
  } else {
    rainbowMode = false
  }
  
})