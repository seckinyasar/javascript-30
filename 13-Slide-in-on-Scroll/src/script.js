
// mine debounce func
function debounce(func,delay=100){
    let timeout;
    return function(){
        let context = this;
        let args = arguments;

        console.log(args);
        console.log(context);

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context,args)
        }, delay);

    }
}




  const images = document.querySelectorAll('.slide-in');

  function checkSlide(e){
      images.forEach(sliderImage => {
          const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage.height / 2);
          const imageBottom = sliderImage.offsetTop + sliderImage.height;
          const isHalfShown = slideInAt > sliderImage.offsetTop;
          const isNotScrolledPast = window.scrollY < imageBottom;
          if (isHalfShown&&isNotScrolledPast){
              sliderImage.classList.add('active')
          }else{
              sliderImage.classList.remove('active')
          }
      })
  };
window.addEventListener('scroll', debounce(checkSlide)); 



  