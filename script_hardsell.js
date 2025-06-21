document.addEventListener('DOMContentLoaded', function() {
    // Countdown Timer
function startCountdown(duration) {
      let timer = duration, hours, minutes, seconds;
      const display = document.getElementById('timer');

      setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
          timer = 0;
        }
      }, 1000);
    }

    window.onload = function () {
      const countdownSeconds = 3 * 60 * 60;
      startCountdown(countdownSeconds);
    };

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
   function getUrlParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  const subacc = getUrlParam('subacc') || '';
  
  // Pisahkan bagian awal (sampai target) dan bagian parameter lainnya
  const baseStart = "https://idfzxd.pro/forms/?target=-7EBNQCgQAAAfCNAID25UABQEBEREKEQkKEQ1CEQ0SAAF_YWRjb21ibwEx";
  const baseParams = "&bg_color=e3cfa6&text_color=000000&btn_color=f51414&btn_text_color=ffffff&btn_shdw=990000&bg_opacity=1&form_width=100&name_width=100&phone_width=100&btn_shdw_size=true&btn_font=22&btn_font_pos=12px%2050px&btn_edit_text=Pesan%20Sekarang&name_pos=margin-right&phone_pos=margin-right&button_pos=margin";

  const finalIframeURL = subacc
    ? `${baseStart}&subacc=${encodeURIComponent(subacc)}${baseParams}`
    : `${baseStart}${baseParams}`;

  document.getElementById("order").src = finalIframeURL;

  console.log("Final iframe URL:", finalIframeURL);
