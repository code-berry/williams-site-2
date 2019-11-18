let count = 0;
let button = $('.navbar-toggler-icon');

button.click(()=> {
	if (count === 0) {
		button.css('backgroundImage', '../images/xit.png');
		count++;
	} else {
		count = 0;
		button.css('backgroundImage', '../images/xit.png');
	}
});