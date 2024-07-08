// ==UserScript==
// @name         Remove ADS Tokopedia
// @namespace    https://github.com/preschian
// @version      0.2
// @description  remove topads in tokopedia search results page
// @license      MIT
// @author       Preschian F.
// @match        https://tokopedia.com/*
// @match        https://www.tokopedia.com/*
// @run-at       document-end
// @icon         https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/icon144.png
// @grant        none
// @updateURL    https://raw.githubusercontent.com/preschian/tokped-mod/main/apps/remove-topads/remove-topads.js
// @downloadURL  https://raw.githubusercontent.com/preschian/tokped-mod/main/apps/remove-topads/remove-topads.js
// @supportURL   https://github.com/preschian/tokped-mod/issues
// ==/UserScript==

(function () {
	"use strict";

	function removeAds() {
		var spanTags = document.getElementsByTagName("span");
		var searchText = "Ad";
		var matchingSpans = [];

		for (const span of spanTags) {
			if (span.textContent.includes(searchText)) {
				matchingSpans.push(span);
			}
		}

		matchingSpans.forEach((elm) => {
			elm.closest('[data-theme="default"]').parentElement.remove();
		});

		setTimeout(removeAds, 250);
	}

	removeAds();
})();

