
class CartItemView {

	constructor(cart, item, value) {
		
		this.cart = cart;
		this.item = item;
		this.value = value;

		this._createView();
		this.updateItemPartial();
	}

	_createView() {
		
		const cartItemId = 'cart' + this.item;

		let itemView = document.getElementById(cartItemId);

		if (!itemView) {

			itemView = document.createElement('li');
			itemView.id = cartItemId;
			itemView.className = "cartListItem";
			itemView.innerHTML = document.getElementById(this.item).innerHTML;

			this.spanPartial = document.createElement('span');
			this.spanPartial.id = this.item + 'Partial';
			itemView.appendChild(this.spanPartial);

			const removeButton = document.createElement('button');
			removeButton.type = 'button';
			removeButton.innerHTML = '-';
			removeButton.addEventListener('click', () => this.cart.substract(this.item, this.value))
			itemView.appendChild(removeButton);

			document.querySelector('#cart > ul').appendChild(itemView);
		}

	}

	updateItemPartial() {

		console.log(this);
		this.spanPartial.innerHTML = `${this.cart.getPartial(this.item)}`;
	}
}