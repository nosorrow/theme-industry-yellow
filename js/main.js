var app = {
    select: '',
    equalize: function () {
        const selector = document.querySelectorAll(this.select);
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
