console.log("js connected");

newCarousel("carousel");
newCarousel("landing-carousel");

function newCarousel(carouselId) {
   const carousel = document.getElementById(carouselId);

   const slides = carousel.querySelectorAll(".carousel-slide");

   slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${indx * 100}%)`;
   });

   let curSlide = 0;
   let maxSlide = slides.length - 1;

   carousel.querySelector(".btn-next").addEventListener("click", function () {
      nextSlide();
   });

   carousel.querySelector(".btn-prev").addEventListener("click", function () {
      prevSlide();
   });


   function setCurrentSlideStyle() {
      carousel.querySelector(`.current-slide`).classList.remove("current-slide");
      slides[curSlide].classList.add("current-slide");
   }


   function nextSlide() {
      if (curSlide === maxSlide) {
         curSlide = 0;
      } else {
         curSlide++;
      }
      setCurrentSlideStyle();
      moveToEnd(carouselId);

      slides.forEach((slide, indx) => {
         if (indx === curSlide)
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%) scale(1.2) rotate(${Math.floor(Math.random() * 20) - 10}deg)`;
         else
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
      });
   }

   function prevSlide() {
      if (curSlide === 0) {
         curSlide = maxSlide;
      } else {
         curSlide--;
      }
      setCurrentSlideStyle();
      moveToFront(carouselId);

      slides.forEach((slide, indx) => {
         if (indx === curSlide)
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%) scale(1.2)`;
         else
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
      });
   }


   nextSlide();
   setInterval(nextSlide, 8000);
}


// These functions are not working correctly but would prevent the jump at the end
function moveToEnd(carouselId) {
   // const carousel = document.getElementById(carouselId).querySelector(".slides");
   // removed = carousel.removeChild(carousel.firstElementChild);
   // setTimeout(() => carousel.append(removed), 70);
}

function moveToFront(carouselId) {
   // const carousel = document.getElementById(carouselId).querySelector(".slides");
   // removed = carousel.removeChild(carousel.lastElementChild);
   // carousel.prepend(removed);
}