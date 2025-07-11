// custom cursor 
const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", function (e) {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
// custom scroll 

window.onscroll = function () {
    let scroll = window.pageYOffset,
        dHeight = document.body.scrollHeight,
        wHeight = window.innerHeight,
        progress = (scroll / (dHeight - wHeight) * 100);
    document.getElementById('progress').style.height = progress + '%'
}


// loading functionality 
let word1 = document.getElementById('word-1')
let word2 = document.getElementById('word-2')
let word3 = document.getElementById('word-3')

let page2Text = document.getElementById('page-2-text')
let page2Bg = document.getElementById('page-2-bg')
let page2MainDiv = document.getElementById('page2MainDiv')

let page1 = document.getElementById('page-1')
let page2 = document.getElementById('page-2')
let mainPage = document.getElementById('main-page')

function revealWord(word) {
    word.classList.remove('opacity-0', 'translate-y-4');
    word.classList.add('opacity-100', '-translate-y-0');
}

function revealWord2(word) {
    word.classList.remove('opacity-100', '-translate-y-0');
    word.classList.add('opacity-0', '-translate-y-4');
}

window.addEventListener('DOMContentLoaded', () => {
    // start page1 animation
    setTimeout(() => {
        revealWord(word1);
        setTimeout(() => {
            revealWord(word2);
            setTimeout(() => {
                revealWord(word3);

                setTimeout(() => {
                    revealWord2(word1);
                    revealWord2(word2);
                    revealWord2(word3);

                    // page1 change to page2
                    setTimeout(() => {
                        page1.classList.add('hidden');
                        page2.classList.remove('hidden');

                        // Start page 2 animation
                        setTimeout(() => {
                            page2MainDiv.classList.remove('-translate-x-10')
                            page2Bg.classList.remove('-translate-x-full')

                            setTimeout(() => {
                                page2MainDiv.classList.add('-translate-x-10')
                                page2Text.classList.remove('opacity-0')
                                page2Bg.classList.add('translate-x-full', 'delay-500')

                                setTimeout(() => {
                                    page2Text.classList.add('transition-all', 'duration-700', 'delay-300', '-translate-y-10', 'opacity-0')

                                    // page2 change to mainPage
                                    setTimeout(() => {
                                        page2.classList.add('hidden')
                                        mainPage.classList.remove('hidden');
                                    }, 1200);
                                }, 1200)

                            }, 900);
                            // Start page 2 animation
                        }, 600);
                        // page1 change to page2
                    }, 600);
                    // start page1 animation
                }, 600);

            }, 500);
        }, 500)
    }, 500);
})



// side-text 
let backToTop = document.getElementById('rightSideText');
const heroSection = document.getElementById('heroSection');

window.addEventListener('scroll', () => {
    const heroBottom = heroSection.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (heroBottom < windowHeight - 300) {
        // You've slightly entered the next section
        backToTop.style.opacity = '1';
        backToTop.style.pointerEvents = 'auto';
        backToTop.style.visibility = 'visible';
    } else {
        // You're still fully inside the hero section
        backToTop.style.opacity = '0';
        backToTop.style.pointerEvents = 'none';
        backToTop.style.visibility = 'hidden';
    }
});

// herosection text scroll 

const rotatingGroup = document.getElementById("rotating-group");
let lastScrollY = window.scrollY;
let angle = 0;

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        angle += 2; // scrolling down
    } else {
        angle -= 2; // scrolling up
    }

    // Rotate the group around the center of the circle (150, 150)
    rotatingGroup.setAttribute("transform", `rotate(${angle} 150 150)`);

    lastScrollY = currentScrollY;
});

// herosection text scroll Circular-Button-hover-bg

let circularButtonMainBg = document.querySelector('#Circular-Button-Main-bg');
let circularButtonSecondBg = document.querySelector('#Circular-Button-Second-bg');
let circularButtonSvg = document.querySelector('#Circular-Button-svg');

circularButtonMainBg.addEventListener('mouseover', () => {
    circularButtonMainBg.classList.remove('bg-yellow')
    circularButtonMainBg.classList.add('bg-[#FF9800]', 'transition-all', 'duration-400', 'ease-[cubic-bezier(0,0,0.3642,1)]');

    circularButtonSecondBg.classList.add('scale-115')

    circularButtonSvg.classList.add('scale-110')

    console.log('hovered');
});

circularButtonMainBg.addEventListener('mouseleave', () => {
    circularButtonMainBg.classList.add('bg-yellow', 'transition-all', 'duration-400', 'ease-[cubic-bezier(0,0,0.3642,1)]')
    circularButtonMainBg.classList.remove('bg-[#FF9800]', 'transition-all', 'duration-400', 'ease-[cubic-bezier(0,0,0.3642,1)]');

    circularButtonSecondBg.classList.remove('scale-115')

    circularButtonSvg.classList.remove('scale-110')

    console.log('hovered');
});
// nav Meanu 
let NavIcon = document.querySelector('#nav-three-line')
let NavIconLine1 = document.querySelector('#nav-three-line-1')
let NavIconLine2 = document.querySelector('#nav-three-line-2')
let NavIconLine3 = document.querySelector('#nav-three-line-3')
let NavMeanuDiv = document.querySelector('#nav-meanu-div')
let NavMeanucolumn1Items = document.querySelector('#nav-meanu-column-1-items')
let column2 = document.querySelector('#column2')
let leftSideText = document.querySelector('#leftSideText')



// nav-meanu-item

// nav-meanu 
NavIcon.addEventListener('click', navMeanuToggle);

function navMeanuToggle() {
    const isOpen = NavMeanuDiv.classList.contains('opacity-100');
    if (isOpen) {
        NavMeanuDiv.classList.remove('opacity-100', 'z-40', 'pointer-events-auto');
        NavMeanuDiv.classList.add('opacity-0', 'pointer-events-none', '-z-10');
        NavMeanucolumn1Items.classList.remove('opacity-100', 'translate-x-0', 'delay-1000');
        NavMeanucolumn1Items.classList.add('opacity-0', '-translate-x-20', 'delay-1000');

        NavIconLine1.classList.remove('rotate-45', 'translate-y-1',)
        NavIconLine2.classList.remove('-rotate-45', '-translate-y-1.5')
        NavIconLine3.classList.remove('opacity-0')
        backToTop.classList.remove('hidden')
        leftSideText.classList.remove('hidden')

        NavMeanuDiv.classList.add('transition-all', 'duration-400', 'ease-[cubic-bezier(0,0,0.3642,1)]');
        NavMeanucolumn1Items.classList.add('transition-all', 'duration-400', 'ease-[cubic-bezier(0,0,0.3642,1)]');

        setTimeout(() => {
            column2.classList.add('opacity-0', 'translate-y-10');
            column2.classList.remove('opacity-100', 'translate-y-0');
        }, 500);
    } else {
        NavMeanuDiv.classList.remove('opacity-0', '-z-10', 'pointer-events-none');
        NavMeanuDiv.classList.add('opacity-100', 'z-40', 'pointer-events-auto',);
        NavMeanuDiv.classList.add('transition-all', 'duration-600', 'ease-[cubic-bezier(0,0,0.3642,1)]');

        NavIconLine1.classList.add('rotate-45', 'translate-y-1')
        NavIconLine2.classList.add('-rotate-45', '-translate-y-1.5')
        NavIconLine3.classList.add('opacity-0')
        backToTop.classList.add('hidden')
        leftSideText.classList.add('hidden')

        // Hide column1 items instantly
        NavMeanucolumn1Items.classList.remove('opacity-100', 'translate-x-0');
        NavMeanucolumn1Items.classList.add('opacity-0', '-translate-x-10');
        NavMeanucolumn1Items.classList.add('transition-all', 'duration-600', 'ease-[cubic-bezier(0,0,0.3642,1)]');
        // Show column1 items after 0.5s
        setTimeout(() => {
            NavMeanucolumn1Items.classList.remove('opacity-0', '-translate-x-10');
            NavMeanucolumn1Items.classList.add('opacity-100', 'translate-x-0');
        }, 500);
        setTimeout(() => {
            column2.classList.remove('opacity-0', 'translate-y-10');
            column2.classList.add('opacity-100', 'translate-y-0');
        }, 500);
    }
}

// nav-meanu-item-heading-1 
let NavMeanuHomePageText = document.querySelector('#nav-meanu-home-page')
let NavMeanuHomeinnerDiv = document.querySelector('#nav-meanu-home-page-innner-div')
let NavMeanuHomePageDot = document.querySelector('#nav-meanu-home-page-dot')
let NavMeanuHomePageList = document.querySelector('#nav-meanu-home-page-list')

NavMeanuHomePageText.addEventListener('click', NavMeanuHomePageclick)

function NavMeanuHomePageclick() {
    //  hide other list if their is any open 
    let otherLists = document.querySelectorAll('#nav-meanu-Portfolio-list, #nav-meanu-Services-list');
    otherLists.forEach(list => {
        list.classList.remove('opacity-100', '-translate-y-0');
        list.classList.add('translate-y-32', 'opacity-0', 'hidden');
        NavMeanuHomePageDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuPortfolioDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuServicesDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuOtherPagesDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuPortfolioText.classList.remove('translate-x-4');
        NavMeanuServicesText.classList.remove('translate-x-4');
        NavMeanuNewsletterDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuHomePageText.classList.remove('translate-x-4');
        NavMeanuNewsletterText.classList.remove('translate-x-4');
        NavMeanuNewsletterList.classList.remove('opacity-100', '-translate-y-0');
        NavMeanuNewsletterList.classList.add('translate-y-32', 'opacity-0', 'hidden');
        NavMeanuHomeinnerDiv.classList.remove('transition-all', 'duration-300', 'ease-[cubic-bezier(0,0,0.3642,1)]');
        NavMeanuHomeinnerDiv.classList.add('translate-y-0');

        NavMeanuOtherPagesText.classList.remove('translate-x-4');
        NavMeanuOtherPagesList.classList.add('translate-y-32', 'opacity-0', 'hidden');
    });

    // Animate the inner div up
    NavMeanuHomeinnerDiv.classList.add('transition-all', 'duration-300', 'ease-[cubic-bezier(0,0,0.3642,1)]');
    NavMeanuHomeinnerDiv.classList.remove('translate-y-0');

    // Move the text to the right
    NavMeanuHomePageText.classList.add('translate-x-4');

    // Animate the dot
    NavMeanuHomePageDot.classList.add('bg-[#FFA700]', 'w-2.5', 'h-2.5');

    // Show and animate the list
    NavMeanuHomePageList.classList.add('transition-all', 'duration-300', 'ease-[cubic-bezier(0,0,0.3642,1)]', 'opacity-100', '-translate-y-0');
    NavMeanuHomePageList.classList.remove('translate-y-32', 'opacity-0', 'hidden');
}

// nav-meanu-item-heading-2

let NavMeanuPortfolioText = document.querySelector('#nav-meanu-Portfolio')
let NavMeanuPortfolioinnerDiv = document.querySelector('#nav-meanu-Portfolio-innner-div')
let NavMeanuPortfolioDot = document.querySelector('#nav-meanu-Portfolio-dot')
let NavMeanuPortfolioList = document.querySelector('#nav-meanu-Portfolio-list')

NavMeanuPortfolioText.addEventListener('click', NavMeanuPortfolioclick)

function NavMeanuPortfolioclick() {
    //  hide other list if their is any open 
    let otherLists = document.querySelectorAll('#nav-meanu-home-page-list, #nav-meanu-Services-list, #nav-meanu-Portfolio-list');
    otherLists.forEach(list => {
        list.classList.remove('opacity-100', '-translate-y-0');
        list.classList.add('translate-y-32', 'opacity-0', 'hidden');
        NavMeanuHomePageDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuServicesDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuHomePageText.classList.remove('translate-x-4');
        NavMeanuServicesText.classList.remove('translate-x-4');
        NavMeanuPortfolioDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuPortfolioText.classList.remove('translate-x-4');
        NavMeanuNewsletterDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuNewsletterText.classList.remove('translate-x-4');
        NavMeanuOtherPagesDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuOtherPagesText.classList.remove('translate-x-4');
        NavMeanuOtherPagesList.classList.add('translate-y-32', 'opacity-0', 'hidden');

    });

    // Animate the inner div up
    NavMeanuPortfolioinnerDiv.classList.add('transition-all', 'duration-300', 'ease-[cubic-bezier(0,0,0.3642,1)]');
    NavMeanuPortfolioinnerDiv.classList.remove('translate-y-0');

    // Move the text to the right
    NavMeanuPortfolioText.classList.add('translate-x-4');

    // Animate the dot
    NavMeanuPortfolioDot.classList.add('bg-[#FFA700]', 'w-2.5', 'h-2.5');

    // Show and animate the list
    NavMeanuPortfolioList.classList.add('transition-all', 'duration-300', 'ease-[cubic-bezier(0,0,0.3642,1)]', 'opacity-100', '-translate-y-0');
    NavMeanuPortfolioList.classList.remove('translate-y-32', 'opacity-0', 'hidden');
}

// nav-meanu-item-heading-3

let NavMeanuServicesText = document.querySelector('#nav-meanu-Services')
let NavMeanuServicesinnerDiv = document.querySelector('#nav-meanu-Services-innner-div')
let NavMeanuServicesDot = document.querySelector('#nav-meanu-Services-dot')
let NavMeanuServicesList = document.querySelector('#nav-meanu-Services-list')

NavMeanuServicesText.addEventListener('click', NavMeanuServicesclick)

function NavMeanuServicesclick() {
    //  hide other list if their is any open
    let otherLists = document.querySelectorAll('#nav-meanu-home-page-list, #nav-meanu-Portfolio-list, #nav-meanu-Services-list, #nav-meanu-Newsletter-list');
    otherLists.forEach(list => {
        list.classList.remove('opacity-100', '-translate-y-0');
        list.classList.add('translate-y-32', 'opacity-0', 'hidden');
        NavMeanuHomePageDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuPortfolioDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuHomePageText.classList.remove('translate-x-4');
        NavMeanuPortfolioText.classList.remove('translate-x-4');
        NavMeanuServicesDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuServicesText.classList.remove('translate-x-4');
        NavMeanuNewsletterDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuNewsletterText.classList.remove('translate-x-4');
        NavMeanuOtherPagesDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuOtherPagesText.classList.remove('translate-x-4');
        NavMeanuHomePageList.classList.remove('opacity-100', '-translate-y-0');
        NavMeanuHomePageList.classList.add('translate-y-32', 'opacity-0', 'hidden');
        NavMeanuOtherPagesList.classList.add('translate-y-32', 'opacity-0', 'hidden');
    });

    // Animate the inner div up
    NavMeanuServicesinnerDiv.classList.add('transition-all', 'duration-300', 'ease-[cubic-bezier(0,0,0.3642,1)]');
    NavMeanuServicesinnerDiv.classList.remove('translate-y-0');

    // Move the text to the right
    NavMeanuServicesText.classList.add('translate-x-4');

    // Animate the dot
    NavMeanuServicesDot.classList.add('bg-[#FFA700]', 'w-2.5', 'h-2.5');

    // Show and animate the list
    NavMeanuServicesList.classList.add('transition-all', 'duration-300', 'ease-[cubic-bezier(0,0,0.3642,1)]', 'opacity-100', '-translate-y-0');
    NavMeanuServicesList.classList.remove('translate-y-32', 'opacity-0', 'hidden');
}

// nav-meanu-item-heading-4

let NavMeanuNewsletterText = document.querySelector('#nav-meanu-Newsletter')
let NavMeanuNewsletterinnerDiv = document.querySelector('#nav-meanu-Newsletter-innner-div')
let NavMeanuNewsletterDot = document.querySelector('#nav-meanu-Newsletter-dot')
let NavMeanuNewsletterList = document.querySelector('#nav-meanu-Newsletter-list')

NavMeanuNewsletterText.addEventListener('click', NavMeanuNewsletterclick)

function NavMeanuNewsletterclick() {
    //  hide other list if their is any open
    let otherLists = document.querySelectorAll('#nav-meanu-home-page-list, #nav-meanu-Portfolio-list, #nav-meanu-Services-list, #nav-meanu-Newsletter-list');
    otherLists.forEach(list => {
        list.classList.remove('opacity-100', '-translate-y-0');
        list.classList.add('translate-y-32', 'opacity-0', 'hidden');
        NavMeanuHomePageDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuPortfolioDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuHomePageText.classList.remove('translate-x-4');
        NavMeanuPortfolioText.classList.remove('translate-x-4');
        NavMeanuServicesDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuServicesText.classList.remove('translate-x-4');
        NavMeanuNewsletterDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuNewsletterText.classList.remove('translate-x-4');
        NavMeanuHomePageDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuHomePageText.classList.remove('translate-x-4');
        NavMeanuHomePageList.classList.remove('opacity-100', '-translate-y-0');
        NavMeanuHomePageList.classList.add('translate-y-32', 'opacity-0', 'hidden');
        NavMeanuOtherPagesDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5', 'hidden');
        NavMeanuOtherPagesText.classList.remove('translate-x-4');
        NavMeanuOtherPagesList.classList.add('translate-y-32', 'opacity-0', 'hidden');
    });

    // Animate the inner div up
    NavMeanuNewsletterinnerDiv.classList.add('transition-all', 'duration-300', 'ease-[cubic-bezier(0,0,0.3642,1)]');
    NavMeanuNewsletterinnerDiv.classList.remove('translate-y-0');

    // Move the text to the right
    NavMeanuNewsletterText.classList.add('translate-x-4');

    // Animate the dot
    NavMeanuNewsletterDot.classList.add('bg-[#FFA700]', 'w-2.5', 'h-2.5');

    // Show and animate the list
    NavMeanuNewsletterList.classList.add('transition-all', 'duration-300', 'ease-[cubic-bezier(0,0,0.3642,1)]', 'opacity-100', '-translate-y-0');
    NavMeanuNewsletterList.classList.remove('translate-y-32', 'opacity-0', 'hidden');
}

// nav-meanu-item-heading-5

let NavMeanuOtherPagesText = document.querySelector('#nav-meanu-other-pages')
let NavMeanuOtherPagesinnerDiv = document.querySelector('#nav-meanu-Other-Pages-innner-div')
let NavMeanuOtherPagesDot = document.querySelector('#nav-meanu-Other-Pages-dot')
let NavMeanuOtherPagesList = document.querySelector('#nav-meanu-Other-Pages-list')

NavMeanuOtherPagesText.addEventListener('click', NavMeanuOtherPagesclick)

function NavMeanuOtherPagesclick() {
    //  hide other list if their is any open
    let otherLists = document.querySelectorAll('#nav-meanu-home-page-list, #nav-meanu-Portfolio-list, #nav-meanu-Services-list, #nav-meanu-Newsletter-list');
    otherLists.forEach(list => {
        list.classList.remove('opacity-100', '-translate-y-0');
        list.classList.add('translate-y-32', 'opacity-0', 'hidden');
        NavMeanuHomePageDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuPortfolioDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuHomePageText.classList.remove('translate-x-4');
        NavMeanuPortfolioText.classList.remove('translate-x-4');
        NavMeanuServicesDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuServicesText.classList.remove('translate-x-4');
        NavMeanuNewsletterDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuNewsletterText.classList.remove('translate-x-4');
        NavMeanuHomePageDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuHomePageText.classList.remove('translate-x-4');
        NavMeanuOtherPagesDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuOtherPagesText.classList.remove('translate-x-4');
    });

    // Animate the inner div up
    NavMeanuOtherPagesinnerDiv.classList.add('transition-all', 'duration-300', 'ease-[cubic-bezier(0,0,0.3642,1)]');
    NavMeanuOtherPagesinnerDiv.classList.remove('translate-y-0');

    // Move the text to the right
    NavMeanuOtherPagesText.classList.add('translate-x-4');

    // Animate the dot
    NavMeanuOtherPagesDot.classList.add('bg-[#FFA700]', 'w-2.5', 'h-2.5');

    // Show and animate the list
    NavMeanuOtherPagesList.classList.add('transition-all', 'duration-300', 'ease-[cubic-bezier(0,0,0.3642,1)]', 'opacity-100', '-translate-y-0');
    NavMeanuOtherPagesList.classList.remove('translate-y-32', 'opacity-0', 'hidden');
}

// scroll animation 

const revealElements = document.querySelectorAll('.reveal-on-scroll');

function handleScrollReveal() {
    const windowHeight = window.innerHeight;

    revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        if (rect.top < windowHeight - 11) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible'); // Optional: remove if you want it to stay
        }
    });
}

// Run on scroll and on load
window.addEventListener('scroll', handleScrollReveal);
window.addEventListener('load', handleScrollReveal);

// section 2 image zoom 
document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('zoomImage');
    let lastScrollY = window.scrollY;
    let scale = 1;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            scale += 0.01;
        } else {
            scale -= 0.01;
        }

        scale = Math.min(Math.max(scale, 1), 1.1);
        image.style.transform = `scale(${scale})`;

        lastScrollY = currentScrollY;
    });
});


// customer-img1
let customerImg1Border = document.getElementById('customer-img1-border');
let customerImg1BorderDiv = document.getElementById('customer-img1-border-div');

customerImg1Border.classList.remove('border-white');
customerImg1Border.classList.add('border-[#FF9800]', 'border-4');

if (customerImg1BorderDiv && customerImg1Border) {
    customerImg1BorderDiv.addEventListener('click', borderChange1);
}

let yellow1 = true;
function borderChange1() {
    if (yellow1) {
        customerImg1Border.classList.remove('border-white');
        customerImg1Border.classList.add('border-[#FF9800]', 'border-4');
        customerImg2Border.classList.add('border-white');
        customerImg2Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg3Border.classList.add('border-white');
        customerImg3Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg4Border.classList.add('border-white');
        customerImg4Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg5Border.classList.add('border-white');
        customerImg5Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg6Border.classList.add('border-white');
        customerImg6Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg7Border.classList.add('border-white');
        customerImg7Border.classList.remove('border-[#FF9800]', 'border-4');
    }
}
// customer-img2

let customerImg2Border = document.getElementById('customer-img2-border');
let customerImg2BorderDiv = document.getElementById('customer-img2-border-div');

if (customerImg2BorderDiv && customerImg2Border) {
    customerImg2BorderDiv.addEventListener('click', borderChange2);
}
let yellow2 = true;
function borderChange2() {
    if (yellow2) {
        customerImg2Border.classList.remove('border-white');
        customerImg2Border.classList.add('border-[#FF9800]', 'border-4');
        customerImg1Border.classList.add('border-white');
        customerImg1Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg3Border.classList.add('border-white');
        customerImg3Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg4Border.classList.add('border-white');
        customerImg4Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg5Border.classList.add('border-white');
        customerImg5Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg6Border.classList.add('border-white');
        customerImg6Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg7Border.classList.add('border-white');
        customerImg7Border.classList.remove('border-[#FF9800]', 'border-4');
    }
}
// customer-img3

let customerImg3Border = document.getElementById('customer-img3-border');
let customerImg3BorderDiv = document.getElementById('customer-img3-border-div');

if (customerImg3BorderDiv && customerImg3Border) {
    customerImg3BorderDiv.addEventListener('click', borderChange3);
}
let yellow3 = true;
function borderChange3() {
    if (yellow3) {
        customerImg3Border.classList.remove('border-white');
        customerImg3Border.classList.add('border-[#FF9800]', 'border-4');
        customerImg2Border.classList.add('border-white');
        customerImg2Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg1Border.classList.add('border-white');
        customerImg1Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg4Border.classList.add('border-white');
        customerImg4Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg5Border.classList.add('border-white');
        customerImg5Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg6Border.classList.add('border-white');
        customerImg6Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg7Border.classList.add('border-white');
        customerImg7Border.classList.remove('border-[#FF9800]', 'border-4');
    }
}
// customer-img4

let customerImg4Border = document.getElementById('customer-img4-border');
let customerImg4BorderDiv = document.getElementById('customer-img4-border-div');

if (customerImg4BorderDiv && customerImg4Border) {
    customerImg4BorderDiv.addEventListener('click', borderChange4);
}
let yellow4 = true;
function borderChange4() {
    if (yellow4) {
        customerImg4Border.classList.remove('border-white');
        customerImg4Border.classList.add('border-[#FF9800]', 'border-4');
        customerImg3Border.classList.add('border-white');
        customerImg3Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg2Border.classList.add('border-white');
        customerImg2Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg1Border.classList.add('border-white');
        customerImg1Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg5Border.classList.add('border-white');
        customerImg5Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg6Border.classList.add('border-white');
        customerImg6Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg7Border.classList.add('border-white');
        customerImg7Border.classList.remove('border-[#FF9800]', 'border-4');
    }
}
// customer-img5

let customerImg5Border = document.getElementById('customer-img5-border');
let customerImg5BorderDiv = document.getElementById('customer-img5-border-div');

if (customerImg5BorderDiv && customerImg5Border) {
    customerImg5BorderDiv.addEventListener('click', borderChange5);
}
let yellow5 = true;
function borderChange5() {
    if (yellow5) {
        customerImg5Border.classList.remove('border-white');
        customerImg5Border.classList.add('border-[#FF9800]', 'border-4');
        customerImg4Border.classList.add('border-white');
        customerImg4Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg3Border.classList.add('border-white');
        customerImg3Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg2Border.classList.add('border-white');
        customerImg2Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg1Border.classList.add('border-white');
        customerImg1Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg6Border.classList.add('border-white');
        customerImg6Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg7Border.classList.add('border-white');
        customerImg7Border.classList.remove('border-[#FF9800]', 'border-4');
    }
}
// customer-img6

let customerImg6Border = document.getElementById('customer-img6-border');
let customerImg6BorderDiv = document.getElementById('customer-img6-border-div');

if (customerImg6BorderDiv && customerImg6Border) {
    customerImg6BorderDiv.addEventListener('click', borderChange6);
}
let yellow6 = true;
function borderChange6() {
    if (yellow6) {
        customerImg6Border.classList.remove('border-white');
        customerImg6Border.classList.add('border-[#FF9800]', 'border-4');
        customerImg5Border.classList.add('border-white');
        customerImg5Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg4Border.classList.add('border-white');
        customerImg4Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg3Border.classList.add('border-white');
        customerImg3Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg2Border.classList.add('border-white');
        customerImg2Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg1Border.classList.add('border-white');
        customerImg1Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg7Border.classList.add('border-white');
        customerImg7Border.classList.remove('border-[#FF9800]', 'border-4');
    }
}
// customer-img7

let customerImg7Border = document.getElementById('customer-img7-border');
let customerImg7BorderDiv = document.getElementById('customer-img7-border-div');

if (customerImg7BorderDiv && customerImg7Border) {
    customerImg7BorderDiv.addEventListener('click', borderChange7);
}
let yellow7 = true;
function borderChange7() {
    if (yellow7) {
        customerImg7Border.classList.remove('border-white');
        customerImg7Border.classList.add('border-[#FF9800]', 'border-4');
        customerImg6Border.classList.add('border-white');
        customerImg6Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg5Border.classList.add('border-white');
        customerImg5Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg4Border.classList.add('border-white');
        customerImg4Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg3Border.classList.add('border-white');
        customerImg3Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg2Border.classList.add('border-white');
        customerImg2Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg1Border.classList.add('border-white');
        customerImg1Border.classList.remove('border-[#FF9800]', 'border-4');
    }
}
let currentSlide = 0;
const reviews = document.querySelectorAll('.review-item');
const dots = document.querySelectorAll('.dot');
const dots2 = document.querySelectorAll('.dot2');
const leftArrow = document.getElementById('left-side-arrow');
const LeftArrowSvg = document.getElementById('LeftArrowSvg');
const rightArrow = document.getElementById('right-side-arrow');
const ReftArrowSvg = document.getElementById('ReftArrowSvg');
const totalSlides = reviews.length;

leftArrow.addEventListener('click', removeImgBorder);
rightArrow.addEventListener('click', removeImgBorder);

function removeImgBorder() {
    customerImg1Border.classList.remove('border-[#FF9800]', 'border-4');
    customerImg2Border.classList.remove('border-[#FF9800]', 'border-4');
    customerImg3Border.classList.remove('border-[#FF9800]', 'border-4');
    customerImg4Border.classList.remove('border-[#FF9800]', 'border-4');
    customerImg5Border.classList.remove('border-[#FF9800]', 'border-4');
    customerImg6Border.classList.remove('border-[#FF9800]', 'border-4');
    customerImg7Border.classList.remove('border-[#FF9800]', 'border-4');
}

function showSlide(index) {
    reviews.forEach(review => {
        review.classList.remove('active');
        review.classList.add('inactive');
    });

    dots.forEach(dot => {
        dot.classList.remove('active');
        dot.classList.remove('border-[#FF9800]', 'border-4');
    });

    reviews[index].classList.remove('inactive');
    reviews[index].classList.add('active');

    dots[index].classList.add('active');
    dots[index].classList.add('border-[#FF9800]', 'border-4', 'rounded-full', 'absolute', 'colg:-top-[9.5px]', 'colg:-left-[9.5px]', 'colg:size-[110px]', 'size-[85px]', '-left-[7.5px]', '-top-[7.5px]');

    dots2.forEach(dot => {
        dot.classList.remove('active');
    });

    dots2[index].classList.add('active');

    checkArrowState();
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
}

function checkArrowState() {
    if (currentSlide === 0) {
        leftArrow.classList.add('pointer-events-none', 'bg-[#F1F1F1]');
        leftArrow.classList.remove('cursor-pointer');
        LeftArrowSvg.classList.remove('text-black');
        LeftArrowSvg.classList.add('text-[#D9D9D9]');
    } else {
        leftArrow.classList.remove('pointer-events-none', 'bg-[#F1F1F1]');
        leftArrow.classList.add('cursor-pointer');
        LeftArrowSvg.classList.remove('text-[#D9D9D9]');
        LeftArrowSvg.classList.add('text-black');
    }

    if (currentSlide === totalSlides - 1) {
        rightArrow.classList.add('pointer-events-none', 'bg-[#F1F1F1]');
        rightArrow.classList.remove('cursor-pointer');
        RightArrowSvg.classList.remove('text-black');
        RightArrowSvg.classList.add('text-[#D9D9D9]');
    } else {
        rightArrow.classList.remove('pointer-events-none', 'bg-[#F1F1F1]');
        rightArrow.classList.add('cursor-pointer');
        RightArrowSvg.classList.remove('text-[#D9D9D9]');
        RightArrowSvg.classList.add('text-black');
    }
}

rightArrow.addEventListener('click', nextSlide);
leftArrow.addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

dots2.forEach((dot2, index) => {
    dot2.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

showSlide(currentSlide);
checkArrowState();


