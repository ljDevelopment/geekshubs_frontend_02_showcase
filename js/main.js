
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
		
			document.querySelector('#cart > ul').appendChild(item);
		}

		item.innerHTML = `${draggable.innerHTML}: ${total}`;
	}
);


let cartListShown = false;
function toggleCartList() {
console.log(cartListShown);
	cartListShown = !cartListShown;
	document.getElementById("cartList").style.display =
		cartListShown ? "block" : "none";
}