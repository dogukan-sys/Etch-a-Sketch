const container = document.createElement("div");
container.className = "container"

function createGrid(rows, columns){
  for (i = 1 ; i <= columns ; i++){
    var column = document.createElement('div')
    column.className = `column column-${i}`
    for (j = 1 ; j <= rows ; j++) {
      var row = document.createElement('div')
      row.className = `row row-${j}`
      row.textContent = `${i} - ${j}`
      column.appendChild(row)
    }
    container.appendChild(column)
  }
  document.body.appendChild(container)
}

createGrid(16,16)