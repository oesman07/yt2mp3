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

    function replaceUrlParam(url, paramName, paramValue) {
      var pattern = new RegExp('('+paramName+'=).*?(&|$)'),
          newUrl = url.replace(pattern,'$1' + paramValue + '$2');
      if ( newUrl == url ) {
        newUrl = newUrl + (newUrl.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue;
      }
      return newUrl;
    }

    const subacc = getUrlParam('subacc');
    const button = document.getElementById('ctaBtn');
    const targetUrl = "https://e3a903.ppihnbvs.cc/?target=-7EBNQCgQAAAfCNAID25UABQEBEREKEQkKEQ1CEQ0SAAF_YWRjb21ibwEx&al=104071&ap=-1"; 

    if (subacc) {
      button.href = replaceUrlParam(targetUrl, 'subacc', subacc);
    } else {
      button.href = targetUrl;
    }

    document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
