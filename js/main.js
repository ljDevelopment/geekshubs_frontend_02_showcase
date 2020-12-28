import chart from './chart.js';

dragAddListener(
	(draggbleId)  => {

		let draggable = document.getElementById(draggbleId);
		let total = chart.add(draggable.innerHTML, draggable.value);

		document.querySelector("#chart > span").innerHTML = chart.Sum;

		const chartItemId = 'chart' + draggable.innerHTML;

		let item = document.getElementById(chartItemId);

		if (!item) {

			item = document.createElement('li');
			item.id = 'chart' + draggable.innerHTML;
		
			document.getElementById('chart').appendChild(item);
		}

		item.innerHTML = `${draggable.innerHTML}: ${total}`;
	}
);