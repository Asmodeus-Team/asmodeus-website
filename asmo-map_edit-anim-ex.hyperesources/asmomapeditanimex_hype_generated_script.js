(function() {
    (function m() {
        function k(a, b, c, d) { var e = !1;
            null == window[a] && (null == window[b] ? (window[b] = [], window[b].push(m), a = document.getElementsByTagName("head")[0], b = document.createElement("script"), e = l, false == !0 && (e = ""), b.type = "text/javascript", "" != d && (b.integrity = d, b.setAttribute("crossorigin", "anonymous")), b.src = e + "/" + c, a.appendChild(b)) : window[b].push(m), e = !0); return e }
        var l = "asmo-map_edit-anim-ex.hyperesources",
            f = "asmo-map_edit-anim-ex",
            g = "asmomapeditanimex_hype_container";
        if (false ==
            !1) try { for (var c = document.getElementsByTagName("script"), a = 0; a < c.length; a++) { var d = c[a].src,
                    b = null != d ? d.indexOf("/asmomapeditanimex_hype_generated_script.js") : -1; if (-1 != b) { l = d.substr(0, b); break } } } catch (p) {}
        c = navigator.userAgent.match(/MSIE (\d+\.\d+)/);
        c = parseFloat(c && c[1]) || null;
        d = !0 == (null != window.HYPE_664F || null != window.HYPE_dtl_664F) || false == !0 || null != c && 10 > c;
        a = !0 == d ? "HYPE-664.full.min.js" : "HYPE-664.thin.min.js";
        c = !0 == d ? "F" : "T";
        d = d ? "" :
            "";
        if (false == !1 && (a = k("HYPE_664" + c, "HYPE_dtl_664" + c, a, d), true == !0 && (a = a || k("HYPE_w_664", "HYPE_wdtl_664", "HYPE-664.waypoints.min.js", "")), false == !0 && (a = a || k("Matter", "HYPE_pdtl_664", "HYPE-664.physics.min.js", "")), a)) return;
        d = window.HYPE.documents;
        if (null != d[f]) {
            b = 1;
            a = f;
            do f = "" + a + "-" + b++; while (null != d[f]);
            for (var e = document.getElementsByTagName("div"),
                    b = !1, a = 0; a < e.length; a++)
                if (e[a].id == g && null == e[a].getAttribute("HYP_dn")) { var b = 1,
                        h = g;
                    do g = "" + h + "-" + b++; while (null != document.getElementById(g));
                    e[a].id = g;
                    b = !0; break }
            if (!1 == b) return
        }
        b = [];
        b = [];
        e = {};
        h = {};
        for (a = 0; a < b.length; a++) try { h[b[a].identifier] = b[a].name, e[b[a].name] = eval("(function(){return " + b[a].source + "})();") } catch (n) { window.console && window.console.log(n), e[b[a].name] = function() {} }
        c = new window["HYPE_664" + c](f, g, { "7": { p: 1, n: "d8.png", g: "21", t: "@1x" }, "3": { p: 1, n: "d20.png", g: "13", t: "@1x" }, "-2": { n: "blank.gif" }, "4": { p: 1, n: "d6.png", g: "15", t: "@1x" }, "0": { p: 1, n: "map3.png", g: "7", t: "@1x" }, "5": { p: 1, n: "pencil.png", g: "17", t: "@1x" }, "1": { p: 1, n: "map1.jpg", g: "9", o: true, t: "@1x" }, "6": { p: 1, n: "map2.jpg", g: "19", o: true, t: "@1x" }, "2": { p: 1, n: "player_marker.png", g: "11", t: "@1x" }, "-1": { n: "PIE.htc" } }, l, [], e, [{ n: "Asmodeus Images for Maps (Landing)", o: "1", X: [0] }], [{ A: { a: [{ p: 7, b: "kTimelineDefaultIdentifier", symbolOid: "2" }] }, o: "3", dA: { a: [{ p: 0 }] }, p: "600px", cA: false, Y: 900, Z: 770, c: "#FFF", L: [], bY: 1, d: 900, U: {}, T: { kTimelineDefaultIdentifier: { q: false, z: 2.15, i: "kTimelineDefaultIdentifier", n: "Main Timeline", a: [{ f: "c", y: 0, z: 2.15, i: "a", e: 0, s: -23, o: "30" }, { f: "c", y: 0, z: 2.15, i: "b", e: 37, s: -21, o: "30" }, { f: "c", y: 0, z: 2.15, i: "e", e: 1, s: 0, o: "30" }, { f: "c", y: 0, z: 1.02, i: "f", e: -20, s: -7, o: "31" }, { f: "c", y: 0, z: 1.15, i: "c", e: 175, s: 140, o: "34" }, { f: "c", y: 0, z: 1.15, i: "d", e: 175, s: 140, o: "34" }, { f: "c", y: 0, z: 1.12, i: "a", e: 794, s: 728, o: "27" }, { f: "c", y: 0, z: 1.1, i: "b", e: 586, s: 607, o: "27" }, { f: "c", y: 0, z: 1, i: "e", e: 1, s: 0, o: "27" }, { y: 0, i: "f", s: -59, z: 0, o: "34", f: "c" }, { f: "c", y: 0, z: 1.22, i: "b", e: 194, s: 210, o: "29" }, { f: "c", y: 0, z: 1.22, i: "a", e: 705, s: 796, o: "29" }, { f: "c", y: 0, z: 1.08, i: "e", e: 1, s: 0, o: "29" }, { f: "c", y: 0, z: 0.28, i: "f", e: 348, s: 360, o: "28" }, { f: "c", y: 0, z: 1.02, i: "a", e: 188, s: 178, o: "31" }, { f: "c", y: 0, z: 1.02, i: "b", e: 515, s: 508, o: "31" }, { f: "c", y: 0, z: 1.02, i: "e", e: 1, s: 0, o: "31" }, { f: "c", y: 0, z: 1.15, i: "a", e: 22, s: 10, o: "34" }, { f: "c", y: 0, z: 1.15, i: "b", e: 378, s: 393, o: "34" }, { f: "c", y: 0, z: 1.15, i: "e", e: 1, s: 0, o: "34" }, { f: "c", y: 0, z: 1.22, i: "e", e: 1, s: 0, o: "28" }, { f: "c", y: 0.17, z: 1.02, i: "f", e: 363, s: 354, o: "33" }, { f: "c", y: 0.17, z: 1.02, i: "a", e: 323, s: 326, o: "33" }, { f: "c", y: 0.17, z: 1.02, i: "b", e: 137, s: 126, o: "33" }, { f: "c", y: 0.19, z: 1.02, i: "e", e: 1, s: 0, o: "33" }, { f: "c", y: 0.27, z: 0.22, i: "a", e: 68, s: 65, o: "32" }, { y: 0.28, i: "f", s: 348, z: 0, o: "28", f: "c" }, { y: 1, i: "e", s: 1, z: 0, o: "27", f: "c" }, { y: 1.02, i: "f", s: -20, z: 0, o: "31", f: "c" }, { f: "c", y: 1.02, z: 0.24, i: "b", e: 48, s: 61, o: "32" }, { y: 1.02, i: "b", s: 515, z: 0, o: "31", f: "c" }, { y: 1.02, i: "a", s: 188, z: 0, o: "31", f: "c" }, { f: "c", y: 1.02, z: 0.17, i: "e", e: 1, s: 0, o: "32" }, { y: 1.02, i: "e", s: 1, z: 0, o: "31", f: "c" }, { y: 1.08, i: "e", s: 1, z: 0, o: "29", f: "c" }, { y: 1.1, i: "b", s: 586, z: 0, o: "27", f: "c" }, { y: 1.12, i: "a", s: 794, z: 0, o: "27", f: "c" }, { y: 1.15, i: "d", s: 175, z: 0, o: "34", f: "c" }, { y: 1.15, i: "c", s: 175, z: 0, o: "34", f: "c" }, { y: 1.15, i: "b", s: 378, z: 0, o: "34", f: "c" }, { y: 1.15, i: "a", s: 22, z: 0, o: "34", f: "c" }, { y: 1.15, i: "e", s: 1, z: 0, o: "34", f: "c" }, { y: 1.19, i: "f", s: 363, z: 0, o: "33", f: "c" }, { y: 1.19, i: "a", s: 323, z: 0, o: "33", f: "c" }, { y: 1.19, i: "b", s: 137, z: 0, o: "33", f: "c" }, { y: 1.19, i: "a", s: 68, z: 0, o: "32", f: "c" }, { y: 1.19, i: "e", s: 1, z: 0, o: "32", f: "c" }, { y: 1.21, i: "e", s: 1, z: 0, o: "33", f: "c" }, { y: 1.22, i: "b", s: 194, z: 0, o: "29", f: "c" }, { y: 1.22, i: "a", s: 705, z: 0, o: "29", f: "c" }, { y: 1.22, i: "e", s: 1, z: 0, o: "28", f: "c" }, { y: 1.26, i: "d", s: 349, z: 0, o: "28", f: "c" }, { y: 1.26, i: "c", s: 499, z: 0, o: "28", f: "c" }, { y: 1.26, i: "b", s: 345, z: 0, o: "28", f: "c" }, { y: 1.26, i: "a", s: 325, z: 0, o: "28", f: "c" }, { y: 1.26, i: "b", s: 48, z: 0, o: "32", f: "c" }, { y: 2.15, i: "b", s: 37, z: 0, o: "30", f: "c" }, { y: 2.15, i: "a", s: 0, z: 0, o: "30", f: "c" }, { y: 2.15, i: "e", s: 1, z: 0, o: "30", f: "c" }], f: 30, b: [] } }, bZ: 180, O: ["30", "32", "33", "29", "28", "34", "31", "27"], n: "Untitled Layout", "_": 0, v: { "34": { h: "17", p: "no-repeat", x: "visible", a: 10, dB: "img", q: "100% 100%", j: "absolute", r: "inline", z: 5, b: 393, k: "div", d: 140, c: 140, e: 0, f: -59 }, "29": { h: "13", p: "no-repeat", x: "visible", a: 796, dB: "img", q: "100% 100%", j: "absolute", r: "inline", z: 7, b: 210, k: "div", d: 87, c: 87, e: 0, f: 36 }, "32": { h: "19", p: "no-repeat", x: "visible", a: 65, dB: "img", q: "100% 100%", j: "absolute", r: "inline", z: 2, b: 61, k: "div", d: 326, c: 500, e: 0, f: -11 }, "27": { h: "15", p: "no-repeat", x: "visible", a: 728, q: "100% 100%", b: 607, j: "absolute", r: "inline", z: 8, dB: "img", k: "div", d: 86, c: 86, e: 0, f: 758, cW: { a: [{ p: 0 }] } }, "30": { h: "21", p: "no-repeat", x: "visible", a: -23, dB: "img", q: "100% 100%", j: "absolute", r: "inline", z: 9, b: -21, k: "div", d: 103, c: 103, e: 0 }, "33": { h: "9", p: "no-repeat", x: "visible", a: 326, q: "100% 100%", b: 126, j: "absolute", r: "inline", z: 3, dB: "img", k: "div", d: 331, c: 489, e: 0, f: 354, cW: { a: [{ b: "kTimelineDefaultIdentifier", p: 3, z: false, symbolOid: "2" }] } }, "28": { aD: { a: [{ p: 0 }] }, p: "no-repeat", x: "visible", h: "7", q: "100% 100%", a: 325, j: "absolute", r: "inline", b: 345, z: 4, dB: "img", d: 349, aA: { a: [{ p: 0 }] }, k: "div", bL: 0, e: 0, c: 499, f: 360, aP: "pointer" }, "31": { h: "11", p: "no-repeat", x: "visible", a: 178, dB: "img", q: "100% 100%", j: "absolute", r: "inline", z: 6, b: 508, k: "div", d: 226, c: 196, e: 0, f: -7 } } }], {}, h, {},
            (function(shouldShow, mainContentContainer) {
                var loadingPageID = mainContentContainer.id + "_loading";
                var loadingDiv = document.getElementById(loadingPageID);

                if (shouldShow == true) {
                    if (loadingDiv == null) {
                        loadingDiv = document.createElement("div");
                        loadingDiv.id = loadingPageID;
                        loadingDiv.style.cssText = "overflow:hidden;position:absolute;width:150px;top:40%;left:0;right:0;margin:auto;padding:2px;border:3px solid #BBB;background-color:#EEE;border-radius:10px;text-align:center;font-family:Helvetica,Sans-Serif;font-size:13px;font-weight:700;color:#AAA;z-index:100000;";
                        loadingDiv.innerHTML = "Loading";
                        mainContentContainer.appendChild(loadingDiv);
                    }

                    loadingDiv.style.display = "block";
                    loadingDiv.removeAttribute("aria-hidden");
                    mainContentContainer.setAttribute("aria-busy", true);
                } else {
                    loadingDiv.style.display = "none";
                    loadingDiv.setAttribute("aria-hidden", true);
                    mainContentContainer.removeAttribute("aria-busy");
                }
            })

            , false, false, -1, true, true, false, true, true);
        d[f] = c.API;
        document.getElementById(g).setAttribute("HYP_dn", f);
        c.z_o(this.body)
    })();
})();