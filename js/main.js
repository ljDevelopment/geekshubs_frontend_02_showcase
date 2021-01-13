
const cart = new Cart();

cart.addListener(onCartChanged);

const cartItemViews = {};

dragAddListener(
	(draggableId)  => {

		let draggable = document.getElementById(draggableId);
		cart.add(draggableId, draggable.value);

		if (!cartItemViews[draggableId]) {

			cartItemViews[draggableId] = new CartItemView(cart, draggableId, draggable.value);
		}
		else {
			cartItemViews[draggableId].updateItemPartial();
		}
	}
);


function onCartChanged(cart, item) {

	document.querySelector("#cart > #total").innerHTML = cart.total;

	if (cartItemViews[item]) {

		cartItemViews[item].updateItemPartial();
	}
}

