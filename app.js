const grid = document.createElement("div");
grid.className = "grid" 

function createGrid(size){
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateelements = `repeat(${size}, 1fr)`
  for(i=0;i< size*size ;i++){
    const gridElement = document.createElement('div')
    gridElement.className = 'grid-element'
    grid.appendChild(gridElement)
  }
  document.body.appendChild(grid)
}
createGrid(16)

const gridElements = document.querySelectorAll(".grid-element")
var mouseDown = 0
document.body.onmousedown = function(){
  mouseDown++
}
document.body.onmouseup = function(){
  mouseDown--
}
gridElements.forEach(element => element.addEventListener('mouseover', () =>{
  if(mouseDown){
    element.style.backgroundColor = "black"
  }
  element.onmousedown = function(){
    element.style.backgroundColor = "black"
  }
}))
