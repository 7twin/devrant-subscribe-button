// ==UserScript==
// @name         Devrant Subscribe Button
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Add a button to subscribe to rant comments
// @author       7twin
// @match        https://devrant.com/rants/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle("#subscribe-bttn {opacity: 0.7;margin-left:10px;} #subscribe-bttn:hover { opacity: 1; }");
    $(".rant-extras:first").html($(".rant-extras:first").html() + '<a href="#" class="rantlist-footer-link" id="subscribe-bttn">Subscribe</a>');
    $("#subscribe-bttn").on("click",function(e){
        e.preventDefault();
        $(".comment-text-input:first").val("📌 Subscribing to the comments");
        $(".btn-post-comment:first").click();
    });
})();
