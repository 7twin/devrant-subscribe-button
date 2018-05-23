// ==UserScript==
// @name         Devrant Subscribe Button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add a button to subscribe to rant comments
// @author       7twin
// @match        https://devrant.com/rants/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $(".rant-extras:first").html($(".rant-extras:first").html() + '<a href="#" class="rantlist-footer-link" id="subscribe-bttn" style="margin-left:10px;">Subscribe</a>');
    $("#subscribe-bttn").on("click",function(e){
        e.preventDefault();
        $(".comment-text-input:first").val("📌 Subscribing to the comments");
        $(".btn-post-comment:first").click();
    });
})();
