﻿jQuery(document).ready(function(s){s(".counter-sora").counterUp({delay:10,time:1e3})}),$(document).ready(function(){var s=$(".hello-txt").css("background-color");function e(s){var e=$(".waves svg");e.length&&e.find("path").attr("fill",s)}$(".menu").slicknav({prependTo:".menu-mobile",label:""}),$(".scrolling-menu").slicknav({prependTo:".menu-mobile2",label:""}),$(function(){$(window).on("scroll",function(s){var e=document.body.scrollTop||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight;document.getElementById("progressBar").style.width=e/t*100+"%";var a=0;65>$(this).scrollTop()?(a=$("#head-trigger").height(),$("#head-trigger").removeClass("scrolled-header"),$("#progressBar").hide()):($("#head-trigger").addClass("scrolled-header"),$("body").css({marginTop:a}),$("#head-trigger").fadeIn(),$("#progressBar").show())})});var t=!1,a=$("#googleForm"),c=$("#google_translate_element");let i=navigator.userAgent,o=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|kindle|Opera Mini/i.test(i),r=i.toString().indexOf("wv")>-1;var n,l=(n=!1,function(){!n&&(n=!0,i.toString().toLowerCase().indexOf("trident")>-1?($("#zoom").load("Public/images/sqr.svg"),$("#pop-up").load("Public/images/lqr.svg"),$(".waves").load("Public/images/waves.svg"),$("#androidsvg").load("Public/images/androidLogo.svg",function(){$("#androidapk").length&&I()}),$("#pop-up").load("Public/images/lqr.svg",function(){$(this).html($(this).html().replace("webp","png"))})):(0!==window.scrollY||window.scrollY>65)&&($(".counter-box,#section-5A").css("background","url(/Public/images/sg-back.webp) no-repeat fixed 50% 50%/cover"),$("#section-5C").css("background","url(/Public/images/head-back.webp) no-repeat fixed 50% 50%/cover"),$(".main-gallery").css("background","url(/Public/images/head-back1.webp) no-repeat fixed 50% 50%/cover"),$(".insta-wrap").css("background","url(/Public/images/map.webp) no-repeat fixed 50% 50%/cover").css("position","relative"),$(".insta-wrap .filter,#Lqr,#Sqr").css("display","block"),navigator.onLine&&!t&&d(),$("#zoom").load("Public/images/sqr.svg"),$("#pop-up").load("Public/images/lqr.svg"),$(".waves").load("Public/images/waves.svg"),$("#androidsvg").load("Public/images/androidLogo.svg",function(){$("#androidapk").length&&($("#androidapk").attr("fill",s),I())})))});function d(){$("#google_translate_element").css("display","block");let s=document.createElement("script");s.setAttribute("src","https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"),s.setAttribute("type","text/javascript"),s.setAttribute("id","transscript"),document.body.appendChild(s);let e=$("#googleForm");e.attr("src",""),e.attr("src","https://docs.google.com/forms/d/e/1FAIpQLScMJ6lFRbePTtDsSnTRCXPQEOhP8K8nVK5Xb8p-qT69QssbpQ/viewform?embedded=true"),e.css("display","block"),t=!0}window.addEventListener("scroll",function(){l()}),$(window).height();var p=$(window).width(),g=window.matchMedia("(prefers-color-scheme: dark)").matches;function h(){m()}function m(){navigator.onLine?(0!==window.scrollY||window.scrollY>65)&&($("#formdiv").show(),$(".contact-title span").show(),$(".con-title").show(),$("#sora_blogger_cntct_form").css("padding-top","50px"),$("#google_translate_element").show(),t||d()):($("#formdiv").hide(),$(".contact-title span").hide(),$(".con-title").hide(),$("#sora_blogger_cntct_form").css("padding-top","0px"),$("#google_translate_element").hide())}var b,u,f="change";window.matchMedia&&g?(z(),S()):(F(),S()),window.addEventListener("online",h),window.addEventListener("offline",h),b=window.matchMedia("(prefers-color-scheme: dark)"),u=function(){O()},b.addEventListener?b.addEventListener(f,u,!1):b.attachEvent&&b.attachEvent("on"+f,u),document.addEventListener("contextmenu",function(){}),document.onkeydown=function(s){if(123==s.keyCode||s.ctrlKey&&s.shiftKey&&73==s.keyCode||s.ctrlKey&&s.shiftKey&&74==s.keyCode||s.ctrlKey&&85==s.keyCode)return!1},function(){let s=RegExp("asjadansari07.github.io"),e=window.location.host,t=!e.match(s);if(t){var a,c;let i;(i=document.createElement("h1")).id="_asj_warning",i.innerText="DON'T STEAL",i.style.fontWeight=700,i.style.position="fixed",i.style.backgroundColor="#ff0000",i.style.color="#ffffff",i.style.padding="12px",a=$(window.innerWidth/2.5),c=$(window.innerHeight/2.5),i.style.left=a[0]+"px",i.style.top=c[0]+"px",i.style.zIndex=1e19,document.body.appendChild(i),function s(){cornify_add(),window.setTimeout(function(){s(),console.log("%cWARNING-DON'T STEAL!","font: 2em monospace; color: ffffff; background-color: red;")},1e3)}()}}();var _=$(".m-backtotop>div.text"),y=$("#info"),x=$("#imgSkills"),k=$("#vidPlayer"),w=$("#formdiv"),v=$("#Header1_headerimg"),P=$("#header-inner"),C=$("#_asj_warning"),j=$("#pop-up"),T=$("#Lqr"),E=$("video");switch($("i.color .lnr .lnr-license"),!0){case p>1200:case p<=1200&&p>1100:_.css("font-size","7px").css("font-weight","600"),x.css("display","none"),k.css("display","block"),w.css("padding","15px 0px 15px 0px"),a.css("width","104%"),v.css("height","56px").css("width","56px"),C.css("font-size","5em"),j.css("width","175").css("height","175"),T.css("width","175").css("height","175"),y.css("width","5%");break;case p<=1100&&p>980:_.css("font-size","7px").css("font-weight","600"),x.css("display","none"),k.css("display","block"),w.css("padding","15px 0px 15px 0px"),a.css("width","104%"),v.css("height","56px").css("width","56px"),C.css("font-size","4em"),j.css("width","175").css("height","175"),T.css("width","175").css("height","175"),y.css("width","5%");break;case p<=980&&p>880:_.css("font-size","7px").css("font-weight","600"),x.css("display","none"),k.css("display","block"),w.css("padding","15px 0px 15px 0px"),a.css("width","104%"),v.css("height","56px").css("width","56px"),C.css("font-size","4em"),j.css("width","175").css("height","175"),T.css("width","175").css("height","175"),y.css("width","6%");break;case p<=880&&p>768:_.css("font-size","7px").css("font-weight","600"),x.css("display","none"),k.css("display","block"),w.css("padding","15px 0px 15px 0px"),a.css("width","103%"),v.css("height","56px").css("width","56px"),C.css("font-size","3em"),j.css("width","175").css("height","175"),T.css("width","175").css("height","175"),y.css("width","3%");break;case p<=768&&p>767:_.css("font-size","7px").css("font-weight","600"),x.css("display","none"),k.css("display","block"),w.css("padding","15px 0px 15px 0px"),a.css("width","103%"),v.css("height","56px").css("width","56px"),C.css("font-size","3em"),j.css("width","175").css("height","175"),T.css("width","175").css("height","175"),y.css("width","3.5%");break;case p<=767&&p>480:o?_.css("font-size","7px").css("line-height","10px").css("width","58%"):_.css("font-size","4px").css("line-height","8px").css("width","58%"),x.css("display","block"),k.css("display","none"),w.css("padding","15px 0px 15px 0px"),a.css("width","103%"),v.css("height","45px").css("width","45px"),P.css("padding-top","7px"),C.css("font-size","2em"),$("head").append('<meta name="color-scheme" content="dark light" />'),j.css("width","157").css("height","157"),T.css("width","157").css("height","157"),E.css("width","inherit").css("object-fit","cover"),y.css("width","3.5%");break;case p<=480&&p>360:o?_.css("font-size","7px").css("line-height","10px").css("width","58%"):_.css("font-size","4px").css("line-height","8px").css("width","58%"),x.css("display","block"),k.css("display","none"),w.css("padding","15px 0px 15px 0px"),a.css("width","101%"),v.css("height","45px").css("width","45px"),P.css("padding-top","7px"),C.css("font-size","1.5em"),$("head").append('<meta name="color-scheme" content="dark light" />'),j.css("width","157").css("height","157"),T.css("width","157").css("height","157"),E.css("width","inherit").css("object-fit","cover"),y.css("width","6%"),m();break;case p<=360&&p>300:o?_.css("font-size","7px").css("line-height","10px").css("width","58%"):_.css("font-size","4px").css("line-height","8px").css("width","58%"),x.css("display","block"),k.css("display","none"),w.css("padding","15px 0px 15px 0px"),a.css("width","101%"),v.css("height","45px").css("width","45px"),P.css("padding-top","7px"),C.css("font-size","1.5em"),$("head").append('<meta name="color-scheme" content="dark light" />'),j.css("width","157").css("height","157"),T.css("width","157").css("height","157"),E.css("width","inherit").css("object-fit","cover"),y.css("width","9%"),m();break;case p<=300:o?_.css("font-size","7px").css("line-height","10px").css("width","58%"):_.css("font-size","4px").css("line-height","8px").css("width","58%"),x.css("display","block"),k.css("display","none"),w.css("padding","15px 0px 15px 0px"),a.css("width","105%"),v.css("height","45px").css("width","45px"),P.css("padding-top","7px"),C.css("font-size","1em"),$("head").append('<meta name="color-scheme" content="dark light" />'),j.css("width","157").css("height","157"),T.css("width","157").css("height","157"),E.css("width","inherit").css("object-fit","cover"),y.css("width","11%"),m();break;default:_.css("font-size","4px"),x.css("display","block"),k.css("display","none"),w.css("padding","15px 0px 15px 0px"),a.css("width","104%"),v.css("height","56px").css("width","56px"),j.css("width","175").css("height","175"),T.css("width","175").css("height","175"),y.css("width","4%")}function S(){(i.toString().toLowerCase().indexOf("edge")>-1||i.toString().toLowerCase().indexOf("trident")>-1)&&$("#myvideo").css("position","absolute").css("max-height","none").css("width","auto").css("height","auto"),i.toString().toLowerCase().indexOf("trident")>-1&&($("<style type='text/css'>.mycoll:after{background:red;} </style>").appendTo("head"),$("<style type='text/css'>.mycoll3:before{background:red;} </style>").appendTo("head"),$("<style type='text/css'>.mycoll4{background:red;} </style>").appendTo("head"),$(".slicknav_nav").addClass("mycoll4"),$(".slicknav_menu .slicknav_icon-bar").css("background","none"),$(".flickity-page-dots").css("display","none"),$(".slicknav_menu .slicknav_icon-bar").addClass("mycoll4"),$(".slicknav_menu .slicknav_icon-bar,.slicknav_menu .slicknav_icon-bar").addClass("mycoll3 mycoll"),setTimeout(function(){$("ol.flickity-page-dots").css("display","none")},7e3),$("#header-wrapper").css("background","url(/Public/images/head-back.jpg) no-repeat center bottom").css("background-size","cover").css("background-attachment","fixed"),$(".main-gallery").css("background","url(/Public/images/head-back1.jpg) no-repeat fixed 50% 50%/cover"),$("#section-5C").css("background","url(/Public/images/head-back.jpg) no-repeat fixed 50% 50%/cover"),$(".insta-wrap").css("background","url(/Public/images/map.jpg) no-repeat fixed 50% 50%/cover").css("position","relative"),$(".counter-box,#section-5A").css("background","url(/Public/images/sg-back.jpg)  no-repeat fixed 50% 50%/cover"),$(".insta-wrap .filter").css("display","block"),$("head").append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css" />'),$("#bundlecss").remove(),$("#noscript").remove(),$("#bundlecss1").remove(),$("head").append('<link rel="stylesheet" href="Public/css/3597120983-css_bundle_v2.css" type="text/css" />'),$("#LinkList236").removeClass("widget"),$('img[alt="Loading..."]').attr("src","Public/images/asj_circle1.png"),$("#Header1_headerimg").attr("src","Public/images/asj_2.png"),$("#qrimg").attr("xlink:href","/Public/images/asj_2.png"),$('img[title="Click to Connect"]').attr("src","Public/images/asj_circle1.png"),$('img[data-src="Public/images/fl.webp"]').attr("class","").attr("src","Public/images/fl.jpg").addClass("testimonial-avatar"),$('img[alt="Asp.Net"]').attr("class","").attr("src","Public/images/aspnet.jpg"),$('img[alt="SQL Server"]').attr("class","").attr("src","Public/images/sql.jpg"),$('img[alt="MS CRM Dynamics"]').attr("class","").attr("src","Public/images/crm.jpg"),$('img[alt="HTML"]').attr("class","").attr("src","Public/images/html.jpg"),$('img[alt="CSS"]').attr("class","").attr("src","Public/images/css.jpg"),$('img[alt="Bootstrap"]').attr("class","").attr("src","Public/images/bootstrap.jpg"),$('img[alt="JavaScript"]').attr("class","").attr("src","Public/images/javascript.jpg"),$('img[alt="JQuery"]').attr("class","").attr("src","Public/images/jquery.jpg"),$('img[alt="Ado.Net"]').attr("class","").attr("src","Public/images/adonet.jpg"),$('img[alt="LINQ"]').attr("class","").attr("src","Public/images/linq.jpg"),$('img[alt="XML"]').attr("class","").attr("src","Public/images/xml.jpg"),$('img[alt="Google Forms"]').attr("class","").attr("src","Public/images/googleform.jpg"),$('img[alt="C#"]').attr("class","").attr("src","Public/images/csharp.jpg"),$('img[alt="JSON"]').attr("class","").attr("src","Public/images/json.jpg"),$('img[alt="AJAX"]').attr("class","").attr("src","Public/images/ajax.jpg"),$('img[alt="Web Service"]').attr("class","").attr("src","Public/images/ws.jpg"),$('img[alt="Web Form"]').attr("class","").attr("src","Public/images/form.jpg"),$('img[alt="MS Office"]').attr("class","").attr("src","Public/images/office.jpg"),$('img[alt="SSRS"]').attr("class","").attr("src","Public/images/ssrs.jpg"),$('img[alt="MVC"]').attr("class","").attr("src","Public/images/mvc.jpg"),$('img[alt="Certificate4"]').attr("class","").attr("src","Public/images/Summit_Award_Certificate_Jul2020.jpg"),$('img[alt="Certificate2"]').attr("class","").attr("src","Public/images/Summit_Award_Certificate_Jan2022.jpg"),$('img[alt="MVC Certificate"]').attr("class","").attr("src","Public/images/MVC_Certificate.jpg"),$('img[alt="Certificate3"]').attr("class","").attr("src","Public/images/AppCardRepSep2020.jpg"),$('img[alt="Certificate5"]').attr("class","").attr("src","Public/images/AppCardRepJun2020.jpg"),$('img[alt="Certificate1"]').attr("class","").attr("src","Public/images/AppCardRepJul2022.jpg"),$('img[alt="Certificate6"]').attr("class","").attr("src","Public/images/AppCardRepJan2020.jpg"),$(".counter-sora").css("font-size","60px"),$("#google_translate_element").css("display","none"),$("#iegtranslate").css("display","inline-block").css("color","#ff0000").css("margin-top","12px"),$("#iegform").css("display","inline-block").css("color","#ff0000"),$("#resume a").hover(function(){$(this).css("color","red")},function(){$(this).css("color","white")})),document.documentElement.style.setProperty("--mycol","#008080","important"),document.documentElement.style.setProperty("--background","#008080","important"),p>1200||p<=1200&&p>1100||p<=1100&&p>980||p<=980&&p>880||p<=880&&p>768||p<=768&&p>767?window.matchMedia&&g?(a.css("filter","invert(0.9)"),c.css("filter","invert(1)")):(a.css("filter","none"),c.css("filter","none")):r||(window.matchMedia&&g?(a.css("filter","invert(0.9)"),c.css("filter","none")):a.css("filter","none"))}$("#nav").onePageNav(),$(".slide-in").onePageNav();var L=0;function z(){$(".preloader1").css("background","rgb(0, 0, 0)"),$(".preloader1-circle").css("background","rgb(0, 0, 0)"),$("body").css("background-color","rgb(0, 0, 0)"),$(".sora-special-box").css("background","rgb(0, 0, 0)"),$(".sora-works-box").css("background","rgb(0, 0, 0)"),$(".sora-about-box").css("background","rgb(0, 0, 0)"),$("#outer-wrapper").css("background","rgb(0, 0, 0)"),$(".bot-bar-menu").css("background","rgb(0, 0, 0)"),document.documentElement.style.setProperty("--bccol","black","important"),document.documentElement.style.setProperty("--scol","white","important"),i.toString().toLowerCase().indexOf("edge")>-1?(document.documentElement.style.setProperty("--bckimg","url(../Public/images/header-mask-black-after.webp) no-repeat center","important"),$(".main-gallery").css("animation-name","none").removeClass("fadeInUp"),$(".counter-box").css("animation-name","none").removeClass("slideInUp")):i.toString().toLowerCase().indexOf("trident")>-1?($("<style type='text/css'>.black:before{color:black;} </style>").appendTo("head"),$(".sora-author-box-text .hello-txt").addClass("black"),$("<style type='text/css'>::selection{text-shadow: white 0 0 2px;} </style>").appendTo("head"),$(".popup_menu .btn1 .fa").css("color","white"),$("<style type='text/css'>.black:after{background:url(../Public/images/header-mask-black-after.png) no-repeat center !important;} </style>").appendTo("head"),$("#header-wrapper").addClass("black"),$("#section-6").addClass("black"),$(".counter-box.wow.slideInUp").addClass("black")):document.documentElement.style.setProperty("--bckimg","url(../images/header-mask-black-after.webp) no-repeat center","important")}function F(){$(".preloader1").css("background","rgb(255, 255, 255)"),$(".preloader1-circle").css("background","rgb(255, 255, 255)"),$("body").css("background-color","rgb(255, 255, 255)"),$(".sora-special-box").css("background","rgb(255, 255, 255)"),$(".sora-works-box").css("background","rgb(255, 255, 255)"),$(".sora-about-box").css("background","rgb(255, 255, 255)"),$("#outer-wrapper").css("background","rgb(255, 255, 255)"),$(".bot-bar-menu").css("background","rgb(255, 255, 255)"),document.documentElement.style.setProperty("--bccol","white","important"),document.documentElement.style.setProperty("--scol","black","important"),i.toString().toLowerCase().indexOf("edge")>-1?(document.documentElement.style.setProperty("--bckimg","url(../Public/images/header-mask-white-after.webp) no-repeat center","important"),$(".main-gallery").css("animation-name","none").removeClass("fadeInUp"),$(".counter-box").css("animation-name","none").removeClass("slideInUp")):i.toString().toLowerCase().indexOf("trident")>-1?($("<style type='text/css'>.white:before{color:white;} </style>").appendTo("head"),$(".sora-author-box-text .hello-txt").addClass("white"),$("<style type='text/css'>::selection{text-shadow: black 0 0 2px;} </style>").appendTo("head"),$(".popup_menu .btn1 .fa").css("color","black"),$("<style type='text/css'>.white:after{background:url(../Public/images/header-mask-white-after.png) no-repeat center !important;} </style>").appendTo("head"),$("#header-wrapper").addClass("white"),$("#section-6").addClass("white"),$(".counter-box.wow.slideInUp").addClass("white")):document.documentElement.style.setProperty("--bckimg","url(../images/header-mask-white-after.webp) no-repeat center","important")}function A(s,e){var t="https://docs.google.com/forms/d/e/1FAIpQLScMJ6lFRbePTtDsSnTRCXPQEOhP8K8nVK5Xb8p-qT69QssbpQ/viewform?embedded=true";e=e.replace(/\s/g,""),s>1200||s<=1200&&s>1100||s<=1100&&s>980||s<=980&&s>880||s<=880&&s>768||s<=768&&s>767?"rgb(0,0,0)"==$("body").css("background-color").replace(/\s/g,"")?(a.css("filter","none"),c.css("filter","none")):(a.css("filter","invert(0.9)"),c.css("filter","invert(1)")):r?matchMedia&&g?"rgb(0,0,0)"==$("body").css("background-color").replace(/\s/g,"")?(a.css("filter","invert(1)"),c.css("filter","invert(1)")):(a.css("filter","none"),c.css("filter","none")):"rgb(255,255,255)"==$("body").css("background-color").replace(/\s/g,"")?(a.css("filter","invert(0.9)"),c.css("filter","invert(1)")):(a.css("filter","none"),c.css("filter","none")):matchMedia&&g?"rgb(0,0,0)"==$("body").css("background-color").replace(/\s/g,"")?(a.attr("data-src",""),a.attr("data-src",t),a.css("filter","none"),c.css("filter","invert(1)")):(a.attr("data-src",""),a.attr("data-src",t),a.css("filter","invert(0.9)"),c.css("filter","none")):"rgb(255,255,255)"==$("body").css("background-color").replace(/\s/g,"")?(a.attr("data-src",""),a.attr("data-src",t),a.css("filter","invert(0.9)"),c.css("filter","invert(1)")):(a.attr("data-src",""),a.attr("data-src",t),a.css("filter","none"),c.css("filter","none"))}function O(){"rgb(255,255,255)"==$("body").css("background-color").replace(/\s/g,"")?(A(p,s),z()):(A(p,s),F())}function M(s,e){i.toString().toLowerCase().indexOf("trident")>-1?($(".perctext").css("color",s),$(".testimonial-avatar").hover(function(){$(this).css("border","2px solid "+s)},function(){$(this).css("border","none")}),$("<style type='text/css'>.mycol:after{background:"+s+" !important;} </style>").appendTo("head"),$("<style type='text/css'>.mycol1{color:"+s+" !important;} </style>").appendTo("head"),$("<style type='text/css'>.mycol3:before{background:"+s+" !important;} </style>").appendTo("head"),$("<style type='text/css'>.mycol4{background:"+s+" !important;} </style>").appendTo("head"),$("#resume a").hover(function(){$(this).addClass("mycol mycol1")},function(){$(this).removeClass("mycol1")}),$("#asj").css("color",s).hover(function(){$(this).addClass("mycol")}),$("a.btn-2 span").css("color",s).css("border","1px solid "+s),$("a.btn-2").hover(function(){$(this).addClass("mycol3"),$("a.btn-2 span").css("color","white")},function(){$("a.btn-2 span").css("color",s)}),$(".fancyBtn").addClass("mycol1"),$(".m-theme.active").css("background",s),$(".m-backtotop.active").css("background",s),$(".slicknav_nav").addClass("mycol4"),$(".slicknav_menu .slicknav_icon-bar").css("background","none"),$(".slicknav_menu .slicknav_icon-bar,.slicknav_menu .slicknav_icon-bar").addClass("mycol3 mycol"),$("ol.flickity-page-dots").css("display","none"),$(".block-image .thumb").addClass("mycol3"),$("<style type='text/css'>.hellotext:before{border-left-color:"+s+" !important;} </style>").appendTo("head"),$(".sora-author-box-text .hello-txt").css("background",s).addClass("hellotext"),$(".sora-author-box-text-details .profile-list li .list-button,.works-icons li,.flickity-prev-next-button").css("background",s),$(".header-logo-desc span,.sora-author-box-text .profile-title,.sora-author-box-text .profile-title span,.counter-box-item,.counter-sora,.testimonial-author,.map-me .con-list li i,#iegtranslate,#iegform").css("color",s),$(".flickity-prev-next-button").hover(function(){$(this).css("background","#fff")},function(){$(this).css("background",s)}),$(".top-bar-social ul#social a,.bottom-bar-social ul#social a").hover(function(){$(this).addClass("mycol1")},function(){$(this).removeClass("mycol1")}),$(".socials a i").hover(function(){$(this).css("background",s)},function(){$(this).css("background","none")})):(document.documentElement.style.setProperty("--mycol",s,"important"),document.documentElement.style.setProperty("--background",s,"important")),$(".popup_menu .btn1").css("background",e),$("#androidapk").attr("fill",s)}function I(){$("#androidapk").delay(7e3).animate({left:"-12px"},q)}function q(){$("#androidapk").delay(7e3).animate({left:"-65px"}),I()}$("#Header1_headerimg").click(function(){O()}),$(".m-theme").click(function(){switch(L){case 0:M("#ffbd2f","rgba(255,189,47,0.5)"),e("#ffbd2f"),L+=1;break;case 1:M("#00BC22","rgba(0,255,0,0.5)"),e("#00BC22"),L+=1;break;case 2:M("#0030EF","rgba(0,0,255,0.5)"),e("#0030EF"),L+=1;break;case 3:M("#FF0000","rgba(255,0,0,0.5)"),e("#FF0000"),L+=1;break;case 4:M("#FF00FF","rgba(255,0,255,0.5)"),e("#FF00FF"),L+=1;break;case 5:M("#FF8000","rgba(255,128,0,0.5)"),e("#FF8000"),L+=1;break;case 6:M("#808080","rgba(192,192,192,0.5)"),e("#808080"),L+=1;break;default:M("#008080","rgba(0,128,128,0.5)"),e("#008080"),L=0}}),$(".trigger").click(function(){$(".popup_menu").toggleClass("active")}),1100>=$(window).width()&&$(".fancyBtn").removeClass("fancyBtn"),$(document).on("mouseenter","#androidapk",function(){$(this).stop(!0).animate({left:"-12px"},200).fadeTo(200,1)}),$(document).on("mouseleave","#androidapk",function(){$(this).stop(!0).animate({left:"-65px"},200),q()}),$(".m-backtotop").click(function(){return $("html, body").animate({scrollTop:0},"slow"),!1}),$("#loadmore").click(function(){$("#gal2").is(":visible")?$("#gal3").is(":visible")?$("#gal4").is(":visible")?($(this).hide(),$("#btntitle").hide()):($("#gal4").show(),$(this).hide(),$("#btntitle").hide()):$("#gal3").show():$("#gal2").show();var s=$(window).scrollTop();$(window).scrollTop(s+1)}),$("#loadmore1").click(function(){$("#cert1").is(":visible")?$("#cert2").is(":visible")?($(this).hide(),$("#btntitle1").hide()):($("#cert2").show(),$(this).hide(),$("#btntitle1").hide()):$("#cert1").show();var s=$(window).scrollTop();$(window).scrollTop(s+1)}),$("#loadmore2").click(function(){$("#proj1").is(":visible")?$("#proj2").is(":visible")?$("#proj3").is(":visible")?$("#proj4").is(":visible")?$("#proj5").is(":visible")?$("#proj6").is(":visible")?($(this).hide(),$("#btntitle2").hide()):($("#proj6").show(),$(this).hide(),$("#btntitle2").hide()):$("#proj5").show():$("#proj4").show():$("#proj3").show():$("#proj2").show():$("#proj1").show();var s=$(window).scrollTop();$(window).scrollTop(s+1)}),$("#loadmore3").click(function(){$("#train1").is(":visible")?($(this).hide(),$("#btntitle3").hide()):(p>=873&&p<=1136?$("#train1").css("display","inline-flex"):$("#train1").show(),$(this).hide(),$("#btntitle3").hide());var s=$(window).scrollTop();$(window).scrollTop(s+1)}),new Flickity(".main-gallery",{cellAlign:"left",contain:!0,wrapAround:!0,prevNextButtons:!0,autoPlay:5e3}),setInterval(function(){$("#asj:visible").length||(window.location.href="https://asjadansari07.github.io")},3e3),$(function(){$("#zoom").hover(function(s){$("#pop-up").show()},function(){$("#pop-up").hide()}),$("#zoom").mousemove(function(s){$("#pop-up").css("top",s.pageY+10).css("left",s.pageX+20)})}),setTimeout(function(){var s=$("#webmsrcvid"),e=$("#mp4srcvid");s.attr("data-src","Public/images/beach.webm"),e.attr("data-src","Public/images/beach.mp4"),$("video#myvideo source").each(function(){var s=$(this).attr("data-src");$(this).attr("src",s);var e=this.parentElement;if(i.toString().toLowerCase().indexOf("trident")>-1)try{e.load(),e.play()}catch(t){}else e.load(),e.play().catch(function(s){})})},5e3)});