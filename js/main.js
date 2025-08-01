/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 600,
    delay: 50,
    reset: true,
})
sr.reveal(`.home__data, .footer`)
sr.reveal(`.home__dish`, {delay: 100, distance: '100px', origin: 'bottom'})
sr.reveal(`.home__burger`, {delay: 200, distance: '100px', duration: 400})
sr.reveal(`.home__ingredient`, {delay: 300, interval: 50})
sr.reveal(`.events__title`, {delay: 50, distance: '50px', origin: 'top'})
sr.reveal(`.events__person-img`, {delay: 150, interval: 100, distance: '100px', origin: 'bottom'})
sr.reveal(`.events__offer`, {delay: 250, distance: '50px', origin: 'bottom'})
sr.reveal(`.events__bottle-img`, {delay: 300, distance: '30px', origin: 'right'})
sr.reveal(`.confetti`, {delay: 350, interval: 25, distance: '20px'})
sr.reveal(`.contact__img`, {origin: 'left'})
sr.reveal(`.contact__data`, {origin: 'right'})
sr.reveal(`.popular__card`, {interval: 50})
sr.reveal(`.private-events__subtitle`, {delay: 100, distance: '30px', origin: 'top'})
sr.reveal(`.private-events__description`, {delay: 150, distance: '30px', origin: 'left'})
sr.reveal(`.capacity__item`, {delay: 200, interval: 100, distance: '50px', origin: 'bottom'})
sr.reveal(`.private-events__features`, {delay: 300, distance: '30px', origin: 'left'})
sr.reveal(`.private-events__cta`, {delay: 350, distance: '30px', origin: 'bottom'})
sr.reveal(`.private-events__img`, {delay: 200, distance: '100px', origin: 'right'})

/*=============== EVENTS CAROUSEL ===============*/
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.events__carousel-wrapper');
    const cards = document.querySelectorAll('.events__card');
    const dots = document.querySelectorAll('.events__dot');
    const prevBtn = document.getElementById('events-prev');
    const nextBtn = document.getElementById('events-next');
    
    let currentSlide = 0;
    const totalSlides = cards.length;

    function updateCarousel() {
        // Update carousel transform
        carousel.style.transform = `translateX(-${currentSlide * 50}%)`;
        
        // Update active card
        cards.forEach((card, index) => {
            card.classList.toggle('active', index === currentSlide);
        });
        
        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    // Auto-play carousel (optional)
    setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Initialize carousel
    updateCarousel();
});

/*=============== LANGUAGE TOGGLE ===============*/
document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    const langOptions = document.querySelectorAll('.lang-option');
    
    // Get current language from localStorage or default to German
    let currentLang = localStorage.getItem('language') || 'de';
    
    // Initialize language
    setLanguage(currentLang);
    
    // Add click listeners to language options
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedLang = option.getAttribute('data-lang');
            setLanguage(selectedLang);
            localStorage.setItem('language', selectedLang);
        });
    });
    
    function setLanguage(lang) {
        currentLang = lang;
        
        // Update active language button
        langOptions.forEach(option => {
            option.classList.toggle('active', option.getAttribute('data-lang') === lang);
        });
        
        // Update all elements with translation data
        const translatableElements = document.querySelectorAll('[data-de][data-en]');
        
        translatableElements.forEach(element => {
            const translation = element.getAttribute(`data-${lang}`);
            if (translation) {
                element.innerHTML = translation;
            }
        });
        
        // Update document language attribute
        document.documentElement.lang = lang;
    }
});

