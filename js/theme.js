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
        });
    }
};

/* Fix top navbar on scrolldown */
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

/* Navbar hover */
const $dropdown = $(".navbar-nav li");
const $submenu  = $(".dropdown-submenu");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu:not(.dropdown-submenu)");
const showClass = "show";

$(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
               // $this.find($dropdownMenu).addClass(showClass).fadeIn('slow');
                $this.find($dropdownMenu).fadeIn();
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                // $this.find($dropdownMenu).removeClass(showClass);
                $this.find($dropdownMenu).fadeOut(10);
            }
        );

        $("div.submenu").hover(
            function() {
                $(this).find($submenu).fadeIn()
            },
            function() {
                $(this).find($submenu).fadeOut();
            }
        )
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
});


// Jquery equal height
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
