    const darkModeToggle = document.getElementById('dark-mode');
    const body = document.body;

    darkModeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
    });

    document.addEventListener("DOMContentLoaded", function() {
        var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    
        // Show/hide the button based on scroll position
        window.addEventListener("scroll", function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        });
    
        // Scroll to the top when the button is clicked
        scrollToTopBtn.addEventListener("click", function() {
            document.body.scrollTop = 0;  // For Safari
            document.documentElement.scrollTop = 0;  // For Chrome, Firefox, IE, and Opera
        });
    });

    function redirectToLink(link) {
        window.location.href = link;
    }
    