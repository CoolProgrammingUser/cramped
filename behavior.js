window.addEventListener("load", function() {
    document.body.appendChild(document.createElement("nav"));
    var file = new XMLHttpRequest();
    file.open("GET", "navigation.html", false);
    file.onreadystatechange = function () {
        if(file.readyState === 4) {
            if(file.status === 200 || file.status == 0) {
                document.getElementsByTagName("nav")[0].innerHTML = file.responseText;
            }
        }
    }
    file.send();
});
