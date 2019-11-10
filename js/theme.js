var app = {
    // All selected elements have some height
    equalize: function (elements) {
        elements.element.map(this.equizer);
    },
    equizer: function (select) {
        const selector = document.querySelectorAll(select);
        var Yheight = 0;
        selector.forEach(function (e) {
            let selectorHeight = e.offsetHeight;
            if (selectorHeight > Yheight) {
                Yheight = selectorHeight;

            }
            e.style.height = Yheight + "px";
        })
    }
};

const topContacts = document.getElementById('top-contacts');
const header = document.getElementById('hero');
const headerHeight = header.clientHeight;
const mainmenu = document.getElementById('main-menu');

window.addEventListener('scroll', function (e) {

    if(window.scrollY > header.clientHeight + 45){
        topContacts.classList.add("change-top-cont");
        mainmenu.classList.add("fixed-top", "changednav", "slideInDown", "animated");
    } else {
        topContacts.classList.remove("change-top-cont");
        mainmenu.classList.remove("fixed-top", "changednav", "slideInDown", "animated");
    }

});


function equalize(selector) {
    let height = 0;
    $(selector).each(function () {
        if ($(this).height() > height) {
            height = $(this).height();
        }
    });
    $(selector).each(function () {
        $(selector).height(height);
    });
}
