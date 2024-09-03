$(document).ready(function() {
    $('.sidebar-navigation ul li').click(function() {
        $('.sidebar-navigation ul li').removeClass('active');
        $(this).addClass('active');
    });
});
