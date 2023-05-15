const workLoadMoreBtn = document.querySelector('.our-work-button');
const ourWorkHidden = Array.from(document.querySelectorAll('.our-work-pic-hidden'));
let ourWorkClickCounter = 0;
let activeWorkTab = document.querySelector('.our-work-nav-item-active');
workLoadMoreBtn.addEventListener("click", displayHiddenWork);
const loader = document.querySelector('.loader');


function displayHiddenWork(event) {
    workLoadMoreBtn.style = "display:none";
    loader.style = 'display:block';
    setTimeout(() => {
        loader.style = 'display:none';
        workLoadMoreBtn.style = 'display:block';
        if (ourWorkClickCounter < 1) {
            ourWorkHidden.splice(0, 12).map((item) => {
                item.setAttribute('data-display', 'shown');
                if (activeWorkTab.getAttribute('id') === item.getAttribute('data-filter') || activeWorkTab.getAttribute('id') === 'all-works') {
                    item.classList.replace('our-work-pic-hidden', 'our-work-pic');
                };
                ourWorkClickCounter++;
            });
        } else {
            ourWorkHidden.map((item) => {
                item.setAttribute('data-display', 'shown');
                if (activeWorkTab.getAttribute('id') === item.getAttribute('data-filter') || activeWorkTab.getAttribute('id') === 'all-works') {
                    item.classList.replace('our-work-pic-hidden', 'our-work-pic');
                };
            });

            workLoadMoreBtn.style = "display:none";

        }
    }, 2000)
}


const servicesNavBar = document.querySelector('.nav-services-list');
const servicesNavElements = Array.from(document.querySelectorAll('.nav-services-list > li'));
const servicesNavList = Array.from(document.querySelectorAll('.nav-services-descriptions > li'));
console.log(servicesNavList);
servicesNavBar.addEventListener('click', switchServicesTabs);

function switchServicesTabs(event) {
    if(!event.target.classList.contains('.nav-services-item-active')) {
    let activeTab = event.target.getAttribute('data-id');
    servicesNavList.map((item) => {
        if (item.getAttribute('id') === activeTab && !item.classList.contains('nav-services-descriptions-item-active')) {
            item.classList.replace('nav-services-descriptions-item', 'nav-services-descriptions-item-active');
        } else if (item.getAttribute('id') !== activeTab) {
            item.classList.replace('nav-services-descriptions-item-active', 'nav-services-descriptions-item');
        }
    })
    servicesNavElements.map((item) => {
        if (event.target === item) {
            item.classList.replace('nav-services-item', 'nav-services-item-active')
        } else if (event.target !== item) {
            item.classList.replace('nav-services-item-active', 'nav-services-item')
        }
    })
    }
}



const ourWorkNavBar = document.querySelector('.our-work-nav-list');
const ourWorkAll = Array.from(document.querySelectorAll('.our-work-pics > div'));
const ourWorkNavList = Array.from(document.querySelectorAll('.our-work-nav-list > li'));
ourWorkNavBar.addEventListener('click', ourWorkFilter);

console.log(activeWorkTab);
function ourWorkFilter(event) {
    activeWorkTab = event.target;
    ourWorkNavList.map((item) => {
        if (activeWorkTab === item && !activeWorkTab.classList.contains('our-work-nav-item-active')) {
            item.classList.replace('our-work-nav-item', 'our-work-nav-item-active')
        } else if (activeWorkTab !== item || activeWorkTab.classList.contains('our-work-nav-item-active')) {
            item.classList.replace('our-work-nav-item-active', 'our-work-nav-item');
        }
    })
    ourWorkAll.map((item) => {
        if (activeWorkTab.getAttribute('id') === 'all-works' && item.getAttribute('data-display') !== 'hidden') {
            item.classList.replace('our-work-pic-hidden', 'our-work-pic');
        } else if (activeWorkTab.getAttribute('id') === item.getAttribute('data-filter') && item.getAttribute('data-display') !== 'hidden') {
            item.classList.replace('our-work-pic-hidden', 'our-work-pic');
        }
        else if (activeWorkTab.getAttribute('id') !== item.getAttribute('data-filter') && item.getAttribute('class') !== 'our-work-pic-hidden') {
            item.classList.replace('our-work-pic', 'our-work-pic-hidden')
        }
    })
}


$('.people-say-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.people-say-slider-nav'
});

$('.people-say-slider-nav').slick({
    asNavFor: '.people-say-list',
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    focusOnSelect: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                slidesToShow: 1
            }
        }
    ]
});
