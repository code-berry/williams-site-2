AOS.init();

let thumbsUp = $('#home_sec1 .col-2');

thumbsUp.mouseenter(() => {
	$('.col-2 i').fadeIn();
});

thumbsUp.mouseleave(() => {
	$('.col-2 i').fadeOut();
});

// $(document).scroll(() => {
// 	$('#logo').css('height', '100px');
// });

let w = $(window).width();
console.log(w)

if (w < 400) {
	// setTimeout(() => {
	// 	$('#logo').css('height', '85px');
	// }, 1000);
	console.log('pass');
} else if (w < 900) {
	setTimeout(() => {
		$('#logo').css('height', '100px');
	}, 1000);
} else {
	setTimeout(() => {
		$('#logo').css('height', '120px');
	}, 1000);
}
