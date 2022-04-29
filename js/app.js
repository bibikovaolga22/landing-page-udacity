'use strict'
const hamburger = document.querySelector('nav i')
const times = document.querySelector('#mobile-overlay i')
const mobileMenuLink = document.querySelector('.mobile-list a')
times.addEventListener('click', closeMenu)
hamburger.addEventListener('click', openMenu);
window.addEventListener('scroll', createHighLight)
window.addEventListener('scroll', steakyHeader);
window.addEventListener('scroll', highlightMenuOnScroll);
let re = /-/g;

//Create Navigation with smooth scroll
(function createNavElement() {
    const navigationBox = document.querySelector('nav ul');
    const sections = Array.from(document.getElementsByTagName("section"))
    for (let section of sections) {
        const navigationElement = document.createElement('li')
        let navLink = document.createElement('a');
        navLink.className = section.id
        navLink.setAttribute('href', `#${section.id}`)
        let newstr = section.id.replace(re, ' ')
        navLink.innerHTML = newstr;
        navigationElement.appendChild(navLink)
        navigationBox.appendChild(navigationElement)
        navLink.onclick = function (e) {
            e.preventDefault()
            const view = document.getElementById(`${section.id}`)
            view.scrollIntoView({
                behavior: "smooth",
            })

        }

    }
    // Click on logo to go back to the top 
    document.querySelector('.logo').onclick = function () {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
})();

//Highlight active navigation element
function createHighLight(e) {
    if (window.pageYOffset > 300 && window.pageYOffset <= 900) {
        document.querySelector('.about').classList.add('selected');
    } else {
        document.querySelector('.about').classList.remove('selected');
    }
    if (window.pageYOffset > 900 && window.pageYOffset <= 1500) {
        document.querySelector('.projects').classList.add('selected');
    } else {
        document.querySelector('.projects').classList.remove('selected');
    }
    if (window.pageYOffset > 1500 && window.pageYOffset <= 2300) {
        document.querySelector('.pricing').classList.add('selected');
    } else {
        document.querySelector('.pricing').classList.remove('selected');
    }
};

//Create 'go to top' button
(function creategoToTop() {
    const goToTop = document.createElement('div');
    goToTop.className = 'go-to-top';
    goToTop.textContent = 'GO TO TOP';
    const arrowIcon = document.createElement('i')
    arrowIcon.className = "fas fa-arrow-up";
    goToTop.appendChild(arrowIcon)
    document.querySelector('main').appendChild(goToTop);
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 900) {
            goToTop.classList.add('show')
        } else goToTop.classList.remove('show')
    })
    goToTop.addEventListener('click', function () {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })

})();

//Create sticky header
function steakyHeader() {
    const stickyHeader = document.querySelector('header');
    const navigation = document.querySelector('nav')
    if (window.pageYOffset > 0) {
        stickyHeader.classList.add('background');
        navigation.style.height = '70px'
    } else {
        stickyHeader.classList.remove('background');
        navigation.style.height = '100px'
    }
};

//Create banner content
(function createBannerElements() {
    const boxOne = document.querySelector('.one');
    const boxTwo = document.querySelector('.two');
    const figure = document.createElement('figure');
    const headline = document.createElement('h1');
    const highlight = document.createElement('span');
    highlight.textContent = " Start Up Now!";
    highlight.style.color = '#f77850';
    headline.textContent = "Don't Wait - Launch Your";
    headline.appendChild(highlight);
    const paragraph = document.createElement('p');
    paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    const buttons = document.createElement('div');
    buttons.className = 'buttons';
    const buttonOne = document.createElement('button');
    buttonOne.textContent = 'start now';
    const buttonTwo = document.createElement('button');
    buttonTwo.textContent = 'learn more';
    const arr = [headline, paragraph, buttons];
    arr.forEach(element => {
        boxOne.appendChild(element);
    });
    const arr2 = [buttonOne, buttonTwo];
    arr2.forEach(element => {
        buttons.appendChild(element);
    });
    boxTwo.appendChild(figure)
    figure.innerHTML = '<img src="./images-main/startup2.svg"/>'
})();

//Create numbers section
(function getNumbers() {
    const boxFour = document.querySelector('.four ul');
    const numbers = {
        'STARTUPS: ': [10, 12, 15, 18, 25, 39, 44, 58, 66, 79, 80],
        'PARTNERS: ': [100, 150, 225, 375, 452, 557, 689, 792, 864, 933, 1000],
        'CLIENTS: ': ['12K', '15K', ' 40K', ' 50K', ' 66K', ' 78K', ' 85K', ' 92K', '150K', '182K', '200K']
    }
    for (let key in numbers) {
        const boxFourElement = document.createElement('li');
        const boxFourElementText = document.createElement('h3');
        let startUpNum = document.createElement('span');
        boxFourElement.appendChild(boxFourElementText);
        boxFourElementText.textContent = key;
        boxFourElementText.appendChild(startUpNum);
        startUpNum.innerHTML = numbers[key];

        (function getNumbersAnimated() {
            for (let i = 0; i < numbers[key].length; i++) {
                setTimeout(function () { startUpNum.textContent = numbers[key][i]; }, i * 170);
            }
        })();
        boxFour.appendChild(boxFourElement);
        console.log(`${key}: ${numbers[key]}`);
    }
})();

//Create 'About us' section
(function createAboutElements() {
    const boxThree = document.querySelector('.three');
    const headlineTwo = document.createElement('h2')
    headlineTwo.textContent = 'About Us'
    boxThree.appendChild(headlineTwo)
    const textArea = document.createElement('p')
    textArea.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate"
    const buttonThree = document.createElement('button');
    buttonThree.textContent = 'learn more'
    const arr3 = [headlineTwo, textArea, buttonThree];
    arr3.forEach(element => {
        boxThree.appendChild(element)
    });

}());

// Create Grid section
(function CreateGrid() {
    const grid = document.querySelector('.grid');
    const projects = {
        item1: ['item-1', 'overlay-1', 'icon', '<img src="images-grid/zoom.png"/>'],
        item2: ['item-2', 'overlay-2', 'icon', '<img src="images-grid/zoom.png"/>'],
        item3: ['item-3', 'overlay-3', 'icon', '<img src="images-grid/zoom.png"/>'],
        item4: ['item-4', 'overlay-4', 'icon', '<img src="images-grid/zoom.png"/>'],
        item5: ['item-5', 'overlay-5', 'icon', '<img src="images-grid/zoom.png"/>'],
        item6: ['item-6', 'overlay-6', 'icon', '<img src="images-grid/zoom.png"/>'],
    }

    for (let key in projects) {
        const gridElement = document.createElement('div');
        gridElement.className = projects[key][0];
        const overlay = document.createElement('div');
        overlay.className = projects[key][1];
        const icon = document.createElement('div');
        icon.className = projects[key][2];
        const link = document.createElement('a');
        icon.appendChild(link)
        link.innerHTML = projects[key][3];
        overlay.appendChild(icon);
        gridElement.append(overlay);
        grid.appendChild(gridElement);

    };
}());


//Create  'Pricing' section
(function createPricing() {
    const pricing = document.querySelector('.pricing-list');
    const pricingHeadline = document.querySelector('.section-4 h2');
    pricingHeadline.textContent = 'Pricing';

    const pricingList = [
        {
            name: 'Basic',
            description: 'The basic pricing package perfectly suits small startups',
            servises: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
            price: 'FREE',
        },
        {
            name: 'Small Businesses',
            description: 'This plan is highly recommended for most entrepreneurs and startups',
            servises: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
            price: '$179',
        },
        {
            name: 'Corporate',
            description: 'If your startup requiers a  top-lebvel support, this plan is for you! ',
            servises: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
            price: '$379',
        }
    ];

    for (let value of pricingList) {
        const priceBox = document.createElement('div');
        priceBox.className = 'list';
        const planName = document.createElement('h3');
        planName.textContent = value.name;
        priceBox.appendChild(planName);
        const description = document.createElement('h4');
        description.textContent = value.description;
        priceBox.appendChild(description);
        const serviceList = document.createElement('ul');
        serviceList.className = 'servicelist ';
        const price = document.createElement('h5');
        price.textContent = value.price;
        const boxForButton = document.createElement('div');
        boxForButton.className = 'button-box';
        const listButton = document.createElement('button');
        listButton.textContent = 'get started'
        boxForButton.appendChild(listButton)
        listButton.textContent = 'get started'
        value.servises.forEach(element => {
            const servise = document.createElement('li');
            servise.textContent = element;
            serviceList.appendChild(servise)
        });
        priceBox.appendChild(description)
        priceBox.appendChild(serviceList)
        priceBox.appendChild(price);
        priceBox.appendChild(boxForButton);
        pricing.appendChild(priceBox);


    }

}());

//Mobile menu

function openMenu() {
    document.getElementById('mobile-overlay').style.width = '100%'
}
function closeMenu() {
    document.getElementById('mobile-overlay').style.width = '0%'
};


; (function createMobileList() {
    const mobileMenuList = document.querySelector('#mobile-overlay .mobile-list')
    const mobileMenu = {
        'about': 'mobile-highlight-one',
        'projects': 'mobile-highlight-two',
        'pricing': 'mobile-highlight-three'
    }

    const highlights = [];

    for (let key in mobileMenu) {
        mobileMenuList.append(function () {
            const list = document.createElement('li');
            list.className = `${key}`;
            const highlight = function () {
                const div = document.createElement('div');
                div.className = mobileMenu[key];
                return div;
            }();
            list.appendChild(highlight);
            const link = function () {
                let link = document.createElement('a');
                link.setAttribute('href', `#${key}`);
                link.innerHTML = key;
                return link;
            }();
            list.appendChild(link);

            highlights.push(highlight);
            list.onclick = function () {
                for (let h of highlights) {
                    if (h != highlight) {
                        h.style.width = '0';
                    }
                }
                highlight.style.width = '38%';

            }
            return list;
        }());

    }

}());


function highlightMenuOnScroll() {
    if (window.pageYOffset > 500 && window.pageYOffset <= 1000) {
        document.querySelector('.mobile-highlight-one').style.width = '38%'
    } else
        document.querySelector('.mobile-highlight-one').style.width = '0%'

    if (window.pageYOffset > 1000 && window.pageYOffset <= 2500) {
        document.querySelector('.mobile-highlight-two').style.width = '38%'
    } else
        document.querySelector('.mobile-highlight-two').style.width = '0%'

    if (window.pageYOffset > 2500 && window.pageYOffset <= 3500) {
        document.querySelector('.mobile-highlight-three').style.width = '38%'
    } else
        document.querySelector('.mobile-highlight-three').style.width = '0%'

}




function solution(S, K) {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    let day = days.indexOf(S);

    for (let i = 0; i < K; i++) {
        day = day + 1;
        if (day >= days.length) {
            day = 0;

        }
    }


    return days[day]
}

console.log(solution('Wed', 9));


function solution2(S, K) {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    let day = days.indexOf(S);
    let i;
    // for (i = K + day; i - days.length >= 0; i -= days.length);
    i = K + day;
    while (i - days.length >= 0) {
        i -= days.length
    }



    return days[i]
}

console.log(solution2('Wed', 24));




function solution3(S, K) {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[(K + days.indexOf(S)) % days.length];

}

console.log(solution3('Wed', 24));


console.time('s')
console.log(solution('Wed', 7000000000));
console.timeEnd('s')

console.time('s2')
console.log(solution2('Wed', 7000000000));
console.timeEnd('s2')

console.time('s3')
console.log(solution3('Wed', 7000000000));
console.timeEnd('s3')