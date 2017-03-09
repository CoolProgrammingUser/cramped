// sets the options for the script import
var options = {
    "formatting" : "formatting.css",
    "icon" : "images/favicon.ico",
    "title" : "none",  // "~document.getElementsByTagName('h1')[0].innerHTML",
    "navigation" : "navigation.html"
};

(function() {
    // adds my standard script
    var script = document.createElement("script");
    script.src = "https://coolprogramminguser.github.io/Standards/behavior.js";
    document.head.insertBefore(script, document.head.childNodes[0]);
})();  // This is in a function, so I can use the variable "script" later if I want.

// makes the title of all the pages "Cramped"
document.head.insertBefore(document.createElement("title"), document.head.childNodes[0]);
document.getElementsByTagName("title")[0].innerHTML = "Cramped";
