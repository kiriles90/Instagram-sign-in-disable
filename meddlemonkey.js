// ==UserScript==
// @name         Instagram sign-in disable
// @namespace    http://tampermonkey.net/
// @version      1.1
// @date         2020-01-22
// @author       github.com/kiriles90
// @updateURL    https://raw.githubusercontent.com/kiriles90/Instagram-sign-in-disable/master/meddlemonkey.js
// @downloadURL  https://raw.githubusercontent.com/kiriles90/Instagram-sign-in-disable/master/meddlemonkey.js
// @run-at       document-idle
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    let observer = new MutationObserver((mutations) => {
        mutations.forEach((m) => {
            m.target.style.overflow = "scroll";
            if (document.querySelector("body > div.RnEpo.Yx5HN")) {
                document.querySelector("body > div.RnEpo.Yx5HN").remove();
            }
        });
    });
    observer.observe(document.querySelector("body"), {
        attributes: true,
    });
})();
