﻿var cornify_count = 0,
    cornify_add = function (e) {
        cornify_count += 1;
        var t = "https://asjadansari07.github.io",
            n = (Math.random(), 0),
            i = document.documentElement,
            a = "translate(-50%, -50%)",
            o = 15 == cornify_count,
            r = document.createElement("div");
        r.style.position = "fixed", r.className = "_asjedansari", r.style.zIndex = 143143, r.style.outline = 0, r.onclick = cornify_add, "number" == typeof window.innerHeight ? (window.innerHeight, window.innerWidth) : i && i.clientHeight ? (i.clientHeight, i.clientWidth) : n = Math.round(100 * n) + "%", o ? (r.style.top = "50%", r.style.left = "50%", r.style.zIndex = 143143143) : (r.style.top = Math.round(100 * Math.random()) + "%", r.style.left = Math.round(100 * Math.random()) + "%", a += " rotate(" + Math.round(10 * Math.random() - 5) + "deg)");
        var c = document.createElement("img");
        c.style.opacity = 0, c.style.transition = "all .1s linear", c.alt = "Don't steal", c.onload = function () {
            c.style.opacity = 1
        }, (new Date).getTime();
        var s, l = [];
        if (l[0] = t + "/Public/images/adonet.webp", l[1] = t + "/Public/images/ajax.webp", l[2] = t + "/Public/images/asj_2.webp", l[3] = t + "/Public/images/aspnet.webp", l[4] = t + "/Public/images/bootstrap.webp", l[5] = t + "/Public/images/asj_2.webp", l[6] = t + "/Public/images/crm.webp", l[7] = t + "/Public/images/csharp.webp", l[8] = t + "/Public/images/asj_2.webp", l[9] = t + "/Public/images/css.webp", l[10] = t + "/Public/images/form.webp", l[11] = t + "/Public/images/asj_2.webp", l[12] = t + "/Public/images/googleform.webp", l[13] = t + "/Public/images/html.webp", l[14] = t + "/Public/images/asj_2.webp", l[15] = t + "/Public/images/javascript.webp", l[16] = t + "/Public/images/jquery.webp", l[17] = t + "/Public/images/asj_2.webp", l[18] = t + "/Public/images/json.webp", l[19] = t + "/Public/images/linq.webp", l[20] = t + "/Public/images/asj_2.webp", l[21] = t + "/Public/images/mvc.webp", l[22] = t + "/Public/images/office.webp", l[23] = t + "/Public/images/asj_2.webp", l[24] = t + "/Public/images/sql.webp", l[25] = t + "/Public/images/ssrs.webp", l[26] = t + "/Public/images/asj_2.webp", l[27] = t + "/Public/images/ws.webp", l[28] = t + "/Public/images/xml.webp", l[29] = t + "/Public/images/asj_2.webp", s = l[Math.floor(Math.random() * l.length)], url = s, e && (e.y || e.younicorns) && (url += "&y=" + (e.y ? e.y : e.younicorns), Math.random() > .5 && a.length > 0 && (a += " scaleX(-1)")), r.style.transform = a, r.style.MozTransform = a, r.style.webkitTransform = a, c.setAttribute("src", url), s == l[2] && s == l[5] && s == l[8] && s == l[11] && s == l[14] && s == l[17] && s == l[20] && s == l[23] && s == l[26] && s == l[29] || (c.style.width = "260px", c.style.height = "260px"), c.style.transition = "all .1s linear", r.onmouseover = function () {
                var e = 1 + Math.round(10 * Math.random()) / 100,
                    t = "rotate(" + Math.round(20 * Math.random() - 10) + "deg) scale(" + e + "," + e + ")";
                c.style.transform = t, c.style.MozTransform = t, c.style.webkitTransform = t
        }, r.onmouseout = function () {
                var e = .9 + Math.round(10 * Math.random()) / 100,
                    t = "rotate(" + Math.round(6 * Math.random() - 3) + "deg) scale(" + e + "," + e + ")";
                c.style.transform = t, c.style.MozTransform = t, c.style.webkitTransform = t
        }, document.getElementsByTagName("body")[0].appendChild(r), r.appendChild(c), cornify_count > 5) {
            if (!document.getElementById("_asjed_css")) {
                var m = document.getElementsByTagName("head")[0],
                    u = document.createElement("link");
                u.id = "_asjed_css", u.type = "text/css", u.rel = "stylesheet", u.href = "Public/css/cornify.css", u.media = "screen", m.appendChild(u)
            }
            cornify_replace()
        }
        var d = function (e) {
            var t;
            "function" == typeof Event ? t = new Event(e) : (t = document.createEvent("Event")).initEvent(e, !0, !0);
            return t
        }("cornify");
        document.dispatchEvent(d)
    },
    cornify_updatecount = function () {
        var e, t = "__cornify_count";
        null == (e = document.getElementById(t)) && ((e = document.createElement("p")).id = t, e.style.position = "fixed", e.style.bottom = "5px", e.style.left = "0px", e.style.right = "0px", e.style.zIndex = "1000000000", e.style.color = "#ff0000", e.style.textAlign = "center", e.style.fontSize = "24px", e.style.fontFamily = "'fantasy', 'Comic Sans', 'Marker Felt', sans-serif", e.style.textTransform = "uppercase", e.style.fontWeight = "bolder", e.style.backgroundColor = "#ffffff", document.getElementsByTagName("body")[0].appendChild(e)), e.innerHTML = 1 == cornify_count ? "You cornified!" : "You cornified " + cornify_count + " times!", cornify_setcookie("cornify", cornify_count + "", 1e3)
    },
    cornify_setcookie = function (e, t, n) {
        var i = new Date;
        i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
        var a = "expires=" + i.toGMTString();
        document.cookie = e + "=" + t + "; " + a
    },
    cornify_getcookie = function (e) {
        for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
            var a = n[i].trim();
            if (0 == a.indexOf(t)) return a.substring(t.length, a.length)
        }
        return ""
    };
cornify_count = parseInt(cornify_getcookie("cornify")), isNaN(cornify_count) && (cornify_count = 0);
var cornify_replace = function () {
    for (var e, t, n, i = 6, a = ["Don't", "Steal"]; i >= 1;) {
        for (e = document.getElementsByTagName("p"), n = 0; n < e.length; n++) (t = e[n]).innerHTML = a[Math.floor(Math.random() * a.length)] + " " + t.innerHTML;
        i -= 1
    }
},
    cornify_click_cupcake_button = function () {
        var e, t = document,
            n = t.getElementsByClassName("_asjedansari");
        if (n)
            for (var i = 0; i < n.length; i++) n[i].parentNode.removeChild(n[i]);
        (e = t.getElementById("__cornify_count")) && e.parentNode.removeChild(e), (e = t.getElementById("__cornify_cupcake_button")) && e.parentNode.removeChild(e);
        var a = new Event("cornify-clear");
        document.dispatchEvent(a)
    },
    cornify_add_cupcake_button = function () {
        var e = "__cornify_cupcake_button",
            t = document,
            n = t.getElementById(e);
        if (!n) {
            (n = t.createElement("div")).id = e, n.onclick = cornify_click_cupcake_button, n.style.position = "fixed", n.style.top = "10px", n.style.right = "10px", n.style.zIndex = 2147483640, n.setAttribute("aria-label", "Hide unicorns and rainbows");
            var i = document.createElement("img");
            i.src = "/Public/images/apk_red.gif", i.alt = "Cupcake button", i.width = 50, i.height = 50, i.style.width = "50px !important", i.style.height = "50px !important", i.style.display = "block !important", i.style.cursor = "pointer !important", i.style.margin = "0 !important", i.style.padding = "0 !important", n.appendChild(i), t.getElementsByTagName("body")[0].appendChild(n)
        }
    },
    cornami = {
        input: "",
        pattern: "38384040373937396665",
        clear: setTimeout("cornami.clear_input()", 5e3),
        load: function () {
            window.document.onkeydown = function (e) {
                if (cornami.input == cornami.pattern) return cornify_add(), void clearTimeout(cornami.clear);
                cornami.input += e.keyCode, cornami.input == cornami.pattern && cornify_add(), clearTimeout(cornami.clear), cornami.clear = setTimeout("cornami.clear_input()", 5e3)
            }
        },
        clear_input: function () {
            cornami.input = "", clearTimeout(cornami.clear)
        }
    };
cornami.load();