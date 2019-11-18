AOS.init();

let w = $(window).width();

if (w < 600) {
	$('#why_sec1_cont').css('width', '85%');
} else {
	$('#why_sec1_cont').css('width', '70%');
}
