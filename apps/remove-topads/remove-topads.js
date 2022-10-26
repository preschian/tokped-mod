// ==UserScript==
// @name         Remove ADS Tokopedia
// @namespace    https://github.com/preschian
// @version      0.1
// @description  remove topads in tokopedia search results page
// @license      MIT
// @author       Preschian F.
// @match        https://tokopedia.com/*
// @match        https://www.tokopedia.com/*
// @run-at       document-end
// @icon         https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/icon144.png
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  function removeAds() {
    const ads = document.querySelectorAll('[data-testid="divSRPTopadsIcon"]');

    ads.forEach((elm) => {
      elm.closest('[data-testid="divProductWrapper"]').remove();
    });

    setTimeout(removeAds, 250);
  }

  removeAds();
})();
