document.addEventListener('DOMContentLoaded', function() {
    // Countdown Timer
    const countdownElement = document.getElementById('countdown');
    const deadline = new Date();
    deadline.setHours(deadline.getHours() + 2); // Set timer for 2 hours from now for demonstration
    deadline.setMinutes(0);
    deadline.setSeconds(0);
    deadline.setMilliseconds(0);

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = deadline - now;

        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        if (timeLeft < 0) {
            countdownElement.innerHTML = "Waktu Habis!";
            // Optionally, disable CTA buttons or hide discount
            document.querySelector('.discount-box').style.display = 'none';
            document.querySelector('.cta-group .btn-primary').textContent = 'Promo Telah Berakhir';
            document.querySelector('.cta-group .btn-primary').style.backgroundColor = '#ccc';
            document.querySelector('.cta-group .btn-primary').style.pointerEvents = 'none';
        } else {
            countdownElement.innerHTML =
                (hours < 10 ? '0' : '') + hours + " jam " +
                (minutes < 10 ? '0' : '') + minutes + " menit " +
                (seconds < 10 ? '0' : '') + seconds + " detik";
        }
    }

    // Update the countdown every 1 second
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to display immediately

    // Simple Testimonial Carousel (Basic, for more advanced use library like Swiper.js)
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    let currentIndex = 0;

    function showNextTestimonial() {
        const totalTestimonials = testimonialCarousel.children.length;
        currentIndex = (currentIndex + 1) % totalTestimonials;
        const scrollAmount = currentIndex * testimonialCarousel.offsetWidth;
        testimonialCarousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    // Auto-scroll testimonials every 5 seconds
    // setInterval(showNextTestimonial, 5000); // Uncomment to enable auto-scroll
});
