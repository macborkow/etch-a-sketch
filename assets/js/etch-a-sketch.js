const canvas = document.querySelector('#canvas');
const button = document.querySelector('#drawGrid');
let grid = [];

function drawGrid(size) {
	grid.forEach(function(item) {
		item.remove();
	});
	for(let i = 0; i < size*size; ++i) {
		grid[i] = document.createElement('div');
		grid[i].classList.add('square');
		grid[i].style.width = `calc(-2px + 40vw/${size})`;
		grid[i].style.height = `calc(-2xp + 40vw/${size})`;
		canvas.style.width = grid[i].style.width*size;
		canvas.style.height = grid[i].style.width*size;
		grid[i].addEventListener('mouseenter', () => { grid[i].classList.add('colored'); });
		canvas.appendChild(grid[i]);
	}
}

function reset() {
	let size = 0;
	
	do {
		size = parseInt(prompt("Pick grid density [1-100]"), 10);
} while(size > 100 || size < 1);
	
	drawGrid(size);
}

document.onload = drawGrid(16);

button.addEventListener('click', () => reset());