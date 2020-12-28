class Chart {
	constructor() {}

	Sum = 0;

	add(name, amount) {

		this.Sum += amount;
		
		if (!this.collection) {
			this.collection = {};
		}
		let amountBefore =
				this.collection[name] 
				|| 0;
		let total = amountBefore + amount;
		this.collection[name] = total;

		console.log(this);

		return total;
	}
}

export default new Chart();