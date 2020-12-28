class Chart {
	constructor() {}

	add(name, amount) {

		if (!this.collection) {
			this.collection = {};
		}
		let amountBefore =
				this.collection[name] 
				|| 0;

		this.collection[name] = amountBefore + amount;
		console.log(this);
	}
}

export default new Chart();