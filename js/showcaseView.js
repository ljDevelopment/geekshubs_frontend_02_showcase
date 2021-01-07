{
	const showcase = document.getElementById('showcase');

	for (const product in data) {
		
		const liElement = document.createElement('li');
		liElement.className = 'draggable showcaseItem';
		liElement.value = data[product];
		showcase.appendChild(liElement);

		const imgElement = document.createElement('img');
		imgElement.draggable = false;
		imgElement.src = `img/${product}.png`;
		liElement.appendChild(imgElement);

		const divElement = document.createElement('div');
		divElement.innerHTML = data[product];
		liElement.appendChild(divElement);
	}

}