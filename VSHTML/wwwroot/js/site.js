// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.addEventListener("DOMContentLoaded", function () {
    
    const textElement = document.getElementById('video-text');
    
    if (textElement) {
        
        textElement.style.opacity = "0";
        textElement.style.transition = "opacity 2s";
        
        setTimeout(() => {
            textElement.style.opacity = "1";
        }, 100);
    }
});