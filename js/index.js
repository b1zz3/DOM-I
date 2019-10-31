const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// selectors
let elemID = id => document.getElementById(id);
let qSelAll = str => document.querySelectorAll(str);

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");

// test shorthand elemID  --- works! cool :)

// ===== start image load =====

let logo = elemID("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


let cta = elemID("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"]);

let midImg = elemID("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// ===== end image load =====


// ===== start update content =====

let navAnch = qSelAll("a");
navAnch[0].textContent = siteContent["nav"]["nav-item-1"];
navAnch[1].textContent = siteContent["nav"]["nav-item-2"];
navAnch[2].textContent = siteContent["nav"]["nav-item-3"];
navAnch[3].textContent = siteContent["nav"]["nav-item-4"];
navAnch[4].textContent = siteContent["nav"]["nav-item-5"];
navAnch[5].textContent = siteContent["nav"]["nav-item-6"];