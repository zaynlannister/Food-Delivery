let components = document.querySelectorAll('.tabs');

components.forEach(function(el) {
	el.addEventListener('click', selector);

	function selector() {
		components.forEach(function(el) {
			el.classList.remove('is-active');
		})		
		this.classList.add('is-active');
	}
})