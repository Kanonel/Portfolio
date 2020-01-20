$('.slider__preview').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-miniature'
});
$('.slider-miniature').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider__preview',
    dots: true,
    centerMode: true,
    focusOnSelect: true
});