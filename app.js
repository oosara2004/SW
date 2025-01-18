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

    // تحديث النصوص في شريط التنقل
    document.querySelector(".navbar__links[href='/']").textContent = translations[lang].home;
    document.querySelector(".navbar__links[href='/languages']").textContent = translations[lang].languages;
    document.querySelector(".navbar__links[href='/tracks']").textContent = translations[lang].tracks;
    document.querySelector(".navbar__links[href='/tickets']").textContent = translations[lang].tickets;
    document.querySelector(".navbar__links[href='/plan']").textContent = translations[lang].plan;
    document.querySelector(".navbar__btn a").textContent = translations[lang].signIn;
   
  
    // تحديث النصوص في القسم الرئيسي
    document.getElementById("hero-title").textContent = translations[lang].heroTitle;
    document.getElementById("hero-subtitle").textContent = translations[lang].heroSubtitle;
    document.getElementById("hero-description").textContent = translations[lang].heroDescription;

    // تحديث نصوص الأقسام الأخرى
    document.querySelector(".services__card h2:first-of-type").textContent = translations[lang].metroLines;
    document.querySelector(".services__card h2:last-of-type").textContent = translations[lang].stations;
    document.querySelectorAll(".services__card button").forEach(button => {
        button.textContent = translations[lang].explore;
    });

    // تحديث نصوص التذييل
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