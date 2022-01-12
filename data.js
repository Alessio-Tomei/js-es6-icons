const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const iconsContainer = document.querySelector('.boxs-container');
const selectFilter = document.getElementById('filter');

let arrayFilter = [];
icons.forEach(element => {
	if (!arrayFilter.includes(element.type)) {
		arrayFilter.push(element.type);		
	}
});

createFilterOption();

console.log(arrayFilter);

selectFilter.addEventListener('change', reGenerateIcon);

for (let index = 0; index < icons.length; index++) {
	const filter = selectFilter.value;
	generateIcon(index, filter);	
}


function createFilterOption() {
	for (let index = 0; index < arrayFilter.length; index++) {
		const element = `<option value="${arrayFilter[index]}">${arrayFilter[index]}</option>`
		selectFilter.insertAdjacentHTML('beforeend', element);	
	}
}

function generateIcon(index, filter) {
	if (filter == 'all' || icons[index].type == filter) {
		const element = `
			<div class="box">
				<div class="icon-box">
					<i class="${icons[index].family} ${icons[index].prefix}${icons[index].name}" style="color: #${randomColor()};"></i>
					<p>${icons[index].name.toUpperCase()}</p>
				</div>
			</div>`;
		iconsContainer.insertAdjacentHTML('beforeend', element);
	}
}

function reGenerateIcon() {
	iconsContainer.innerHTML = '';
	const filter = selectFilter.value;
	for (let index = 0; index < icons.length; index++) {
		generateIcon(index, filter);	
	}
}


function randomColor() {
	let color = '';
	for (let i = 0; i < 6; i++) {
		let x = randomInt(0,15);
		if (x > 9) {
			x = String.fromCharCode(x + 55);
		}
		color += x;
	}
	return color;
}

function randomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

