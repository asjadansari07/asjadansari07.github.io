﻿jQuery(document).ready(function(e){e(".counter-sora").counterUp({delay:10,time:1e3})}),$(document).ready(function(){$(".menu").slicknav({prependTo:".menu-mobile",label:""}),$(".scrolling-menu").slicknav({prependTo:".menu-mobile2",label:""}),$(function(){$(window).on("scroll",function(e){var s=0;$(this).scrollTop()<65?(s=$("#head-trigger").height(),$("#head-trigger").removeClass("scrolled-header")):($("#head-trigger").addClass("scrolled-header"),$("body").css({marginTop:s}),$("#head-trigger").fadeIn())})});var a=$("#googleForm"),c=$("#google_translate_element");let o=navigator.userAgent;var e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|kindle|Opera Mini/i.test(o);let i=-1<o.toString().indexOf("wv");var s,t=(s=!1,function(){if(!s)if(s=!0,-1<o.toString().toLowerCase().indexOf("trident"))$("#zoom").load("Public/images/sqr.svg"),$("#pop-up").load("Public/images/lqr.svg"),$("#pop-up").load("Public/images/lqr.svg",function(){$(this).html($(this).html().replace("webp","png"))});else if(0!==window.scrollY||65<window.scrollY){$(".counter-box").css("background","url(/Public/images/sg-back.webp) no-repeat fixed 50% 50%/cover"),$(".main-gallery").css("background","url(/Public/images/head-back1.webp) no-repeat fixed 50% 50%/cover"),$(".insta-wrap").css("background","url(/Public/images/map.webp) no-repeat fixed 50% 50%/cover").css("position","relative"),$(".insta-wrap .filter,#google_translate_element,#Lqr,#Sqr").css("display","block");let e=document.createElement("script");e.setAttribute("src","https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"),e.setAttribute("type","text/javascript"),document.body.appendChild(e);let s=$("#googleForm");s.attr("src","https://docs.google.com/forms/d/e/1FAIpQLScMJ6lFRbePTtDsSnTRCXPQEOhP8K8nVK5Xb8p-qT69QssbpQ/viewform?embedded=true"),s.css("display","block"),$("#zoom").load("Public/images/sqr.svg"),$("#pop-up").load("Public/images/lqr.svg")}});window.addEventListener("scroll",function(){t()});$(window).height();var r=$(window).width(),n=window.matchMedia("(prefers-color-scheme: dark)").matches;(window.matchMedia&&n?_:j)(),P();var l,d,p,g=window.matchMedia("(prefers-color-scheme: dark)");d="change",p=function(){S()},(l=g).addEventListener?l.addEventListener(d,p,!1):l.attachEvent&&l.attachEvent("on"+d,p),document.addEventListener("contextmenu",function(){event.preventDefault()}),document.onkeydown=function(e){return 123!=e.keyCode&&((!e.ctrlKey||!e.shiftKey||73!=e.keyCode)&&((!e.ctrlKey||!e.shiftKey||74!=e.keyCode)&&((!e.ctrlKey||85!=e.keyCode)&&void 0)))},function(){var e=new RegExp("asjadansari07.github.io");const s=window.location.host;s.match(e)||(function(){let e=document.createElement("h1");e.id="_asj_warning",e.innerText="DON'T STEAL",e.style.fontWeight=700,e.style.position="fixed",e.style.backgroundColor="#ff0000",e.style.color="#ffffff",e.style.padding="12px";var s=$(window.innerWidth/2.5),t=$(window.innerHeight/2.5);e.style.left=s[0]+"px",e.style.top=t[0]+"px",e.style.zIndex=1e19,document.body.appendChild(e)}(),function e(){cornify_add(),window.setTimeout(function(){e(),console.log("%cWARNING-DON'T STEAL!","font: 2em monospace; color: ffffff; background-color: red;")},1e3)}())}();var m=$(".m-backtotop>div.text"),b=$("#imgSkills"),u=$("#vidPlayer"),h=$("#formdiv"),f=$("#Header1_headerimg"),y=$("#header-inner"),k=$("#_asj_warning"),x=$("#pop-up"),w=$("#Lqr"),v=$("video");$("i.color .lnr .lnr-license");switch(!0){case 1200<r:case r<=1200&&1100<r:m.css("font-size","7px").css("font-weight","600"),b.css("display","none"),u.css("display","block"),h.css("padding","40px 40px 5px"),f.css("height","56px").css("width","56px"),k.css("font-size","5em"),x.css("width","175").css("height","175"),w.css("width","175").css("height","175");break;case r<=1100&&980<r:case r<=980&&880<r:m.css("font-size","7px").css("font-weight","600"),b.css("display","none"),u.css("display","block"),h.css("padding","40px 40px 5px"),f.css("height","56px").css("width","56px"),k.css("font-size","4em"),x.css("width","175").css("height","175"),w.css("width","175").css("height","175");break;case r<=880&&768<r:case r<=768&&767<r:m.css("font-size","7px").css("font-weight","600"),b.css("display","none"),u.css("display","block"),h.css("padding","40px 40px 5px"),f.css("height","56px").css("width","56px"),k.css("font-size","3em"),x.css("width","175").css("height","175"),w.css("width","175").css("height","175");break;case r<=767&&480<r:(e?m.css("font-size","7px").css("line-height","10px"):m.css("font-size","4px").css("line-height","8px")).css("width","58%"),b.css("display","block"),u.css("display","none"),h.css("padding","40px 40px 5px"),f.css("height","45px").css("width","45px"),y.css("padding-top","7px"),k.css("font-size","2em"),$("head").append('<meta name="color-scheme" content="dark light" />'),x.css("width","157").css("height","157"),w.css("width","157").css("height","157"),v.css("width","inherit").css("object-fit","cover");break;case r<=480&&360<r:case r<=360&&300<r:(e?m.css("font-size","7px").css("line-height","10px"):m.css("font-size","4px").css("line-height","8px")).css("width","58%"),b.css("display","block"),u.css("display","none"),h.css("padding","20px 20px 5px"),f.css("height","45px").css("width","45px"),y.css("padding-top","7px"),k.css("font-size","1.5em"),$("head").append('<meta name="color-scheme" content="dark light" />'),x.css("width","157").css("height","157"),w.css("width","157").css("height","157"),v.css("width","inherit").css("object-fit","cover"),L();break;case r<=300:(e?m.css("font-size","7px").css("line-height","10px"):m.css("font-size","4px").css("line-height","8px")).css("width","58%"),b.css("display","block"),u.css("display","none"),h.css("padding","20px 20px 5px"),f.css("height","45px").css("width","45px"),y.css("padding-top","7px"),k.css("font-size","1em"),$("head").append('<meta name="color-scheme" content="dark light" />'),x.css("width","157").css("height","157"),w.css("width","157").css("height","157"),v.css("width","inherit").css("object-fit","cover"),L();break;default:m.css("font-size","4px"),b.css("display","block"),u.css("display","none"),h.css("padding","20px 20px 5px"),f.css("height","56px").css("width","56px"),x.css("width","175").css("height","175"),w.css("width","175").css("height","175")}function P(){(-1<o.toString().toLowerCase().indexOf("edge")||-1<o.toString().toLowerCase().indexOf("trident"))&&$("#myvideo").css("position","absolute").css("max-height","none").css("width","auto").css("height","auto"),-1<o.toString().toLowerCase().indexOf("trident")&&($("<style type='text/css'>.mycoll:after{background:red;} </style>").appendTo("head"),$("<style type='text/css'>.mycoll3:before{background:red;} </style>").appendTo("head"),$("<style type='text/css'>.mycoll4{background:red;} </style>").appendTo("head"),$(".slicknav_nav").addClass("mycoll4"),$(".slicknav_menu .slicknav_icon-bar").css("background","none"),$(".flickity-page-dots").css("display","none"),$(".slicknav_menu .slicknav_icon-bar").addClass("mycoll4"),$(".slicknav_menu .slicknav_icon-bar,.slicknav_menu .slicknav_icon-bar").addClass("mycoll3 mycoll"),setTimeout(function(){$("ol.flickity-page-dots").css("display","none")},7e3),$("#header-wrapper").css("background","url(/Public/images/head-back.jpg) no-repeat center bottom").css("background-size","cover").css("background-attachment","fixed"),$(".main-gallery").css("background","url(/Public/images/head-back1.jpg) no-repeat fixed 50% 50%/cover"),$(".insta-wrap").css("background","url(/Public/images/map.jpg) no-repeat fixed 50% 50%/cover").css("position","relative"),$(".counter-box").css("background","url(/Public/images/sg-back.jpg)  no-repeat fixed 50% 50%/cover"),$(".insta-wrap .filter").css("display","block"),$("head").append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css" />'),$("#bundlecss").remove(),$("#noscript").remove(),$("#bundlecss1").remove(),$("head").append('<link rel="stylesheet" href="Public/css/3597120983-css_bundle_v2.css" type="text/css" />'),$("#LinkList236").removeClass("widget"),$('img[alt="Loading..."]').attr("src","Public/images/asj_circle1.png"),$("#Header1_headerimg").attr("src","Public/images/asj_2.png"),$("#qrimg").attr("xlink:href","/Public/images/asj_2.png"),$('img[title="Click to Connect"]').attr("src","Public/images/asj_circle1.png"),$('img[data-src="Public/images/fl.webp"]').attr("class","").attr("src","Public/images/fl.jpg").addClass("testimonial-avatar"),$('img[alt="Asp.Net"]').attr("class","").attr("src","Public/images/aspnet.jpg"),$('img[alt="SQL Server"]').attr("class","").attr("src","Public/images/sql.jpg"),$('img[alt="MS CRM Dynamics"]').attr("class","").attr("src","Public/images/crm.jpg"),$('img[alt="HTML"]').attr("class","").attr("src","Public/images/html.jpg"),$('img[alt="CSS"]').attr("class","").attr("src","Public/images/css.jpg"),$('img[alt="Bootstrap"]').attr("class","").attr("src","Public/images/bootstrap.jpg"),$('img[alt="JavaScript"]').attr("class","").attr("src","Public/images/javascript.jpg"),$('img[alt="JQuery"]').attr("class","").attr("src","Public/images/jquery.jpg"),$('img[alt="Ado.Net"]').attr("class","").attr("src","Public/images/adonet.jpg"),$('img[alt="LINQ"]').attr("class","").attr("src","Public/images/linq.jpg"),$('img[alt="XML"]').attr("class","").attr("src","Public/images/xml.jpg"),$('img[alt="Google Forms"]').attr("class","").attr("src","Public/images/googleform.jpg"),$('img[alt="C#"]').attr("class","").attr("src","Public/images/csharp.jpg"),$('img[alt="JSON"]').attr("class","").attr("src","Public/images/json.jpg"),$('img[alt="AJAX"]').attr("class","").attr("src","Public/images/ajax.jpg"),$('img[alt="Web Service"]').attr("class","").attr("src","Public/images/ws.jpg"),$('img[alt="Web Form"]').attr("class","").attr("src","Public/images/form.jpg"),$('img[alt="MS Office"]').attr("class","").attr("src","Public/images/office.jpg"),$('img[alt="SSRS"]').attr("class","").attr("src","Public/images/ssrs.jpg"),$('img[alt="MVC"]').attr("class","").attr("src","Public/images/mvc.jpg"),$(".counter-sora").css("font-size","60px"),$("#google_translate_element").css("display","none"),$("#iegtranslate").css("display","inline-block").css("color","#ff0000").css("margin-top","12px"),$("#iegform").css("display","inline-block").css("color","#ff0000"),$("#resume a").hover(function(){$(this).css("color","red")},function(){$(this).css("color","white")})),document.documentElement.style.setProperty("--mycol","#FF0000","important"),document.documentElement.style.setProperty("--background","#FF0000","important"),1200<r||r<=1200&&1100<r||r<=1100&&980<r||r<=980&&880<r||r<=880&&768<r||r<=768&&767<r?window.matchMedia&&n?(a.css("filter","invert(0.9)"),c.css("filter","invert(1)")):(a.css("filter","none"),c.css("filter","none")):i||(window.matchMedia&&n?(a.css("filter","invert(0.9)"),c.css("filter","none")):a.css("filter","none"))}$("#nav").onePageNav(),$(".slide-in").onePageNav();var C=0;function _(){$(".preloader1").css("background","rgb(0, 0, 0)"),$(".preloader1-circle").css("background","rgb(0, 0, 0)"),$("body").css("background-color","rgb(0, 0, 0)"),$(".sora-special-box").css("background","rgb(0, 0, 0)"),$(".sora-works-box").css("background","rgb(0, 0, 0)"),$(".sora-about-box").css("background","rgb(0, 0, 0)"),$("#outer-wrapper").css("background","rgb(0, 0, 0)"),$(".bot-bar-menu").css("background","rgb(0, 0, 0)"),document.documentElement.style.setProperty("--bccol","black","important"),document.documentElement.style.setProperty("--scol","white","important"),-1<o.toString().toLowerCase().indexOf("edge")?(document.documentElement.style.setProperty("--bckimg","url(../Public/images/header-mask-black-after.webp) no-repeat center","important"),$(".main-gallery").css("animation-name","none").removeClass("fadeInUp"),$(".counter-box").css("animation-name","none").removeClass("slideInUp")):-1<o.toString().toLowerCase().indexOf("trident")?($("<style type='text/css'>.black:before{color:black;} </style>").appendTo("head"),$(".sora-author-box-text .hello-txt").addClass("black"),$("<style type='text/css'>::selection{text-shadow: white 0 0 2px;} </style>").appendTo("head"),$(".popup_menu .btn1 .fa").css("color","white"),$("<style type='text/css'>.black:after{background:url(../Public/images/header-mask-black-after.png) no-repeat center !important;} </style>").appendTo("head"),$("#header-wrapper").addClass("black"),$("#section-6").addClass("black"),$(".counter-box.wow.slideInUp").addClass("black")):document.documentElement.style.setProperty("--bckimg","url(../images/header-mask-black-after.webp) no-repeat center","important")}function j(){$(".preloader1").css("background","rgb(255, 255, 255)"),$(".preloader1-circle").css("background","rgb(255, 255, 255)"),$("body").css("background-color","rgb(255, 255, 255)"),$(".sora-special-box").css("background","rgb(255, 255, 255)"),$(".sora-works-box").css("background","rgb(255, 255, 255)"),$(".sora-about-box").css("background","rgb(255, 255, 255)"),$("#outer-wrapper").css("background","rgb(255, 255, 255)"),$(".bot-bar-menu").css("background","rgb(255, 255, 255)"),document.documentElement.style.setProperty("--bccol","white","important"),document.documentElement.style.setProperty("--scol","black","important"),-1<o.toString().toLowerCase().indexOf("edge")?(document.documentElement.style.setProperty("--bckimg","url(../Public/images/header-mask-white-after.webp) no-repeat center","important"),$(".main-gallery").css("animation-name","none").removeClass("fadeInUp"),$(".counter-box").css("animation-name","none").removeClass("slideInUp")):-1<o.toString().toLowerCase().indexOf("trident")?($("<style type='text/css'>.white:before{color:white;} </style>").appendTo("head"),$(".sora-author-box-text .hello-txt").addClass("white"),$("<style type='text/css'>::selection{text-shadow: black 0 0 2px;} </style>").appendTo("head"),$(".popup_menu .btn1 .fa").css("color","black"),$("<style type='text/css'>.white:after{background:url(../Public/images/header-mask-white-after.png) no-repeat center !important;} </style>").appendTo("head"),$("#header-wrapper").addClass("white"),$("#section-6").addClass("white"),$(".counter-box.wow.slideInUp").addClass("white")):document.documentElement.style.setProperty("--bckimg","url(../images/header-mask-white-after.webp) no-repeat center","important")}function T(e,s){var t="https://docs.google.com/forms/d/e/1FAIpQLScMJ6lFRbePTtDsSnTRCXPQEOhP8K8nVK5Xb8p-qT69QssbpQ/viewform?embedded=true";s=s.replace(/\s/g,""),1200<e||e<=1200&&1100<e||e<=1100&&980<e||e<=980&&880<e||e<=880&&768<e||e<=768&&767<e?"rgb(0,0,0)"==$("body").css("background-color").replace(/\s/g,"")?(a.css("filter","none"),c.css("filter","none")):(a.css("filter","invert(0.9)"),c.css("filter","invert(1)")):i?matchMedia&&n?"rgb(0,0,0)"==$("body").css("background-color").replace(/\s/g,"")?(a.css("filter","invert(1)"),c.css("filter","invert(1)")):(a.css("filter","none"),c.css("filter","none")):"rgb(255,255,255)"==$("body").css("background-color").replace(/\s/g,"")?(a.css("filter","invert(0.9)"),c.css("filter","invert(1)")):(a.css("filter","none"),c.css("filter","none")):matchMedia&&n?"rgb(0,0,0)"==$("body").css("background-color").replace(/\s/g,"")?(a.attr("data-src",""),a.attr("data-src",t),a.css("filter","none"),c.css("filter","invert(1)")):(a.attr("data-src",""),a.attr("data-src",t),a.css("filter","invert(0.9)"),c.css("filter","none")):"rgb(255,255,255)"==$("body").css("background-color").replace(/\s/g,"")?(a.attr("data-src",""),a.attr("data-src",t),a.css("filter","invert(0.9)"),c.css("filter","invert(1)")):(a.attr("data-src",""),a.attr("data-src",t),a.css("filter","none"),c.css("filter","none"))}function S(){var e=$(".hello-txt").css("background-color");"rgb(255,255,255)"==$("body").css("background-color").replace(/\s/g,"")?(T(r,e),_()):(T(r,e),j())}function E(e,s,t){-1<o.toString().toLowerCase().indexOf("trident")?($(".perctext").css("color",e),$(".testimonial-avatar").hover(function(){$(this).css("border","2px solid "+e)},function(){$(this).css("border","none")}),$("<style type='text/css'>.mycol:after{background:"+e+" !important;} </style>").appendTo("head"),$("<style type='text/css'>.mycol1{color:"+e+" !important;} </style>").appendTo("head"),$("<style type='text/css'>.mycol3:before{background:"+e+" !important;} </style>").appendTo("head"),$("<style type='text/css'>.mycol4{background:"+e+" !important;} </style>").appendTo("head"),$("#resume a").hover(function(){$(this).addClass("mycol mycol1")},function(){$(this).removeClass("mycol1")}),$("#asj").css("color",e).hover(function(){$(this).addClass("mycol")}),$("a.btn-2 span").css("color",e).css("border","1px solid "+e),$("a.btn-2").hover(function(){$(this).addClass("mycol3"),$("a.btn-2 span").css("color","white")},function(){$("a.btn-2 span").css("color",e)}),$(".fancyBtn").addClass("mycol1"),$(".m-theme.active").css("background",e),$(".m-backtotop.active").css("background",e),$(".slicknav_nav").addClass("mycol4"),$(".slicknav_menu .slicknav_icon-bar").css("background","none"),$(".slicknav_menu .slicknav_icon-bar,.slicknav_menu .slicknav_icon-bar").addClass("mycol3 mycol"),$("ol.flickity-page-dots").css("display","none"),$(".block-image .thumb").addClass("mycol3"),$("<style type='text/css'>.hellotext:before{border-left-color:"+e+" !important;} </style>").appendTo("head"),$(".sora-author-box-text .hello-txt").css("background",e).addClass("hellotext"),$(".sora-author-box-text-details .profile-list li .list-button,.works-icons li,.flickity-prev-next-button").css("background",e),$(".header-logo-desc span,.sora-author-box-text .profile-title,.sora-author-box-text .profile-title span,.counter-box-item,.counter-sora,.testimonial-author,.map-me .con-list li i,#iegtranslate,#iegform").css("color",e),$(".flickity-prev-next-button").hover(function(){$(this).css("background","#fff")},function(){$(this).css("background",e)}),$(".top-bar-social ul#social a,.bottom-bar-social ul#social a").hover(function(){$(this).addClass("mycol1")},function(){$(this).removeClass("mycol1")}),$(".socials a i").hover(function(){$(this).css("background",e)},function(){$(this).css("background","none")})):(document.documentElement.style.setProperty("--mycol",e,"important"),document.documentElement.style.setProperty("--background",e,"important")),$(".popup_menu .btn1").css("background",s),$("#androidapk").attr("src",t)}$("#Header1_headerimg").click(function(){S()}),$(".m-theme").click(function(){switch(C){case 0:E("#ffbd2f","rgba(255,189,47,0.5)","Public/images/apk_yellow.gif"),C+=1;break;case 1:E("#00BC22","rgba(0,255,0,0.5)","Public/images/apk_green.gif"),C+=1;break;case 2:E("#0030EF","rgba(0,0,255,0.5)","Public/images/apk_blue.gif"),C+=1;break;case 3:E("#008080","rgba(0,128,128,0.5)","Public/images/apk_teal.gif"),C+=1;break;case 4:E("#FF00FF","rgba(255,0,255,0.5)","Public/images/apk_magenta.gif"),C+=1;break;case 5:E("#FF8000","rgba(255,128,0,0.5)","Public/images/apk_orange.gif"),C+=1;break;case 6:E("#808080","rgba(192,192,192,0.5)","Public/images/apk_grey.gif"),C+=1;break;case 7:default:E("#FF0000","rgba(255,0,0,0.5)","Public/images/apk_red.gif"),C=0}}),$(".trigger").click(function(){$(".popup_menu").toggleClass("active")}),$(window).width()<=1100&&$(".fancyBtn").removeClass("fancyBtn"),$(function(){$("#androidapk").hover(function(){$("#androidapk").animate({left:"-12px"}),$(this).stop(!0).fadeTo(200,1)},function(){$("#androidapk").animate({left:"-12px"}),$(this).stop(!0).fadeTo(200,1)})}),$(function(){$("#androidapk").mouseleave(function(){$("#androidapk").animate({left:"-65px"}),s()},function(){$("#androidapk").animate({left:"-65px"}),s()});function e(){$("#androidapk").delay(7e3).animate({left:"-12px"},s)}var s=function(){$("#androidapk").delay(7e3).animate({left:"-65px"}),e()};e()}),$(".m-backtotop").click(function(){return $("html, body").animate({scrollTop:0},"slow"),!1}),$("#loadmore").click(function(){$("#gal2").is(":visible")?$("#gal3").is(":visible")?($("#gal4").is(":visible")||$("#gal4").show(),$(this).hide(),$("#btntitle").hide()):$("#gal3").show():$("#gal2").show();var e=$(window).scrollTop();$(window).scrollTop(e+1)});new Flickity(".main-gallery",{cellAlign:"left",contain:!0,wrapAround:!0,prevNextButtons:!0,autoPlay:5e3});function L(){navigator.onLine?$("#formdiv").show():$("#formdiv").hide()}setInterval(function(){$("#asj:visible").length||(window.location.href="https://asjadansari07.github.io")},3e3),$(function(){$("#zoom").hover(function(e){$("#pop-up").show()},function(){$("#pop-up").hide()}),$("#zoom").mousemove(function(e){$("#pop-up").css("top",e.pageY+10).css("left",e.pageX+20)})}),setTimeout(function(){var e=$("#webmsrcvid"),s=$("#mp4srcvid");e.attr("data-src","Public/images/beach.webm"),s.attr("data-src","Public/images/beach.mp4"),$("video#myvideo source").each(function(){var e=$(this).attr("data-src");$(this).attr("src",e);var s=this.parentElement;if(-1<o.toString().toLowerCase().indexOf("trident"))try{s.load(),s.play()}catch(e){}else s.load(),s.play().catch(function(e){})})},5e3)});