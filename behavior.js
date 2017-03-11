// sets the options for the script import
var options = {
    "formatting" : "formatting.css",
    "icon" : "images/favicon.ico",
    "title" : "~document.getElementsByTagName('h1')[0].innerHTML",
    "navigation" : "navigation.html"
};

(function() {
    // adds my standard script
    var script = document.createElement("script");
    script.src = "https://coolprogramminguser.github.io/Standards/behavior.js";
    document.head.insertBefore(script, document.head.getElementsByTagName("script")[0].nextSibling);
})();  // This is in a function, so I can use the variable "script" later if I want.

// makes the title of all the pages "Cramped"
document.head.insertBefore(document.createElement("title"), document.head.childNodes[0]);
document.getElementsByTagName("title")[0].innerHTML = "Cramped";

//holds the cursor position
var cursor = {"x":"-20", "y":"-20"};

window.addEventListener("finished", function() {
    // makes a bunch of my faces follow the cursor
    var faceArray = [
        document.createElement("div"),
        document.createElement("div"),
        document.createElement("div"),
        document.createElement("div"),
        document.createElement("div")
        ];
    faceArray.forEach(function(face) {
        face.style.width = "2em";
        face.style.height = "2em";
        face.style.backgroundImage = "url('images/Me in a Nutshell.png')";
        face.style.backgroundSize = "cover";
        face.style.position = "absolute";
        face.style.left = "-20";
        face.style.top = "-20";
        document.body.appendChild(face);
    });
    document.addEventListener("mousemove", function(event) {
        cursor.x = event.pageX;
        cursor.y = event.pageY;
    });
    setInterval(function() {
        faceArray.forEach(function(face, index) {
            face.style.left = (cursor.x-face.style.left)/(index*10);
            face.style.top = (cursor.y-face.style.top)/(index*10);
        });
    }, 20);
});
