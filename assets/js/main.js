// Menu links
let getAbout = document.getElementById("getAbout");
let getResume = document.getElementById("getResume");
let getContact = document.getElementById("getContact");
let getOther = document.getElementById("getOther");
let getConclusions = document.getElementById("getConclusions");

// Sections
let about = document.getElementById("about");
let resume = document.getElementById("resume");
let contact = document.getElementById("contact");
let other = document.getElementById("other");
let conclusions = document.getElementById("conclusions");

function removeClass() {
    // Links
    getAbout.classList.remove('selected');
    getResume.classList.remove('selected');
    getContact.classList.remove('selected');
    getOther.classList.remove('selected');
    getConclusions.classList.remove('selected');
    // Sections
    about.classList.remove('view');
    resume.classList.remove('view');
    contact.classList.remove('view');
    other.classList.remove('view');
    conclusions.classList.remove('view');
}

getAbout.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        about.classList.add('view');
        getAbout.classList.add('selected');
    }

});
getResume.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        resume.classList.add('view');
        getResume.classList.add('selected');
    }
})
getContact.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        contact.classList.add('view');
        getContact.classList.add('selected');
    }
})

getOther.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        other.classList.add('view');
        getOther.classList.add('selected');
    }
})

getConclusions.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        conclusions.classList.add('view');
        getConclusions.classList.add('selected');
    }
})
