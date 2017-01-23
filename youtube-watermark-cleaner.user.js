// ==UserScript==
// @name         YouTube watermark cleaner
// @version      0.1
// @description  removes channel watermark from YouTube web player
// @author       disrupted
// @match        *://www.youtube.com/watch*
// @grant        none
// ==/UserScript==

var initialDelay = 500; // adjust to make it work with all websites
// =================================================================

(function() {
  'use strict';
  var counter = 0;
  window.addEventListener('load', function() {
    setTimeout(function() {
      var channelWatermark = document.getElementsByClassName('annotation annotation-type-custom iv-branding');
      for (var i = 0; i < channelWatermark.length; i++) {
        channelWatermark[i].style.display = "none";
        counter++;
      }
      if (counter !== 0) {
        console.log('[Userjs] found & removed YouTube player watermark – ' + counter + ' element(s)');
      }
    }, initialDelay);
  }, false);
})();
