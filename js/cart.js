class Cart {

	constructor() {

		this.total = 0;
		this.partialByItem = {};
		this.listeners = Array();
	}


	getPartial(item) {

		return this.partialByItem[item] || 0;
	}


	setPartial(item, partial) {

		this.partialByItem[item] = partial;
	}


	add(item, amount) {

		this.total += amount;

		this.setPartial(item, this.getPartial(item) + amount);

		this.raiseModified(item);
		console.log(this);
	}

	substract(item, amount) {

		if (amount > this.getPartial(item)) {
			return;
		}
		this.add(item, -amount);
	}


	addListener(callback) {

		this.listeners.push(callback);
	}


	raiseModified(item) {

		this.listeners.forEach(l => l(this, item));
	}
}
