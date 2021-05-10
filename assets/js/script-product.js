 $(document).ready(function () {
            //------------------------------
            $(".single-item").slick({
                dots: true,
                infinite: true,
                arrows: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                centerMode: true,
                centerPadding: '0px',
            });
        });