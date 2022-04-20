const DEFAULT_SIZE = 16;

let currentSize = DEFAULT_SIZE;

const grid = document.querySelector('#grid');
const clearBtn = document.querySelector('#clearBtn');

clearBtn.onclick = () => {resetGrid();}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for(let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add("grid-element");
        gridElement.addEventListener('mouseover', changeColor);
        gridElement.addEventListener('mousedown', changeColor);
        grid.appendChild(gridElement);
    }
}

function changeColor(e){
    if(e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = 'black';
}

function resetGrid(){
    grid.innerHTML = '';
    const newSize = window.prompt("How many pixels wide?:");
    createGrid(newSize);
}

window.onload = () => {
    createGrid(DEFAULT_SIZE);
}

