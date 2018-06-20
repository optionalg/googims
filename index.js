//sec1 - scroll - video size
$(window).on("scroll", function() {
    var s = 1400 - Math.min(600, $(document).scrollTop());
    $("video").width(s);
});

//sec2 - scroll - img transform


//sec7 - 마퀴툴 
$('.store').marquee({
    duration: 10000,
   	gap: 0,
  	delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
	pauseOnHover: true
});