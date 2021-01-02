import cart from './cart.js';

dragAddListener(
	(draggableId)  => {

		let draggable = document.getElementById(draggableId);
		let total = cart.add(draggable.innerHTML, draggable.value);

		document.querySelector("#cart > span").innerHTML = cart.Sum;

		const cartItemId = 'cart' + draggable.innerHTML;

		let item = document.getElementById(cartItemId);

		if (!item) {

			item = document.createElement('li');
			item.id = 'cart' + draggable.id;
		
			document.getElementById('cart').appendChild(item);
		}

		item.innerHTML = `${draggable.innerHTML}: ${total}`;
	}
);