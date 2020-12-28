import chart from './chart.js';

dragAddListener(
	(draggbleId, dropReceiverId) => {

		let draggable = document.getElementById(draggbleId);
		chart.add(draggable.innerHTML, draggable.value);
	}
);