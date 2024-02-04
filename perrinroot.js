/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});


function fadeInName() {
  nameElement.style.opacity = '1';
  const nameText = nameElement.textContent;
  nameElement.textContent = ''; // Clear the existing text

  // Loop through each character and gradually reveal it
  for (let i = 0; i < nameText.length; i++) {
    setTimeout(function() {
      nameElement.textContent += nameText[i];
    }, i * 500); // Adjust the duration between characters (in milliseconds)
  }

  // Store the visibility state in local storage
  localStorage.setItem('nameVisibility', 'visible');
}

function toggleTypingClass() {
  var headerTitle = document.querySelector('.header-title');
  headerTitle.classList.add('typing');

  setTimeout(function() {
    headerTitle.classList.remove('typing');
  }, 3000); // Adjust the timing (3s) to match your typing animation duration
}

// Add an event listener to trigger the function when the image fades away
document.querySelector('.navbar.affix .brand-img').addEventListener('transitionend', function() {
  toggleTypingClass();
});

function submitForm() {
  var form = document.querySelector('form');
  var formData = new FormData(form);
  var xhr = new XMLHttpRequest();

  xhr.open('POST', form.action, true);
  xhr.setRequestHeader('Accept', 'application/json');

  xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;

      if (xhr.status === 200) {
          alert('Thank you! Your message has been sent.');
          form.reset();
      } else {
          alert('Oops! Something went wrong. Please try again later.');
      }
  };

  xhr.send(formData);
}