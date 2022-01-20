jQuery(document)['ready'](function (_0x24d5x2) {
    _0x24d5x2('.counter-sora')['counterUp']({
        delay: 10,
        time: 1000
    })
});

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
    //check browser in mobile-start
    var iframe=$('#googleForm');
    var gtranslate=$('#google_translate_element');    
    let details = navigator.userAgent; 
    //let regexp = /android|iphone|kindle|ipad/i; 
    let regexp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|kindle|Opera Mini/i;
    let isMobileDevice = regexp.test(details); 
    //let isWebview=details.toString().includes('wv');
    let isWebview=function(){if((details.toString().indexOf('wv'))!==-1){return true}else{return false}};
    //check browser in mobile-end


    var h=$(window).height(); // New height
    var w=$(window).width(); // New width
    var matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(window.matchMedia && matched){        
        darkMode();  
        setDefaultColor();
    }
    else{
        lightMode();
        setDefaultColor();
    }
    var theme=window.matchMedia('(prefers-color-scheme: dark)');
    bindEvent(theme,'change',function(){changeThemeMode();});

    function bindEvent(el, eventName, eventHandler) {
        if (el.addEventListener){
            el.addEventListener(eventName, eventHandler, false); 
        } else if (el.attachEvent){
            el.attachEvent('on'+eventName, eventHandler);
        }
    }   
    disableoptions();
    //if website steal-start
    (function () { 
        //const rgx = new RegExp(/(domainName)|(:portNumUsedInLocalDev)|/g); 
        //const rgx = new RegExp('localhost:2435');
        const rgx = new RegExp('localhost:8426');
        //const rgx = new RegExp('asjadansari07.github.io');
    const host = window.location.host; 
    const isMatch = !host.match(rgx); 
 
        function showWarning() { 
            let warning = document.createElement('h1');
            warning.id='_asj_warning';
            warning.innerText = 'DON\'T STEAL';
            warning.style.fontWeight = 700; 
            warning.style.position = 'fixed';
            warning.style.backgroundColor='#ff0000';
            warning.style.color='#ffffff';
            warning.style.padding='12px';
            var a=$(window.innerWidth/2.5);
            var b=$(window.innerHeight/2.5);
            warning.style.left = a[0]+'px'; 
            warning.style.top =b[0]+'px';  
            warning.style.zIndex = 9999999999999999999; 
            document.body.appendChild(warning); 
        } 
 
        function exactRvg () { 
            cornify_add(); 
             
            window.setTimeout(function() { 
                exactRvg(); 
                console.log("%cWARNING-DON\'T STEAL!", "font: 2em monospace; color: ffffff; background-color: red;");
            }, 1000); 
 
        } 
        if (isMatch ) { 
            showWarning(); 
            exactRvg();
        } 
 
    })(); 
    //if website steal-end

    var ele=$('.m-backtotop>div.text')
    var skillimg=$('#imgSkills')
    var skillvid=$('#vidPlayer')
    var formdiv=$('#formdiv')
    var hlogo=$('#Header1_headerimg')
    var hinner=$('#header-inner')
    var asj_warning=$('#_asj_warning')
    var popupqr=$('#pop-up')
    var mainvid=$('video')
    switch (true) {                
        case (w>1200):
            ele.css("font-size","7px").css("font-weight","600");
            skillimg.css("display","none")
            skillvid.css("display","block")
            formdiv.css("padding","40px 40px 5px")
            hlogo.css("height","56px").css("width","56px")   
            asj_warning.css("font-size","5em");
            popupqr.css("width","193").css("height","193");             
            break;
        case (w<=1200 && w>1100):
            ele.css("font-size","7px").css("font-weight","600");
            skillimg.css("display","none")
            skillvid.css("display","block")
            formdiv.css("padding","40px 40px 5px")
            hlogo.css("height","56px").css("width","56px")
            asj_warning.css("font-size","5em");
            popupqr.css("width","193").css("height","193");
            break;
        case (w<=1100 && w>980):
            ele.css("font-size","7px").css("font-weight","600");
            skillimg.css("display","none")
            skillvid.css("display","block")
            formdiv.css("padding","40px 40px 5px")
            hlogo.css("height","56px").css("width","56px")
            asj_warning.css("font-size","4em");
            popupqr.css("width","193").css("height","193");
            break;
        case (w<=980 && w>880):
            ele.css("font-size","7px").css("font-weight","600");
            skillimg.css("display","none")
            skillvid.css("display","block")
            formdiv.css("padding","40px 40px 5px")
            hlogo.css("height","56px").css("width","56px")
            asj_warning.css("font-size","4em");
            popupqr.css("width","193").css("height","193");
            break;
        case (w<=880 && w>768):
            ele.css("font-size","7px").css("font-weight","600");
            skillimg.css("display","none")
            skillvid.css("display","block")
            formdiv.css("padding","40px 40px 5px")
            hlogo.css("height","56px").css("width","56px")
            asj_warning.css("font-size","3em");
            popupqr.css("width","193").css("height","193");
            break;
        case (w<=768 && w>767):
            ele.css("font-size","7px").css("font-weight","600");
            skillimg.css("display","none")
            skillvid.css("display","block")
            formdiv.css("padding","40px 40px 5px")
            hlogo.css("height","56px").css("width","56px")
            asj_warning.css("font-size","3em");
            popupqr.css("width","193").css("height","193");
            break;
        case (w<=767 && w>480):
            if (!isMobileDevice) { 
                ele.css("font-size","4px").css("line-height","8px").css("width","58%");
            } else { 
                ele.css("font-size","7px").css("line-height","10px").css("width","58%");            
            }             
            skillimg.css("display","block")
            skillvid.css("display","none")
            formdiv.css("padding","40px 40px 5px")
            hlogo.css("height","45px").css("width","45px")
            hinner.css("padding-top","7px")
            asj_warning.css("font-size","2em");
            $('head').append('<meta name="color-scheme" content="dark light" />');
            popupqr.css("width","157").css("height","157");
            mainvid.css("width","inherit").css("object-fit","cover");
            break;
        case (w<=480 && w>360):
            if (!isMobileDevice) { 
                ele.css("font-size","4px").css("line-height","8px").css("width","58%");
            } else { 
                ele.css("font-size","7px").css("line-height","10px").css("width","58%");            
            }            
            skillimg.css("display","block")
            skillvid.css("display","none")
            formdiv.css("padding","20px 20px 5px")
            hlogo.css("height","45px").css("width","45px")
            hinner.css("padding-top","7px")
            asj_warning.css("font-size","1.5em");
            $('head').append('<meta name="color-scheme" content="dark light" />');
            popupqr.css("width","157").css("height","157");
            mainvid.css("width","inherit").css("object-fit","cover");
            break;
        case (w<=360 && w>300):
            if (!isMobileDevice) { 
                ele.css("font-size","4px").css("line-height","8px").css("width","58%");
            } else { 
                ele.css("font-size","7px").css("line-height","10px").css("width","58%");
            }
            skillimg.css("display","block")
            skillvid.css("display","none")
            formdiv.css("padding","20px 20px 5px")
            hlogo.css("height","45px").css("width","45px")
            hinner.css("padding-top","7px")
            asj_warning.css("font-size","1.5em");
            $('head').append('<meta name="color-scheme" content="dark light" />');
            popupqr.css("width","157").css("height","157");
            mainvid.css("width","inherit").css("object-fit","cover");
            break;
        case (w<=300):
            if (!isMobileDevice) { 
                ele.css("font-size","4px").css("line-height","8px").css("width","58%");
            } else { 
                ele.css("font-size","7px").css("line-height","10px").css("width","58%");
            }
            skillimg.css("display","block")
            skillvid.css("display","none")
            formdiv.css("padding","20px 20px 5px")
            hlogo.css("height","45px").css("width","45px")
            hinner.css("padding-top","7px")
            asj_warning.css("font-size","1em");
            $('head').append('<meta name="color-scheme" content="dark light" />');
            popupqr.css("width","157").css("height","157");
            mainvid.css("width","inherit").css("object-fit","cover");
            break;
        default:
            ele.css("font-size","4px");   
            skillimg.css("display","block")
            skillvid.css("display","none")
            formdiv.css("padding","20px 20px 5px")
            hlogo.css("height","56px").css("width","56px")
            popupqr.css("width","193").css("height","193");
            break;
    }    
    $('#nav').onePageNav();
    $('.slide-in').onePageNav();
    function setDefaultColor(){
        if(details.toString().toLowerCase().includes('edge') || details.toString().toLowerCase().includes('trident'))
        {       
            var myvid=$('#myvideo')
            myvid.css('position','absolute').css('max-height','none').css('width','auto').css('height','auto');
        }
        if(details.toString().toLowerCase().includes('trident'))
        {  
            
            $("<style type='text/css'>.mycoll:after{background:red;"+"} </style>").appendTo("head");                        
            $("<style type='text/css'>.mycoll3:before{background:red;"+"} </style>").appendTo("head"); 
            $("<style type='text/css'>.mycoll4{background:red;"+"} </style>").appendTo("head"); 
            $(".slicknav_nav").addClass("mycoll4");
            $(".slicknav_menu .slicknav_icon-bar").css("background","none");
            $(".flickity-page-dots").css("display","none");
            
            $(".slicknav_menu .slicknav_icon-bar").addClass("mycoll4");
            $(".slicknav_menu .slicknav_icon-bar,.slicknav_menu .slicknav_icon-bar").addClass("mycoll3 mycoll");
            setTimeout(function() {$("ol.flickity-page-dots").css("display","none");},7000);
            
            $("#header-wrapper").css("background", "url(/Public/images/head-back.jpg) no-repeat center bottom").css('background-size','cover');
            $(".counter-box").css("background", "url(/Public/images/sg-back.jpg) no-repeat");
            $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css" />');
            $('img[alt="Loading..."]').attr('src','Public/images/asj_circle1.png');
            $('#Header1_headerimg').attr('src','Public/images/asj_2.png');
            $('image[width="104"]').attr('xlink:href','/Public/images/asj_2.png');
            $('img[title="Click to Connect"]').attr('src','Public/images/asj_circle1.png');
            $('img[data-src="Public/images/fl.webp"]').attr('class','').attr('src','Public/images/fl.jpg').addClass('testimonial-avatar');
            $('img[alt="Asp.Net"]').attr('class','').attr('src','Public/images/aspnet.jpg');
            $('img[alt="SQL Server"]').attr('class','').attr('src','Public/images/sql.jpg');
            $('img[alt="MS CRM Dynamics"]').attr('class','').attr('src','Public/images/crm.jpg');
            $('img[alt="HTML"]').attr('class','').attr('src','Public/images/html.jpg');
            $('img[alt="CSS"]').attr('class','').attr('src','Public/images/css.jpg');
            $('img[alt="Bootstrap"]').attr('class','').attr('src','Public/images/bootstrap.jpg');
            $('img[alt="JavaScript"]').attr('class','').attr('src','Public/images/javascript.jpg');
            $('img[alt="JQuery"]').attr('class','').attr('src','Public/images/jquery.jpg');
            $('img[alt="Ado.Net"]').attr('class','').attr('src','Public/images/adonet.jpg');
            $('img[alt="LINQ"]').attr('class','').attr('src','Public/images/linq.jpg');
            $('img[alt="XML"]').attr('class','').attr('src','Public/images/xml.jpg');
            $('img[alt="Google Forms"]').attr('class','').attr('src','Public/images/googleform.jpg');
            $('img[alt="C#"]').attr('class','').attr('src','Public/images/csharp.jpg');
            $('img[alt="JSON"]').attr('class','').attr('src','Public/images/json.jpg');
            $('img[alt="AJAX"]').attr('class','').attr('src','Public/images/ajax.jpg');
            $('img[alt="Web Service"]').attr('class','').attr('src','Public/images/ws.jpg');
            $('img[alt="Web Form"]').attr('class','').attr('src','Public/images/form.jpg');
            $('img[alt="MS Office"]').attr('class','').attr('src','Public/images/office.jpg');
            $('img[alt="SSRS"]').attr('class','').attr('src','Public/images/ssrs.jpg');
            $('img[alt="MVC"]').attr('class','').attr('src','Public/images/mvc.jpg');
            $(".counter-sora").css("font-size","60px");
                        
            $('#google_translate_element').css('display','none');
            $('#iegtranslate').css('display','inline-block').css('color','#ff0000');
            $('#iegform').css('display','inline-block').css('color','#ff0000');
            $('#resume a').hover(function(){$(this).css('color','red');},function(){$(this).css('color','white');});            
            
        }
        
        document.documentElement.style.setProperty('--mycol', '#FF0000', 'important');
        document.documentElement.style.setProperty('--background', '#FF0000', 'important');
        if(w>1200 || (w<=1200 && w>1100) || (w<=1100 && w>980) || (w<=980 && w>880) || (w<=880 && w>768) || (w<=768 && w>767)){  
            if(window.matchMedia && matched){      
                iframe.css("filter","invert(0.9)");
                gtranslate.css("filter","invert(1)");
            
            }else{
                iframe.css("filter","none");
                gtranslate.css("filter","none");
            }
            
        }else{  
            if(!isWebview){
                if(window.matchMedia && matched){      
                    iframe.css("filter","invert(0.9)");
                    gtranslate.css("filter","none");                
                }else{
                    iframe.css("filter","none");
                }
            }
        
        }
    }    
                
    var counter = 0;
    $("#Header1_headerimg").click(function () {
        changeThemeMode();
    });
    $(".m-theme").click(function () {
        switch (counter) {
            case 0:            
                changeColor('#ffbd2f', 'rgba(255,189,47,0.5)', 'Public/images/apk_yellow.gif', 'https://docs.google.com/forms/d/e/1FAIpQLSelvtCeFbRzhve1QF3h5nODdntJvFePBabgZiLuDxsuLGZjQA/viewform?embedded=true');
                counter += 1;
                break;
            case 1:
                changeColor('#00BC22', 'rgba(0,255,0,0.5)', 'Public/images/apk_green.gif', 'https://docs.google.com/forms/d/e/1FAIpQLSeXyW2PDxsG5Y_R5eTmWrtWjG-vMJQvYXWksHXFC3TbEO7QxQ/viewform?embedded=true');
                counter += 1;
                break;
            case 2:
                changeColor('#0030EF', 'rgba(0,0,255,0.5)', 'Public/images/apk_blue.gif', 'https://docs.google.com/forms/d/e/1FAIpQLSfNb2Kzqwg1ABhvCjaUbFcUw_zRzrF18AK5aaOF1SnWkdpMZA/viewform?embedded=true');
                counter += 1;
                break;
            case 3:
                changeColor('#008080', 'rgba(0,128,128,0.5)', 'Public/images/apk_teal.gif', 'https://docs.google.com/forms/d/e/1FAIpQLSex6H7IrFV1OfAGRVnfflw9dv2Z0F2vCTQ2NcoWmL7Q4WPyOg/viewform?embedded=true');
                counter += 1;
                break;
            case 4:
                changeColor('#FF00FF', 'rgba(255,0,255,0.5)', 'Public/images/apk_magenta.gif', 'https://docs.google.com/forms/d/e/1FAIpQLSejjLWlzY8VK2eO-bhy5JzNHhumu7VXdTEGG8tpPn4EDC5jyQ/viewform?embedded=true');
                counter += 1;
                break;
            case 5:
                changeColor('#FF8000', 'rgba(255,128,0,0.5)', 'Public/images/apk_orange.gif', 'https://docs.google.com/forms/d/e/1FAIpQLSelvtCeFbRzhve1QF3h5nODdntJvFePBabgZiLuDxsuLGZjQA/viewform?embedded=true');                
                counter += 1;
                break;
            case 6:
                changeColor('#808080', 'rgba(192,192,192,0.5)', 'Public/images/apk_grey.gif', 'https://docs.google.com/forms/d/e/1FAIpQLScMJ6lFRbePTtDsSnTRCXPQEOhP8K8nVK5Xb8p-qT69QssbpQ/viewform?embedded=true');
                counter += 1;
                break;
            case 7:
                changeColor('#FF0000', 'rgba(255,0,0,0.5)', 'Public/images/apk_red.gif', 'https://docs.google.com/forms/d/e/1FAIpQLScS8s6OrBD3UmDvtTZqPg3j1WcmWptpsubVhLoSqgyY51fnng/viewform?embedded=true');
                counter = 0;
                break;
            default:
                changeColor('#FF0000', 'rgba(255,0,0,0.5)', 'Public/images/apk_red.gif', 'https://docs.google.com/forms/d/e/1FAIpQLScS8s6OrBD3UmDvtTZqPg3j1WcmWptpsubVhLoSqgyY51fnng/viewform?embedded=true');
                counter = 0;
                break;
        }
    });
    function darkMode(){
        $(".preloader1").css("background", "rgb(0, 0, 0)");
        $(".preloader1-circle").css("background", "rgb(0, 0, 0)");
        $("body").css("background-color","rgb(0, 0, 0)");                  
        $(".sora-special-box").css('background', "rgb(0, 0, 0)");
        $(".sora-works-box").css('background', "rgb(0, 0, 0)");
        $(".sora-about-box").css('background', "rgb(0, 0, 0)");
        $("#outer-wrapper").css('background', "rgb(0, 0, 0)");
        $(".wrap-me").css('border', "1px solid #ffffff");                    
        $(".insta-wrap").css('background', "rgb(0, 0, 0)");
        document.documentElement.style.setProperty('--bccol', 'black', 'important');
        document.documentElement.style.setProperty('--scol', 'white', 'important');  
    
        if(details.toString().toLowerCase().includes('edge'))
        {        
            document.documentElement.style.setProperty('--bckimg', 'url(../Public/images/header-mask-black-after.webp) no-repeat center', 'important');
        }
        else if(details.toString().toLowerCase().includes('trident'))
        {  
            $("<style type='text/css'>.black:before{color:black;} </style>").appendTo("head");
            $('.sora-author-box-text .hello-txt').addClass('black'); 
            $("<style type='text/css'>::selection{text-shadow: white 0 0 2px;} </style>").appendTo("head");
            $('.popup_menu .btn1 .fa').css('color','white');

            $("<style type='text/css'>.black:after{background:url(../Public/images/header-mask-black-after.png) no-repeat center !important;} </style>").appendTo("head");
            $("#header-wrapper").addClass('black');
            $("#section-6").addClass('black');
            $(".counter-box.wow.slideInUp").addClass('black');
        }
        else{
            document.documentElement.style.setProperty('--bckimg', 'url(../images/header-mask-black-after.webp) no-repeat center', 'important');
        }
        
    
    }
    function lightMode(){
        $(".preloader1").css("background", "rgb(255, 255, 255)");
        $(".preloader1-circle").css("background", "rgb(255, 255, 255)");
        $("body").css("background-color","rgb(255, 255, 255)");
        $(".sora-special-box").css('background', "rgb(255, 255, 255)");
        $(".sora-works-box").css('background', "rgb(255, 255, 255)");
        $(".sora-about-box").css('background', "rgb(255, 255, 255)");
        $("#outer-wrapper").css('background', "rgb(255, 255, 255)");
        $(".wrap-me").css('border', "1px solid #000000");                    
        $(".insta-wrap").css('background', "rgb(255, 255, 255)");
        document.documentElement.style.setProperty('--bccol', 'white', 'important');
        document.documentElement.style.setProperty('--scol', 'black', 'important'); 
        if(details.toString().toLowerCase().includes('edge'))
        {
            document.documentElement.style.setProperty('--bckimg', 'url(../Public/images/header-mask-white-after.webp) no-repeat center', 'important');
        }
        else if(details.toString().toLowerCase().includes('trident'))
        {  
            $("<style type='text/css'>.white:before{color:white;} </style>").appendTo("head");
            $('.sora-author-box-text .hello-txt').addClass('white');
            $("<style type='text/css'>::selection{text-shadow: black 0 0 2px;} </style>").appendTo("head");
            $('.popup_menu .btn1 .fa').css('color','black');
                        
            $("<style type='text/css'>.white:after{background:url(../Public/images/header-mask-white-after.png) no-repeat center !important;} </style>").appendTo("head");            
            $("#header-wrapper").addClass('white');
            $("#section-6").addClass('white');
            $(".counter-box.wow.slideInUp").addClass('white');
        }
        else{
            document.documentElement.style.setProperty('--bckimg', 'url(../images/header-mask-white-after.webp) no-repeat center', 'important');
        }
        
    }
    function changeForm(w,col){ 
        var gform='https://docs.google.com/forms/d/e/1FAIpQLScMJ6lFRbePTtDsSnTRCXPQEOhP8K8nVK5Xb8p-qT69QssbpQ/viewform?embedded=true';
        col=col.replace(/\s/g,'');
        if(w>1200 || (w<=1200 && w>1100) || (w<=1100 && w>980) || (w<=980 && w>880) || (w<=880 && w>768) || (w<=768 && w>767)){

            if($("body").css("background-color").replace(/\s/g,'')=="rgb(0,0,0)"){  
                iframe.css("filter","none"); 
                gtranslate.css("filter","none");
            }else{
                iframe.css("filter","invert(0.9)");
                gtranslate.css("filter","invert(1)");
            }            
        }
        else{   
            if(isWebview){
                if(matchMedia && matched)
                {
                    if($("body").css("background-color").replace(/\s/g,'')=="rgb(0,0,0)"){  
                        iframe.css("filter","invert(1)");
                        gtranslate.css("filter","invert(1)");
                    }else{
                        iframe.css("filter","none");
                        gtranslate.css("filter","none");
                    }
                }
                else
                {
                    if($("body").css("background-color").replace(/\s/g,'')=="rgb(255,255,255)"){  
                        iframe.css("filter","invert(0.9)");
                        gtranslate.css("filter","invert(1)");
                    }else{                    
                        iframe.css("filter","none");
                        gtranslate.css("filter","none");
                    }
                }            
            }
            else{
                if(matchMedia && matched)
                {
                    if($("body").css("background-color").replace(/\s/g,'')=="rgb(0,0,0)"){  
                        iframe.attr("data-src","");     
                        iframe.attr("data-src",gform);
                        iframe.css("filter","none");
                        gtranslate.css("filter","invert(1)");
                        
                    }else{
                        iframe.attr("data-src","");
                        iframe.attr("data-src",gform);
                        iframe.css("filter","invert(0.9)"); 
                        gtranslate.css("filter","none");  
                    }
                }
                else
                {
                    if($("body").css("background-color").replace(/\s/g,'')=="rgb(255,255,255)"){
                        iframe.attr("data-src","");
                        iframe.attr("data-src",gform);
                        iframe.css("filter","invert(0.9)");
                        gtranslate.css("filter","invert(1)");
                    }else{   
                        iframe.attr("data-src","");     
                        iframe.attr("data-src",gform);
                        iframe.css("filter","none");
                        gtranslate.css("filter","none"); 
                    }
                }       
            }
        }
    }

    function changeThemeMode(){
        var col=$(".hello-txt").css("background-color");
        if($("body").css("background-color").replace(/\s/g,'')=="rgb(255,255,255)"){                   
            changeForm(w,col)
            darkMode();
        }
        else{        
            changeForm(w,col);
            lightMode();
        }
    }
    function changeColor(col, rgba, src, formsrc) {
        if(details.toString().toLowerCase().includes('trident'))
        {             
            $(".perctext").css("color",col);
            $(".testimonial-avatar").hover(function(){ $(this).css("border","2px solid "+col);},function(){ $(this).css("border","none");});
            $("<style type='text/css'>.mycol:after{background:"+col+" !important;"+"} </style>").appendTo("head");            
            $("<style type='text/css'>.mycol1{color:"+col+" !important;"+"} </style>").appendTo("head");          
            $("<style type='text/css'>.mycol3:before{background:"+col+" !important;"+"} </style>").appendTo("head"); 
            $("<style type='text/css'>.mycol4{background:"+col+" !important;"+"} </style>").appendTo("head"); 
            $("#resume a").hover(function(){$(this).addClass("mycol mycol1");},function(){$(this).removeClass("mycol1");});
            $("#asj").css("color",col).hover(function(){ $(this).addClass("mycol");});
            $("a.btn-2 span").css("color",col).css("border","1px solid "+col);
            $("a.btn-2").hover(function(){$(this).addClass("mycol3");$("a.btn-2 span").css("color","white");},function(){$("a.btn-2 span").css("color",col);});            
                        
            $(".fancyBtn").addClass("mycol1");
            $(".m-theme.active").css("background",col);
            $(".m-backtotop.active").css("background",col);
            
            $(".slicknav_nav").addClass("mycol4");
            
            $(".slicknav_menu .slicknav_icon-bar").css("background","none");
            $(".slicknav_menu .slicknav_icon-bar,.slicknav_menu .slicknav_icon-bar").addClass("mycol3 mycol");
            $("ol.flickity-page-dots").css("display","none");
            
            $(".block-image .thumb").addClass("mycol3");            
            $("<style type='text/css'>.hellotext:before{border-left-color:"+col+" !important;"+"} </style>").appendTo("head");   
            $(".sora-author-box-text .hello-txt").css("background",col).addClass("hellotext");                        
            $(".sora-author-box-text-details .profile-list li .list-button,.works-icons li,.flickity-prev-next-button").css("background",col);            
            $(".header-logo-desc span,.sora-author-box-text .profile-title,.sora-author-box-text .profile-title span,.counter-box-item,.counter-sora,.testimonial-author,.map-me .con-list li i,#iegtranslate,#iegform").css("color",col);
            $(".flickity-prev-next-button").hover(function(){ $(this).css("background","#fff");},function(){ $(this).css("background",col);});
                        
            $(".top-bar-social ul#social a,.bottom-bar-social ul#social a").hover(function(){$(this).addClass("mycol1");},function(){$(this).removeClass("mycol1");});
            $(".socials a i").hover(function(){$(this).css("background",col);},function(){$(this).css("background","none");});
        }
        else
        {
            document.documentElement.style.setProperty('--mycol', col, 'important');            
            document.documentElement.style.setProperty('--background', col, 'important');
            
        }
        $('.popup_menu .btn1').css('background', rgba);           
        $('#androidapk').attr("src", src)
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

    setInterval(function () {
        if (!$('#asj:visible')['length']) {
            window['location']['href'] = 'https://asjadansari07.github.io'
        }
    },
            3000)

    $(function () {
        var moveLeft = 20;
        var moveDown = 10;

        $('#zoom').hover(function (e) {
            $('#pop-up').show();
        }, function () {
            $('#pop-up').hide();
        });

        $('#zoom').mousemove(function (e) {
            $("#pop-up").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
        });

    });
    // disable right click    
    function disableoptions() {                    
        document.addEventListener('contextmenu', function(){ event.preventDefault()});
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

    setTimeout(function() {
        var webmsrcvid=$('#webmsrcvid');
        var mp4srcvid=$('#mp4srcvid');
        webmsrcvid.attr('data-src','Public/images/beach.webm');
        mp4srcvid.attr('data-src','Public/images/beach.mp4');
        $("video#myvideo source").each(function() {
            var sourceFile = $(this).attr("data-src");
            $(this).attr("src", sourceFile);
            var video = this.parentElement;
            if(details.toString().toLowerCase().includes('trident'))
            {
                try{
                    video.load();
                    video.play()
                }
                catch(ex){
                    //function(ex) {}
                }
            }
            else{
                video.load();
                video.play().catch(function(e) {});
            }
        
        
        });         
    }, 5000);
});