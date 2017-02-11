HTMLCollection.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.forEach = Array.prototype.forEach;

function read(URL, callback) {
    /**
    reads the contents of the file at the URL,
    converts it into a string,
    puts the string into a <div>, and then
    calls the callback function (which has no arguments)
    with "this" equalling the <div>
    */
    var file = new XMLHttpRequest();
    file.open("GET", URL);  // Don't add false as an extra argument (browsers don't like it). (default: asynchronous=true)
    file.onreadystatechange = function () {
        if(file.readyState === 4) {  // Is it done?
            if(file.status === 200 || file.status == 0) {  // Was it successful?
                // file.responseXML might have something
                var container = document.createElement("div");
                container.innerHTML = file.responseText;
                /*
                var tags = container.children;
                for (var index=0; index<tags.length; index++) {
                    var tag = document.createElement(tags[index].tagName);
                    if (tag.tagName != "script") {
                        tag.appendChild(document.createTextNode(tags[index].innerHTML));
                        container.insertBefore(tag, tags[index]);
                        tags[index+1].outerHTML = "";
                    }
                }
                */
                // This is necessary because HTML5 doesn't think script tags and innerHTML should go together (for security reasons).
                var scripts = file.responseText.split("<script");
                if (scripts.length > 1) {
                    scripts.forEach(function(script, index) {
                        if (index > 0) {
                            var scriptTag = document.createElement("script");
                            scriptTag.appendChild(document.createTextNode(script.slice(script.indexOf(">")+1, script.indexOf("</script>"))));
                            container.insertBefore(scriptTag, container.getElementsByTagName("script")[index-1]);
                            var oldTag = container.getElementsByTagName("script")[index];
                            oldTag.parentNode.removeChild(oldTag);
                        }
                    });
                }
                callback.call(container);  // .call(calling object / value of "this", function arguments (listed individually))  .apply has function arguments in an array
                // You could also use callback(argument(s)) like a normal function, but it wouldn't change the value of "this".
            }
        }
    }
    file.send();
}

function pageJump(ID) {
    /**
    makes a section to jump to certain parts of the page
    */
    document.getElementsByTagName("h1")[0].id = "top";
    var division = document.getElementById(ID);
    var contents = document.createElement("div");
    contents.className = "list";
    contents.style = "margin: 2em; padding: 0em 1em 1em 0em; background: rgba(255,255,255,.5);";
    contents.innerHTML = "<h2 style='text-align:center;'>Jump to:</h2>";
    var sections = division.getElementsByTagName("h2");
    var toTop = document.createElement("a");
    toTop.href = "#top";
    toTop.innerHTML = "To top";
    var listItems = "";  // I need this variable to hold the list items because trying to add <ul> at the beginning and </ul> at the end separately causes it to fill in the </ul> immediately after the <ul> and omit the real </ul>
    for (var index=0; index<sections.length; index++) {  // I would use (var in array), but index exceeds entries.length for no apparent reason
        var inside = sections[index].innerHTML.trim();  // The inner HTML has a bunch of whitespace for no apparent reason.
        sections[index].id = inside;
        listItems += "<li><a href='#" + inside + "'>" + inside + "</a></li>";
        division.insertBefore(toTop.cloneNode(true), division.getElementsByTagName("h2")[index].nextSibling);  // inserts after <h2>
        // toTop needs to be cloned so it doesn't keep getting reasigned to the next place (it also needs to have true to clone all children of the node, although it doesn't apply here)
    }
    contents.innerHTML += "<ol style='visibility:visible'>" + listItems + "</ol>";
    division.parentNode.insertBefore(contents, division);  // .insertBefore() only works for the immediate descendants of the parent
}

//This is able to run without waiting for anything else to load.

// makes my custom tag which underlines things
document.createElement("under");
// makes my custom tag which overlines things
document.createElement("over");

// adds the universal formatting
var style = document.createElement("link");
style.rel = "stylesheet";
style.href = "formatting.css";
document.head.insertBefore(style, document.head.children[0]);

// makes the title of all the pages "Cramped"
document.head.insertBefore(document.createElement("title"), document.head.childNodes[0]);
document.getElementsByTagName("title")[0].innerHTML = "Cramped";

// links the favicon
var icon = document.createElement("link");
icon.rel = "icon";
icon.href = "images/favicon.ico";
document.head.insertBefore(icon, document.head.children[0]);

window.addEventListener("load", function() {  // This waits for everything past the script import to load before running.
    
    // surrounds the <body> content with a <section> tag
    document.body.innerHTML = "<h1>" + document.getElementsByTagName("h1")[0].innerHTML + "</h1>" + "<section>" + document.body.innerHTML.slice(document.body.innerHTML.indexOf("</h1>")+5) + "</section>";
    
    // adds the navigation section to all the pages
    read("navigation.html", function() {
        this.className = "nav";
        document.body.insertBefore(this, document.body.childNodes[0]);
    });
     
    // surrounds every list with <div class="list"></div>
    var orderedLists = document.getElementsByTagName("ol");
    var unorderedLists = document.getElementsByTagName("ul");
    for (var index=0; index<orderedLists.length; index++) {
        orderedLists[index].outerHTML = "<div class='list'>" + orderedLists[index].outerHTML + "</div>";
        orderedLists[index].style.visibility = "visible";
    }
    for (var index=0; index<unorderedLists.length; index++) {
        unorderedLists[index].outerHTML = "<div class='list'>" + unorderedLists[index].outerHTML + "</div>";
        unorderedLists[index].style.visibility = "visible";
    }
    
    // interprets condensed tables
    var tables = document.getElementsByClassName("compact");
    for (var counter=0; counter<tables.length; counter++) {
        var table = tables[counter];
        /*
        var elements = table.getElementsByTagName("th");
        var headings = [];
        for (var index=0; index<elements.length; index++) {
            headings.push(elements[index]);
        }
        // var initialLength = headings.length;  // The for loop needs this because headings.length would update with the current length every time the for loop ran again.
        for (var index=0; index<headings.length; index++) {
            var parent = headings[index].parentNode;
            var newHeadings = headings[index].innerHTML.split("|");
            parent.removeChild(headings[index]);
            newHeadings.forEach(function(heading) {
                parent.innerHTML += "<th>" + heading.trim() + "</th>";
            });
        }
        */
        table.getElementsByTagName("th").forEach(function(thList) {
            var parent = thList.parentNode;
            var newHeadings = thList.innerHTML.split("|");
            parent.removeChild(thList);
            newHeadings.forEach(function(heading) {
                parent.innerHTML += "<th>" + heading.trim() + "</th>";
            });
        });
        /*
        elements = table.getElementsByTagName("td");
        var data = [];
        for (var index=0; index<elements.length; index++) {
            data.push(elements[index]);
        }
        // initialLength = data.length;  // same as for headings.length
        for (var index=0; index<data.length; index++) {
            var parent = data[index].parentNode;
            var newData = data[index].innerHTML.split("|");
            parent.removeChild(data[index]);
            newData.forEach(function(item) {
                parent.innerHTML += "<td>" + item.trim() + "</td>";
            });
        }
        */
        table.getElementsByTagName("td").forEach(function(tdList) {
            var parent = tdList.parentNode;
            var newData = tdList.innerHTML.split("|");
            parent.removeChild(tdList);
            newData.forEach(function(data) {
                parent.innerHTML += "<td>" + data.trim() + "</td>";
            });
        });
        table.style.visibility = "visible";
    }
});

// remember new Function() and new Event() / new CustomEvent()
