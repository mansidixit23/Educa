// changes navbar style on scroll




var nav = document.querySelector('nav'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY <= 50) { // Just an example
        nav.style.backgroundColor = 'transparent'; // or default color
    } else {
        nav.style.backgroundColor = 'var(--color-primary)';
    }
});


const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () =>{
    faq.classList.toggle('open');

    //change iconscout
    const icon = faq.querySelector('.faq__icon i');
    if(icon.className ==='uil uil-plus'){
      icon.className = 'uil uil-minus';
    }
    else{
      icon.className = 'uil uil-plus';
    }

  })

})

// show/hide nav nav nav_menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-button");
const closeBtn = document.querySelector("#close-menu-button");


menuBtn.addEventListener('click',()=>{
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display  = "none";
})

//close nav menuBtn

//creating a function // anyonomus fns storing it in a constant
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display  = "inline-block";
}
// calling addEventListener
closeBtn.addEventListener('click', closeNav)
