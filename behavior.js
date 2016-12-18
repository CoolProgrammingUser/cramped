window.addEventListener("load", function() {
    // makes the title of all the pages "Cramped"
    document.head.insertBefore(document.createElement("title"), document.head.childNodes[0]);
    document.getElementsByTagName("title")[0].innerHTML = "Cramped";
    // adds the navigation section to all the pages
    document.body.insertBefore(document.createElement("nav"), document.body.childNodes[0]);
    var file = new XMLHttpRequest();
    file.open("GET", "navigation.html");
    file.onreadystatechange = function () {
        if(file.readyState === 4) {
            if(file.status === 200 || file.status == 0) {
                document.getElementsByTagName("nav")[0].innerHTML = file.responseText;
            }
        }
    }
    file.send();
});
