let count = 0;
let button = $('span.navbar-toggler-icon');

button.click(()=> {
	if (count === 0) {
		button.removeClass('meNu');
		button.addClass('xit');
		count++;
	} else {
		count = 0;
		button.removeClass('xit');
		button.addClass('meNu');
	}
});

$('.col-md-7').css('opacity', '1');
$('#why_sec1>.row').css('opacity', '1');
$('#pricing_sec1').css('opacity', '1');
$('#sec1_main').css('opacity', '1');

setTimeout(() => {
	$('#team_sec1').css('opacity', '1');
}, 1500);