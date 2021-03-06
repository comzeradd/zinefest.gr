$(document).ready(function() {

    function get_to_top() {
        $('body, html').animate({
            scrollTop: 0
        }, 800);
    }

    function get_to_content() {
        $('body, html').animate({
            scrollTop: contentAnchor - 100
        }, 800);
    }

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});
