$(window).bind("load", function () {
    jQuery("#loader").fadeOut("slow");
    jQuery("#preloader").delay(0).fadeOut();
});

window.onload = function () {
    var el = document.querySelector(".slicknav_btn");
    if (el) {
        el.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    }
    var asj = document['getElementById']('asj');
    asj['setAttribute']('href', 'https://asjadansari07.github.io');
    asj['setAttribute']('rel', 'dofollow');
    asj['setAttribute']('title', 'By Asjed Ansari');
    asj['setAttribute']('style', 'display: inline-block!important; font-size: inherit!important; color: var(--mycol)!important; visibility: visible!important;z-index:99!important; opacity: 1!important;');
    asj['innerHTML'] = 'HTML,CSS,JS,Google Form';
}
