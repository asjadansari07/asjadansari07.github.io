$(document).ready(function () {    
    $('.menu')['slicknav']({
        prependTo: '.menu-mobile',
        label: ''
    });
    $('.scrolling-menu')['slicknav']({
        prependTo: '.menu-mobile2',
        label: ''
    })
    $(function () {

        $(window).on("scroll", function (e) {

            var height = 0;
            var scrollTop = $(this).scrollTop();

            if (scrollTop < 66) {
                height = $("#head-trigger").height();
                $("#head-trigger").removeClass("scrolled-header");
            }

            else {
                $("#head-trigger").addClass("scrolled-header");
                $("body").css({ "marginTop": height });
                $("#head-trigger").fadeIn();
            }

        });


    });
    disableoptions();
    //if website steal-start
    (function () { 
        //const rgx = new RegExp(/(domainName)|(:portNumUsedInLocalDev)|/g); 
        //const rgx = new RegExp('localhost:6250');
        const rgx = new RegExp('asjadansari07.github.io');
const host = window.location.host; 
const isMatch = !host.match(rgx); 
 
        function showWarning() { 
            let warning = document.createElement('h1');
            warning.id='_asj_warning';
            warning.innerText = 'DON\'T STEAL'; 
            //warning.style.fontSize = '5em'; 
            warning.style.fontWeight = 700; 
            warning.style.position = 'fixed';
            warning.style.backgroundColor='#ff0000';
            warning.style.color='#ffffff';
            warning.style.padding='12px';
            warning.style.left = `${(window.innerWidth/2.5)}px`; 
            warning.style.top =`${ window.innerHeight /2}px`;                     
            warning.style.zIndex = 9999999999999999999; 
            document.body.appendChild(warning); 
        } 
 
        function exactRvg () { 
            cornify_add(); 
 
            window.setTimeout(()=> { 
                exactRvg(); 
            console.log("%cWARNING-DON\'T STEAL!", "font: 2em monospace; color: ffffff; background-color: red;");
        }, 1000); 
 
    } 
if (isMatch ) { 
        showWarning(); 
    exactRvg(); 
    //$.getScript('Public/js/cornify.js',function(){ 
    //    exactRvg(); 
    //}); 
} 
 
})(); 
//if website steal-end


    var h=$(window).height(); // New height
    var w=$(window).width(); // New width
    var ele=$('.m-backtotop>div.text')
    var skillimg=$('#imgSkills')
    var skillvid=$('#vidPlayer')
    var formdiv=$('#formdiv')
    var hlogo=$('#Header1_headerimg')
    var hinner=$('#header-inner')
    var asj_warning=$('#_asj_warning')
    switch (true) {                
        case (w>1200):
            ele.css("font-size","7px");
            ele.css("font-weight","600");
            skillimg.css("display","none")
            skillvid.css("display","block")
            formdiv.css("padding","40px 40px 5px")
            hlogo.css("height","56px").css("width","56px")   
            asj_warning.css("font-size","5em");
            break;
        case (w<=1200 && w>1100):
            ele.css("font-size","7px");
            ele.css("font-weight","600");
            skillimg.css("display","none")
            skillvid.css("display","block")
            formdiv.css("padding","40px 40px 5px")
            hlogo.css("height","56px").css("width","56px")
            asj_warning.css("font-size","5em");
            break;
        case (w<=1100 && w>980):
            ele.css("font-size","7px");
            ele.css("font-weight","600");
            skillimg.css("display","none")
            skillvid.css("display","block")
            formdiv.css("padding","40px 40px 5px")
            hlogo.css("height","56px").css("width","56px")
            asj_warning.css("font-size","4em");
            break;
        case (w<=980 && w>880):
            ele.css("font-size","7px");
            ele.css("font-weight","600");
            skillimg.css("display","none")
            skillvid.css("display","block")
            formdiv.css("padding","40px 40px 5px")
            hlogo.css("height","56px").css("width","56px")
            asj_warning.css("font-size","4em");
            break;
        case (w<=880 && w>768):
            ele.css("font-size","7px");
            ele.css("font-weight","600");
            skillimg.css("display","none")
            skillvid.css("display","block")
            formdiv.css("padding","40px 40px 5px")
            hlogo.css("height","56px").css("width","56px")
            asj_warning.css("font-size","3em");
            break;
        case (w<=768 && w>767):
            ele.css("font-size","7px");
            ele.css("font-weight","600");
            skillimg.css("display","none")
            skillvid.css("display","block")
            formdiv.css("padding","40px 40px 5px")
            hlogo.css("height","56px").css("width","56px")
            asj_warning.css("font-size","3em");
            break;
        case (w<=767 && w>480):
            ele.css("font-size","4px");
            skillimg.css("display","block")
            skillvid.css("display","none")
            formdiv.css("padding","40px 40px 5px")
            hlogo.css("height","45px").css("width","45px")
            hinner.css("padding-top","7px")
            asj_warning.css("font-size","2em");
            break;
        case (w<=480 && w>360):
            ele.css("font-size","4px");                    
            skillimg.css("display","block")
            skillvid.css("display","none")
            formdiv.css("padding","20px 20px 5px")
            hlogo.css("height","45px").css("width","45px")
            hinner.css("padding-top","7px")
            asj_warning.css("font-size","1.5em");
            break;
        case (w<=360 && w>300):
            ele.css("font-size","4px");    
            skillimg.css("display","block")
            skillvid.css("display","none")
            formdiv.css("padding","20px 20px 5px")
            hlogo.css("height","45px").css("width","45px")
            hinner.css("padding-top","7px")
            asj_warning.css("font-size","1.5em");
            break;
        case (w<=300):
            ele.css("font-size","4px");   
            skillimg.css("display","block")
            skillvid.css("display","none")
            formdiv.css("padding","20px 20px 5px")
            hlogo.css("height","45px").css("width","45px")
            hinner.css("padding-top","7px")
            asj_warning.css("font-size","1em");
            break;
        default:
            ele.css("font-size","4px");   
            skillimg.css("display","block")
            skillvid.css("display","none")
            formdiv.css("padding","20px 20px 5px")
            hlogo.css("height","56px").css("width","56px")
            break;
    }

    $('#nav').onePageNav();
    $('.slide-in').onePageNav();
    document.documentElement.style.setProperty('--mycol', '#FF0000', 'important');
    document.documentElement.style.setProperty('--background', '#FF0000', 'important');
    var matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(matched){        
        changeThemeMode();
    }
    else{
        document.documentElement.style.setProperty('--bckimg', 'url(../images/header-mask-white-after.webp) no-repeat center', 'important');
    }
    window.matchMedia('(prefers-color-scheme: dark)')
.addEventListener('change', event => {
    changeThemeMode();
})            
var counter = 0;
$("#Header1_headerimg").click(function () {
    changeThemeMode();
});
$(".m-theme").click(function () {
    switch (counter) {
        case 0:
            changeColor('#ffbd2f', 'rgba(255,189,47,0.5)', 'Public/images/apk_yellow.gif', 'https://docs.google.com/forms/d/e/1FAIpQLSfNb2Kzqwg1ABhvCjaUbFcUw_zRzrF18AK5aaOF1SnWkdpMZA/viewform?embedded=true');
            counter += 1;
            break;
        case 1:
            changeColor('#00BC22', 'rgba(0,255,0,0.5)', 'Public/images/apk_green.gif', 'https://docs.google.com/forms/d/e/1FAIpQLSejjLWlzY8VK2eO-bhy5JzNHhumu7VXdTEGG8tpPn4EDC5jyQ/viewform?embedded=true');
            counter += 1;
            break;
        case 2:
            changeColor('#0030EF', 'rgba(0,0,255,0.5)', 'Public/images/apk_blue.gif', 'https://docs.google.com/forms/d/e/1FAIpQLSelvtCeFbRzhve1QF3h5nODdntJvFePBabgZiLuDxsuLGZjQA/viewform?embedded=true');
            counter += 1;
            break;
        case 3:
            changeColor('#008080', 'rgba(0,128,128,0.5)', 'Public/images/apk_teal.gif', 'https://docs.google.com/forms/d/e/1FAIpQLScS8s6OrBD3UmDvtTZqPg3j1WcmWptpsubVhLoSqgyY51fnng/viewform?embedded=true');
            counter += 1;
            break;
        case 4:
            changeColor('#FF00FF', 'rgba(255,0,255,0.5)', 'Public/images/apk_magenta.gif', 'https://docs.google.com/forms/d/e/1FAIpQLSeXyW2PDxsG5Y_R5eTmWrtWjG-vMJQvYXWksHXFC3TbEO7QxQ/viewform?embedded=true');
            counter += 1;
            break;
        case 5:
            changeColor('#FF8000', 'rgba(255,128,0,0.5)', 'Public/images/apk_orange.gif', 'https://docs.google.com/forms/d/e/1FAIpQLSdcda7CfmBlvKwIIhOp8OMMbGiaEWheI8fyUJqsQ0RxK0EDRQ/viewform?embedded=true');
            counter += 1;
            break;
        case 6:
            changeColor('#C0C0C0', 'rgba(192,192,192,0.5)', 'Public/images/apk_grey.gif', 'https://docs.google.com/forms/d/e/1FAIpQLScMJ6lFRbePTtDsSnTRCXPQEOhP8K8nVK5Xb8p-qT69QssbpQ/viewform?embedded=true');
            counter += 1;
            break;
        case 7:
            changeColor('#FF0000', 'rgba(255,0,0,0.5)', 'Public/images/apk_red.gif', 'https://docs.google.com/forms/d/e/1FAIpQLSex6H7IrFV1OfAGRVnfflw9dv2Z0F2vCTQ2NcoWmL7Q4WPyOg/viewform?embedded=true');
            counter = 0;
            break;
        default:
            changeColor('#FF0000', 'rgba(255,0,0,0.5)', 'Public/images/apk_red.gif', 'https://docs.google.com/forms/d/e/1FAIpQLSex6H7IrFV1OfAGRVnfflw9dv2Z0F2vCTQ2NcoWmL7Q4WPyOg/viewform?embedded=true');
            counter = 0;
            break;
    }
});
function changeThemeMode(){
    if($("body").css("background-color")=="rgb(255, 255, 255)"){
        $("body").css("background-color","rgb(0, 0, 0)");                  
        $(".sora-special-box").css('background', "rgb(0, 0, 0)");
        $(".sora-works-box").css('background', "rgb(0, 0, 0)");
        //$(".counter-box").css('background', "rgb(128, 128, 128)");
        $(".sora-about-box").css('background', "rgb(0, 0, 0)");
        //$(".Portfolio-title").css('background', "rgb(0, 0, 0)");
        $("#outer-wrapper").css('background', "rgb(0, 0, 0)");
        $(".wrap-me").css('border', "1px solid #ffffff");                    
        $(".insta-wrap").css('background', "rgb(0, 0, 0)");
        document.documentElement.style.setProperty('--bccol', 'black', 'important');
        document.documentElement.style.setProperty('--scol', 'white', 'important');        
        document.documentElement.style.setProperty('--bckimg', 'url(../images/header-mask-black-after.png) no-repeat center', 'important');                    
    }
    else{
        $("body").css("background-color","rgb(255, 255, 255)");
        $(".sora-special-box").css('background', "rgb(255, 255, 255)");
        $(".sora-works-box").css('background', "rgb(255, 255, 255)");
        //$(".counter-box").css('background', "rgb(255, 255, 255)");
        $(".sora-about-box").css('background', "rgb(255, 255, 255)");
        //$(".Portfolio-title").css('background', "rgb(255, 255, 255)");
        $("#outer-wrapper").css('background', "rgb(255, 255, 255)");
        $(".wrap-me").css('border', "1px solid #000000");                    
        $(".insta-wrap").css('background', "rgb(255, 255, 255)");
        document.documentElement.style.setProperty('--bccol', 'white', 'important');
        document.documentElement.style.setProperty('--scol', 'black', 'important'); 
        document.documentElement.style.setProperty('--bckimg', 'url(../images/header-mask-white-after.webp) no-repeat center', 'important');
    }
}
function changeColor(col, rgba, src, formsrc) {
    document.documentElement.style.setProperty('--mycol', col, 'important');
    $('.popup_menu .btn1').css('background', rgba);
    document.documentElement.style.setProperty('--background', col, 'important');
    $('#androidapk').attr("src", src)
    $('#googleForm').attr("src", formsrc)
}
$(".trigger").click(function () {
    $(".popup_menu").toggleClass("active");
});
if ($(window).width() <= 1100) {
    $(".fancyBtn").removeClass("fancyBtn");
}
$(function () {
    $("#androidapk").hover(function () {
        $("#androidapk").animate({ left: '-12px' });
        $(this).stop(true).fadeTo(200, 1);
    }, function () {
        $("#androidapk").animate({ left: '-12px' });
        $(this).stop(true).fadeTo(200, 1);
    });
});

$(function () {
    $("#androidapk").mouseleave(function () {
        $("#androidapk").animate({ left: '-65px' });
        resetAnim()
    }, function () {
        $("#androidapk").animate({ left: '-65px' });
        resetAnim()
    });
    var startAnim = function () {
        $("#androidapk").delay(7000).animate({ left: '-12px' }, resetAnim);
    }
    var resetAnim = function () {
        $("#androidapk").delay(7000).animate({ left: '-65px' });
        startAnim();
    }
    startAnim()
});   

//Make sure the user has scrolled at least double the height of the browser
//var toggleHeight = $(window).outerHeight() * 2;

//Scrolls the user to the top of the page again
$(".m-backtotop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});
                
$("#loadmore").click(function () {
    if (!$("#gal2").is(":visible")) {
        $("#gal2").show();
    }
    else if (!$("#gal3").is(":visible")) {
        $("#gal3").show();
    }
    else if (!$("#gal4").is(":visible")) {
        $("#gal4").show();
        $(this).hide();
        $("#btntitle").hide();
    }
    else {
        $(this).hide();
        $("#btntitle").hide();
    }
    var y = $(window).scrollTop();  //your current y position on the page
    $(window).scrollTop(y + 1);
});
    

var flkty = new Flickity('.main-gallery', {
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: true,
    autoPlay: 5000
});

//<![CDATA[
$(function () {
    "use strict";
    $(".header-logo-desc p").typed({
        strings: ["Asjed Ansari", "a Developer", "a Designer"], //Headlines(Change It)
        loop: true,
        startDelay: 1e3,
        backDelay: 2e3
    });
});
//]]>

$("div#LinkList230 > div.widget-content > ul#social > li >a[title='email']").css('background','#ad0000');
$("div#LinkList230 > div.widget-content > ul#social > li >a[title='whatsapp']").css('background','#1C8B82');
$("div#LinkList230 > div.widget-content > ul#social > li >a[title='SMS']").css('background','#CEB00A');
$("div#LinkList230 > div.widget-content > ul#social > li >a[title='call']").css('background','#9CB381');
setInterval(function () {
    if (!$('#asj:visible')['length']) {
        window['location']['href'] = 'https://asjadansari07.github.io'
    }
},
        3000)
});
// disable right click
//var intervalId = window.setInterval(function(){
//    console.log("%cWARNING-DON\'T STEAL!", "font: 2em monospace; color: ffffff; background-color: red;");
//}, 1000);        
var disableoptions = function () {            
    document.addEventListener('contextmenu', event => event.preventDefault());
 
    document.onkeydown = function (e) {
 
        // disable F12 key
        if(e.keyCode == 123) {
            return false;
        }
 
        // disable I key
        if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
            return false;
        }
 
        // disable J key
        if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            return false;
        }
 
        // disable U key
        if(e.ctrlKey && e.keyCode == 85) {
            return false;
        }
    }
}

//window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
//    if (e.matches) {
//			if(!$("body").css("background-color")=="rgb(255, 255, 255)"){
//    document.documentElement.style.setProperty('--bckimg', 'url(../images/header-mask-black-after.png) no-repeat center', 'important');            
//    document.getElementById('imgSkills').setAttribute('src','Public/images/skills-B-L.gif');
//    document.getElementById('vidSkillsmp4').setAttribute('src','Public/images/skillsVid-B-S.mp4');
//    document.getElementById('vidSkillswebm').setAttribute('src','Public/images/skillsVid-B-S.webm');
//    document.getElementById('vidSkillsogg').setAttribute('src','Public/images/skillsVid-B-S.ogg');
//}else{
//                document.documentElement.style.setProperty('--bckimg', 'url(../images/header-mask-white-after.webp) no-repeat center', 'important');
//document.getElementById('imgSkills').setAttribute('src','Public/images/skills-W-L.gif');
//document.getElementById('vidSkillsmp4').setAttribute('src','Public/images/skillsVid-W-S.mp4');        
//document.getElementById('vidSkillswebm').setAttribute('src','Public/images/skillsVid-B-S.webm');
//document.getElementById('vidSkillsogg').setAttribute('src','Public/images/skillsVid-B-S.ogg');
//}
////alert('Dark');        
//} else {
//    //alert('Light');
//    document.documentElement.style.setProperty('--bckimg', 'url(../images/header-mask-white-after.webp) no-repeat center', 'important');            
//    document.getElementById('imgSkills').setAttribute('src','Public/images/skills-W-L.gif');
//    document.getElementById('vidSkillsmp4').setAttribute('src','Public/images/skillsVid-W-S.mp4'); 
//    document.getElementById('vidSkillswebm').setAttribute('src','Public/images/skillsVid-B-S.webm');
//    document.getElementById('vidSkillsogg').setAttribute('src','Public/images/skillsVid-B-S.ogg');
//}
//});
//window.onload = function () {
//    var el = document.querySelector(".slicknav_btn");
//    if (el) {
//        el.addEventListener("click", function () {
//            this.classList.toggle("active");
//        });
//    }
//}


///*<![CDATA[*/
//$(window).bind("load", function () {
//    jQuery("#loader").fadeOut("slow");
//    jQuery("#preloader").delay(0).fadeOut();
//});
///*]]>*/

$(function () {
    var moveLeft = 20;
    var moveDown = 10;

    $('#zoom').hover(function (e) {
        $('#pop-up').show();
        //.css('top', e.pageY + moveDown)
        //.css('left', e.pageX + moveLeft)
        //.appendTo('body');
    }, function () {
        $('#pop-up').hide();
    });

    $('#zoom').mousemove(function (e) {
        $("#pop-up").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
    });

});


