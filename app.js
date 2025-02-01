const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});const translations = {
    en: {
        heroTitle: "Your next ride",
    heroSubtitle: "is just a tap away!",
    heroDescription: "See what makes us different.",
    servicesHeading: "Service For People With Need",
    metroLines: "Metro Lines",
    stations: "Stations",
        home: "Home",
        languages: "Languages",
        tracks: "Tracks",
        tickets: "Tickets",
        plan: "Plan",
        signIn: "Sign In",
        buttonsignUp: "Sign Up",
        heroTitle: "Your next ride",
        heroSubtitle: "is just a tap away!",
        heroDescription: "see what makes us different.",
        metroLines: "Metro Lines",
        stations: "Stations",
        explore: "Explore",
        contactUs: "Contact Us",
        chatBot: "Chat Bot",
        terms: "Terms Of Service",
        LinP: "Purple line",
        LinB: "Blue line",
        LinR: "Read line",
        LinO: "Orange line",
        LinY: "Yellow line",
        LinG: "Green line",
        TBuy:"Buy Ticket",
        TMy:"My Ticket",
        PPYT:"Plan Your Trip",
        PVS:"View Schedule"
    },
    ar: {
        home: "المنزل",
        languages: "اللغات",
        tracks: "المسارات",
        tickets: "التذاكر",
        plan: "الخطط",
        signIn: "تسجيل الدخول",
        buttonsignUp: "إنشاء حساب",
        heroTitle: "رحلتك القادمة",
        heroSubtitle: "مجرد نقرة واحدة بعيدة!",
        heroDescription: "اكتشف ما الذي يجعلنا مختلفين.",
        servicesHeading: "خدمات للأشخاص ذوي الاحتياجات",
        metroLines: "خطوط المترو",
        stations: "المحطات",
        explore: "استكشف",
        contactUs: "تواصل معنا",
        chatBot: "روبوت الدردشة",
        terms: "شروط الخدمة",
        LinP: "المسار البنفسجي",
        LinB: "المسار الازرق",
        LinR: "المسار الاحمر",
        LinO: "المسار البرتقالي",
        LinY: "المسار الاصفر",
        LinG: "المسار الاخضر",
        TBuy:"شراء تذكرة",
        TMy:"تذاكري",
        PPYT:"خطط لرحلتك",
        PVS:"جدول الرحلات"
    }
};
function changeLanguage(lang) {
    document.getElementById("hero-title").textContent = translations[lang].heroTitle;
    document.getElementById("hero-subtitle").textContent = translations[lang].heroSubtitle;
    document.getElementById("hero-description").textContent = translations[lang].heroDescription;
    document.getElementById("button-signUp").textContent = translations[lang].buttonsignUp;
    document.querySelector(".services h1").textContent = translations[lang].servicesHeading;
    document.querySelector(".services__card:nth-child(1) h2").textContent = translations[lang].metroLines;
    document.querySelector(".services__card:nth-child(2) h2").textContent = translations[lang].stations;

    document.getElementById("Lin-P").textContent = translations[lang].LinP;
    document.getElementById("Lin-B").textContent = translations[lang].LinB;
    document.getElementById("Lin-R").textContent = translations[lang].LinR;
    document.getElementById("Lin-O").textContent = translations[lang].LinO ;
    document.getElementById("Lin-Y").textContent = translations[lang].LinY;
    document.getElementById("Lin-G").textContent = translations[lang].LinG;
    document.getElementById("T-Buy").textContent = translations[lang].TBuy;
    document.getElementById("T-My").textContent = translations[lang].TMy;
    document.getElementById("P-PYT").textContent = translations[lang].PPYT;
    document.getElementById("P-VS").textContent = translations[lang].PVS;

    document.querySelector(".navbar__links[href='/']").textContent = translations[lang].home;
    document.querySelector(".language-btn[href='/languages']").textContent = translations[lang].languages;
    document.querySelector(".navbar__links[href='/tracks']").textContent = translations[lang].tracks;
    document.querySelector(".navbar__links[href='/tickets']").textContent = translations[lang].tickets;
    document.querySelector(".navbar__links[href='/plan']").textContent = translations[lang].plan;
    document.querySelector(".navbar__btn a").textContent = translations[lang].signIn;

    document.querySelector(".services__card h2:first-of-type").textContent = translations[lang].metroLines;
    document.querySelector(".services__card h2:last-of-type").textContent = translations[lang].stations;
    document.querySelectorAll(".services__card button").forEach(button => {
        button.textContent = translations[lang].explore;
    });

    const footerLinks = document.querySelectorAll(".footer__link--items a");
    footerLinks[0].textContent = translations[lang].contactUs;
    footerLinks[1].textContent = translations[lang].chatBot;
    footerLinks[2].textContent = translations[lang].terms;
}
document.getElementById("language-ar").addEventListener("click", (e) => {
    e.preventDefault();
    changeLanguage("ar");
});

document.getElementById("language-en").addEventListener("click", (e) => {
    e.preventDefault();
    changeLanguage("en");
});

// app.js

// ****************************************************Pyt*********************************************************/
function findRoute() {
    let start = document.getElementById("start").value;
    let destination = document.getElementById("destination").value;
    
    // إرسال الطلب إلى بايثون (يجب استبدال URL بواجهة بايثون)
    fetch('http://localhost:5000/findRoute', {  // تأكد من تطابق الرابط مع Flask route
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ start: start, destination: destination })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerText = `The Best Route From ${start} To ${destination}: ${data.route.join(' -> ')}, Duration: ${data.duration} minutes.`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("result").innerText = 'Failed to fetch the route.';
    });
}

function findRoute() {
    let start = document.getElementById("start").value;
    let destination = document.getElementById("destination").value;
    
    // إرسال الطلب إلى بايثون (يجب استبدال URL بواجهة بايثون)
    fetch('http://localhost:5000/find_route', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ start: start, destination: destination })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerText = `The Best Route From ${start} To ${destination}: ${data.route}, Duration: ${data.duration} minutes.`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("result").innerText = 'Failed to fetch the route.';
    });
}


// *******************************************MY TICKET CARDS***********************************************************************

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    let index = 0; // Track card order

    function showNextCard() {
        if (index < cards.length) {
            cards[index].classList.add("show");
            index++;
        }
    }

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200 * index) { 
            showNextCard();
        }
    });
});
/*************************************************Sign In*********************************************************/
// دالة تسجيل الدخول
function signIn() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            // تسجيل الدخول تم بنجاح
            const user = userCredential.user;
            console.log("Logged in as: " + user.email);
            window.location.href = "index.html"; // إعادة التوجيه إلى index.html
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
            alert("Error: " + errorMessage); // عرض رسالة خطأ للمستخدم
        });
}






