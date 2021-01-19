
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



			this.itemView = document.createElement('li');
			this.itemView.id = cartItemId;
			this.itemView.className = "cartListItem";
			this.itemView.innerHTML = document.getElementById(this.item).innerHTML;

			this.spanPartial = document.createElement('span');
			this.spanPartial.id = this.item + 'Partial';
			this.itemView.appendChild(this.spanPartial);

			const removeButton = document.createElement('button');
			removeButton.type = 'button';
			removeButton.innerHTML = '-';
			removeButton.addEventListener('click', () => this.cart.substract(this.item, this.value))
			this.itemView.appendChild(removeButton);

			const parent = document.querySelector('#cart > ul'); 
			parent.appendChild(this.itemView);
	}

	updateItemPartial() {

		const partial = this.cart.getPartial(this.item);

		if (!partial) {
			this.itemView.remove();
			this.itemView = null;
			return;
		}

		if (!this.itemView) {
			this._createView();
		}
		this.spanPartial.innerHTML = `${partial}`;
	}
}