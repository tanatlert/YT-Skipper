// ==UserScript==
// @name         !YT skipper
// @namespace    https://github.com/tanatlert/YT-Skipper
// @version      4.1.3
// @description  Multi-function YouTube Ad-Skipper
// @author       coder369
// @match        *://*.youtube.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

function clickMute() { document.getElementsByClassName( "ytp-mute-button" )[0].click(); }

setInterval(function(){
    if(document.getElementsByClassName("ytp-ad-overlay-container").length > 0){ //remove overlay ads
        document.getElementsByClassName("ytp-ad-overlay-container")[0].remove();
    }
    if(document.getElementsByClassName("ytp-ad-skip-button-container").length > 0){ //remove video ads
        document.getElementsByClassName("ytp-ad-skip-button-container")[0].click();
    }
    if(document.getElementsByClassName("style-scope ytd-mealbar-promo-renderer style-text size-default").length > 0){ //remove promotion
        document.getElementsByClassName("style-scope ytd-mealbar-promo-renderer style-text size-default")[0].click();
    }
    if(document.getElementsByClassName("style-scope yt-mealbar-promo-renderer").length > 0){
        document.getElementsByClassName("style-scope yt-mealbar-promo-renderer")[0].remove();
    }
    //if(document.getElementsByClassName('style-scope ytd-player-legacy-desktop-watch-ads-renderer').length > 0){ //remove panel ads
    //     document.getElementsByClassName('style-scope ytd-popup-container')[0].remove();
//}
    if((document.getElementsByClassName("ytp-ad-player-overlay-skip-or-preview").length > 0) || (document.getElementsByClassName("ytp-ad-preview-container").length > 0) || (document.getElementsByClassName("ytp-ad-text ytp-ad-preview-text").length > 0)){ //mute and speed up ads
        clickMute();
        var v = document.querySelector('video'); var t = 16; v.playbackRate = parseFloat(t);
        setTimeout(function() {clickMute()}, 1000);
    }
     if(document.getElementsByClassName('style-scope ytd-item-section-renderer sparkles-light-cta').length > 0){ //remove panel ads2
        document.getElementsByClassName('style-scope ytd-item-section-renderer sparkles-light-cta')[0].remove()
    }
},1000);






//Close popup ads
//setInterval(function() { document.getElementsByClassName("ytp-ad-overlay-container")[0].remove(); }, 5000);
//Skip video ads
//setInterval(function() { document.getElementsByClassName("ytp-ad-skip-button-container")[0].click(); }, 5000);
//Close YouTube Premium/Music trial offer
//setInterval(function() { document.getElementsByClassName("style-scope ytd-mealbar-promo-renderer style-text size-default")[0].click(); }, 5000);
//javascript: var v = document.querySelector('video'); var t = 16; v.playbackRate = parseFloat(t)





