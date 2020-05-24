// ==UserScript==
// @name         Instagram sign-in disable
// @namespace    http://tampermonkey.net/
// @version      1.2
// @date         2020-05-24
// @author       github.com/kiriles90
// @updateURL    https://raw.githubusercontent.com/kiriles90/Instagram-sign-in-disable/master/violentmonkey.js
// @downloadURL  https://raw.githubusercontent.com/kiriles90/Instagram-sign-in-disable/master/violentmonkey.js
// @run-at       document-idle
// @match        http://www.instagram.com/*
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    let observer = new MutationObserver((mutations) => {
        mutations.forEach((m) => {
            m.target.style.overflow = "scroll";
            if (document.querySelector("body > div.RnEpo._Yhr4")) {
                document.querySelector("body > div.RnEpo._Yhr4").remove();
            }
        });
    });
    observer.observe(document.querySelector("body"), {
        attributes: true,
    });
})();
