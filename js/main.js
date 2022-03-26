$(function(){
    $('.gallery__items').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		
	});

    $('.store__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2
                } 
            },
            {
                breakpoint: 570,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1
                }
            }

        ]
        

    });
    

    $('.popup__link').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    

});