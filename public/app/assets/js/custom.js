

// Dynamically change the selected item in the nav menu
$(document).ready(function () {
    $('.nav li a').click(function(e) {
        if ('.navbar-brand') { console.log('yupii') }
        $('.nav li.active').removeClass('active');

        var $parent = $(this).parent();
        $parent.addClass('active');
    });
});

// Incorporate typing animate

// $('#typing1').typeIt({
//      strings: $('#typing1').text(),
//      speed: 50,
//      autoStart: false
// });


$('#typing2').typeIt({
     speed: 80,
     autoStart: false
})
.tiType('I am a <strong>Fullstack Web Developer</strong>')
.tiPause(1050).tiDelete(23).tiPause(650)
.tiType('<strong>Wordpress Web Developer</strong>')
.tiPause(1500).tiDelete(23).tiPause(620)
.tiType('I also have <strong>Mobile app Developement experience</strong>')
.tiPause(1500).tiDelete().tiSettings({speed: 30}).tiPause(720)
.tiType('Are you looking to <strong>HIRE</strong>?');


// Scroll to somewhere function
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
});
