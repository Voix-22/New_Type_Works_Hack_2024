$('ul').on('click', 'li', function() {
    $('li').removeClass('active');
    $(this).addClass('active');
});

document.addEventListener('DOMContentLoaded', function () {
    const sidebarItems = document.querySelectorAll('.sidebar-navigation ul li');

    sidebarItems.forEach(function (item, index) {
        item.addEventListener('click', function () {
            switch (index) {
                case 0:
                    window.location.href = 'homepage.html'; // Home
                    break;
                case 1:
                    window.location.href = 'login.html'; // Login
                    break;
                case 2:
                    window.location.href = 'students.html'; // Student Body
                    break;
                case 3:
                    window.location.href = 'projects.html'; // Projects
                    break;
                case 4:
                    window.location.href = 'pro.html'; // Achievements
                    break;
                case 5:
                    window.location.href = 'faqs.html'; // FAQs
                    break;
                case 6:
                    window.location.href = 'contact.html'; // Contact Us
                    break;
                default:
                    window.location.href = 'home.html'; // Fallback to Home
            }
        });
    });
});
