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

/*=============== MENU ITEM ANIMATIONS ===============*/
const menuItems = document.querySelectorAll('.menu__item, .addon__item, .drink__item, .spirit__item')

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
}

const menuObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
        }
    })
}, observerOptions)

menuItems.forEach(item => {
    item.style.opacity = '0'
    item.style.transform = 'translateY(30px)'
    item.style.transition = 'opacity 0.4s ease, transform 0.4s ease'
    menuObserver.observe(item)
})

/*=============== MENU ITEM HOVER EFFECTS ===============*/
const addHoverEffects = () => {
    const items = document.querySelectorAll('.menu__item')
    
    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Add subtle scale and glow effect
            item.style.transform = 'translateY(-5px) scale(1.02)'
            item.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        })
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)'
        })
    })
}

/*=============== PRICE ANIMATION ===============*/
const animatePrices = () => {
    const prices = document.querySelectorAll('.item__price, .addon__price, .drink__price, .spirit__price')
    
    prices.forEach(price => {
        price.addEventListener('mouseenter', () => {
            price.style.transform = 'scale(1.1)'
            price.style.color = '#ffd700'
            price.style.transition = 'all 0.3s ease'
        })
        
        price.addEventListener('mouseleave', () => {
            price.style.transform = 'scale(1)'
            price.style.color = 'var(--first-color)'
        })
    })
}

/*=============== CATEGORY TITLE ANIMATIONS ===============*/
const animateCategoryTitles = () => {
    const categoryTitles = document.querySelectorAll('.category__title, .section__title')
    
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1'
                entry.target.style.transform = 'translateY(0)'
                
                // Animate the underline
                const after = entry.target.querySelector('::after')
                entry.target.style.setProperty('--underline-width', '60px')
            }
        })
    }, { threshold: 0.5 })
    
    categoryTitles.forEach(title => {
        title.style.opacity = '0'
        title.style.transform = 'translateY(-20px)'
        title.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
        title.style.setProperty('--underline-width', '0px')
        titleObserver.observe(title)
    })
}

/*=============== SPICY INDICATOR ANIMATION ===============*/
const animateSpicyIndicators = () => {
    const spicyItems = document.querySelectorAll('.spicy')
    
    spicyItems.forEach(item => {
        const spicyIcon = item.querySelector('.spicy__icon')
        if (spicyIcon) {
            setInterval(() => {
                spicyIcon.style.animation = 'bounce 0.6s ease-in-out'
                setTimeout(() => {
                    spicyIcon.style.animation = ''
                }, 600)
            }, 3000)
        }
    })
}

/*=============== VEGAN BADGE PULSE ===============*/
const animateVeganBadges = () => {
    const veganBadges = document.querySelectorAll('.vegan__badge')
    
    veganBadges.forEach(badge => {
        setInterval(() => {
            badge.style.animation = 'pulse 1s ease-in-out'
            setTimeout(() => {
                badge.style.animation = ''
            }, 1000)
        }, 4000)
    })
}

/*=============== SMOOTH SCROLL FOR NAVIGATION ===============*/
const smoothScrollLinks = document.querySelectorAll('.nav__link[href^="#"]')

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        const targetId = link.getAttribute('href')
        const targetSection = document.querySelector(targetId)
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight
            const targetPosition = targetSection.offsetTop - headerHeight - 20
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            })
        }
    })
})

/*=============== SEARCH FUNCTIONALITY ===============*/
const addSearchFunctionality = () => {
    // Create search input
    const searchContainer = document.createElement('div')
    searchContainer.className = 'search__container'
    searchContainer.innerHTML = `
        <div class="search__box">
            <input type="text" class="search__input" placeholder="Suche nach Gerichten...">
            <i class="ri-search-line search__icon"></i>
        </div>
    `
    
    // Add search styles
    const searchStyles = `
        .search__container {
            max-width: 400px;
            margin: 0 auto 2rem auto;
            padding-top: 2rem;
        }
        .search__box {
            position: relative;
            background-color: var(--menu-card-color);
            border-radius: 0.5rem;
            padding: 0.75rem 1rem;
            border: 2px solid transparent;
            transition: border-color 0.3s ease;
        }
        .search__box:focus-within {
            border-color: var(--first-color);
        }
        .search__input {
            width: 100%;
            background: transparent;
            border: none;
            outline: none;
            color: var(--text-color);
            font-size: var(--normal-font-size);
            padding-right: 2rem;
        }
        .search__input::placeholder {
            color: var(--text-color);
            opacity: 0.7;
        }
        .search__icon {
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            color: var(--first-color);
            font-size: 1.2rem;
        }
        .menu__item.hidden {
            display: none;
        }
    `
    
    // Add styles to head
    const style = document.createElement('style')
    style.textContent = searchStyles
    document.head.appendChild(style)
    
    // Insert search box after hero section
    const heroSection = document.querySelector('.hero')
    if (heroSection) {
        heroSection.after(searchContainer)
    }
    
    // Search functionality
    const searchInput = searchContainer.querySelector('.search__input')
    const allMenuItems = document.querySelectorAll('.menu__item')
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase()
        
        allMenuItems.forEach(item => {
            const itemName = item.querySelector('.item__name').textContent.toLowerCase()
            const itemDescription = item.querySelector('.item__description')?.textContent.toLowerCase() || ''
            
            if (itemName.includes(searchTerm) || itemDescription.includes(searchTerm)) {
                item.classList.remove('hidden')
            } else {
                item.classList.add('hidden')
            }
        })
        
        // Hide empty categories
        const categories = document.querySelectorAll('.menu__category')
        categories.forEach(category => {
            const visibleItems = category.querySelectorAll('.menu__item:not(.hidden)')
            if (visibleItems.length === 0 && searchTerm !== '') {
                category.style.display = 'none'
            } else {
                category.style.display = 'block'
            }
        })
    })
}

/*=============== ADD CSS ANIMATIONS ===============*/
const addCustomAnimations = () => {
    const animationStyles = `
        @keyframes bounce {
            0%, 20%, 53%, 80%, 100% {
                transform: translate3d(0,0,0);
            }
            40%, 43% {
                transform: translate3d(0, -5px, 0);
            }
            70% {
                transform: translate3d(0, -3px, 0);
            }
            90% {
                transform: translate3d(0, -1px, 0);
            }
        }
        
        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .fade-in-up {
            animation: fadeInUp 0.6s ease forwards;
        }
    `
    
    const style = document.createElement('style')
    style.textContent = animationStyles
    document.head.appendChild(style)
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 400,
    delay: 50,
    reset: false,
})

// Hero section
sr.reveal(`.hero__title`, {delay: 50, distance: '50px', origin: 'top'})
sr.reveal(`.hero__description`, {delay: 100})
sr.reveal(`.hero__special`, {delay: 150, distance: '80px'})

// Menu sections
sr.reveal(`.section__title`, {delay: 50, distance: '30px', origin: 'top'})
sr.reveal(`.category__title`, {delay: 75, distance: '30px', origin: 'top'})
sr.reveal(`.menu__item`, {delay: 100, interval: 25})
sr.reveal(`.addon__item`, {delay: 50, interval: 15})
sr.reveal(`.drink__item`, {delay: 50, interval: 15})
sr.reveal(`.spirit__item`, {delay: 50, interval: 15})

// Footer
sr.reveal(`.footer__logo`, {delay: 100})
sr.reveal(`.footer__content`, {delay: 200})
sr.reveal(`.footer__copy`, {delay: 300})

/*=============== INITIALIZE ALL FUNCTIONS ===============*/
document.addEventListener('DOMContentLoaded', () => {
    addCustomAnimations()
    addHoverEffects()
    animatePrices()
    animateCategoryTitles()
    animateSpicyIndicators()
    animateVeganBadges()
    addSearchFunctionality()
    
    // Add loading class removal
    document.body.classList.add('loaded')
})

/*=============== PERFORMANCE OPTIMIZATION ===============*/
// Throttle scroll events
const throttle = (func, limit) => {
    let inThrottle
    return function() {
        const args = arguments
        const context = this
        if (!inThrottle) {
            func.apply(context, args)
            inThrottle = true
            setTimeout(() => inThrottle = false, limit)
        }
    }
}

// Apply throttling to scroll events
window.removeEventListener('scroll', shadowHeader)
window.removeEventListener('scroll', scrollUp)
window.removeEventListener('scroll', scrollActive)

window.addEventListener('scroll', throttle(shadowHeader, 10))
window.addEventListener('scroll', throttle(scrollUp, 10))
window.addEventListener('scroll', throttle(scrollActive, 10))