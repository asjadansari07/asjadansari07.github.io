﻿//document.addEventListener("DOMContentLoaded", function () {
//    var lazyloadImages = document.querySelectorAll("img.lazy");
//    var lazyloadThrottleTimeout;

//    function lazyload() {
//        if (lazyloadThrottleTimeout) {
//            clearTimeout(lazyloadThrottleTimeout);
//        }

//        lazyloadThrottleTimeout = setTimeout(function () {
//            var scrollTop = window.pageYOffset;
//            lazyloadImages.forEach(function (img) {
//                if (img.offsetTop < (window.innerHeight + scrollTop)) {
//                    img.src = img.dataset.src;
//                    img.classList.remove('lazy');
//                }
//            });
//            if (lazyloadImages.length == 0) {
//                document.removeEventListener("scroll", lazyload);
//                window.removeEventListener("resize", lazyload);
//                window.removeEventListener("orientationChange", lazyload);
//            }
//        }, 20);
//    }

//    document.addEventListener("scroll", lazyload);
//    window.addEventListener("resize", lazyload);
//    window.addEventListener("orientationChange", lazyload);
//});

////<![CDATA[
//$(function () {
//    "use strict";
//    $(".header-logo-desc p").typed({
//        strings: ["Asjed Ansari", "a Developer", "a Designer"], //Headlines(Change It)
//        loop: true,
//        startDelay: 1e3,
//        backDelay: 2e3
//    });
//});
////]]>

//$(window).bind("load", function () {
//    jQuery("#loader").fadeOut("slow");
//    jQuery("#preloader").delay(0).fadeOut();
//});

//window.onload = function () {
//    var el = document.querySelector(".slicknav_btn");
//    if (el) {
//        el.addEventListener("click", function () {
//            this.classList.toggle("active");
//        });
//    }
//    var asj = document['getElementById']('asj');
//    asj['setAttribute']('href', 'https://asjadansari07.github.io');
//    asj['setAttribute']('rel', 'dofollow');
//    asj['setAttribute']('title', 'By Asjed Ansari');
//    asj['setAttribute']('style', 'display: inline-block!important; font-size: inherit!important; color: var(--mycol)!important; visibility: visible!important;z-index:99!important; opacity: 1!important;');
//    asj['innerHTML'] = 'HTML,CSS,JS,Google Form';

//    $("div#LinkList230 > div.widget-content > ul#social > li >a[title='email']").css('background', '#ad0000');
//    $("div#LinkList230 > div.widget-content > ul#social > li >a[title='whatsapp']").css('background', '#1C8B82');
//    $("div#LinkList230 > div.widget-content > ul#social > li >a[title='SMS']").css('background', '#CEB00A');
//    $("div#LinkList230 > div.widget-content > ul#social > li >a[title='call']").css('background', '#9CB381');
//}
