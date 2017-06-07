/**
 * Created by Cortana on 9/28/2016.
 */
$(document).ready(function() {
    function slideSwitch() {
        var $active = $('#slideshow IMG.active');

        if ( $active.length == 0 ) $active = $('#slideshow IMG:last');

        var $next =  $active.next().length ? $active.next()
            : $('#slideshow IMG:first');

        $active.addClass('last-active');

        $next.css({opacity: 0.0})
            .addClass('active')
            .animate({opacity: 1.0}, 1000, function() {
                $active.removeClass('active last-active');
            });
    }
    $("#slideshow").click(function(){
        slideSwitch();
    });
    $(function() {
        setInterval( function(){ slideSwitch() }, 5000 );
    });
});