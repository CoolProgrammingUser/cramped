function pageJump(ID) {
    /*
    makes a section to jump to certain parts of the page
    */
    document.getElementsByTagName("h1")[0].id = "top";
    var division = document.getElementById(ID);
    var contents = document.createElement("div");
    contents.innerHTML = "<br><h2>Jump to:</h2>";
    var sections = division.getElementsByTagName("h2");
    var toTop = document.createElement("a");
    toTop.href = "#top";
    toTop.innerHTML = "To top";
    for (var index=0; index<sections.length; index++) {  // I would use (var in array), but index exceeds entries.length for no apparent reason
        var inside = sections[index].innerHTML.trim();  // The inner HTML has a bunch of whitespace for no apparent reason.
        sections[index].id = inside;
        contents.innerHTML += "<p><a href='#" + inside + "'>" + inside + "</a></p>";
        division.insertBefore(toTop.cloneNode(true), division.getElementsByTagName("h2")[index].nextSibling);  // inserts after <h2>
        // toTop needs to be cloned so it doesn't keep getting reasigned to the next place (it also needs to have true to clone all children of the node, although it doesn't apply here)
    }
    contents.innerHTML += "<br>";
    document.body.insertBefore(contents, division);  // .insertBefore() only works for the immediate descendants of the parent
}

window.addEventListener("load", function() {
    // makes the title of all the pages "Cramped"
    document.head.insertBefore(document.createElement("title"), document.head.childNodes[0]);
    document.getElementsByTagName("title")[0].innerHTML = "Cramped";
    // adds the navigation section to all the pages
    document.body.insertBefore(document.createElement("nav"), document.body.childNodes[0]);
    var file = new XMLHttpRequest();
    file.open("GET", "navigation.html");  // Don't add false as an extra argument (browsers don't like it). (default: asynchronous=true)
    file.onreadystatechange = function () {
        if(file.readyState === 4) {
            if(file.status === 200 || file.status == 0) {
                document.getElementsByTagName("nav")[0].innerHTML = file.responseText;
            }
        }
    }
    file.send();
});
