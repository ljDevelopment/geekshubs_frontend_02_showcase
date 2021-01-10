
const cart = new Cart();

dragAddListener(
	(draggableId)  => {

		let draggable = document.getElementById(draggableId);
		let total = cart.add(draggableId, draggable.value);

		document.querySelector("#cart > #total").innerHTML = cart.Sum;

		const cartItemId = 'cart' + draggable.id;

		let item = document.getElementById(cartItemId);

		if (!item) {

			item = document.createElement('li');
			item.id = cartItemId;
			item.className = "cartListItem";
		
			document.querySelector('#cart > ul').appendChild(item);
		}

		item.innerHTML = `${draggable.innerHTML}<span>${total}</span>`;
	}
);

