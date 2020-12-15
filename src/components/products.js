export default class Products {
	constructor(items) {
		this.items = items;
	}

	set items(items) {
		this._items = items;
		this.render();
	}

	get items() {
		return this._items;
	}

	render() {
		if(!this.elem) {
			this.elem = document.createElement('UL');
		}

		this.elem.innerHTML = this.items.map(item => `<li>${item}</li>`).join('');

		return this.elem;
	}
}