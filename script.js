window.onload = function () {
    var classes = document.getElementsByClassName("code");

    for(var i=0; i<classes.length; i++) {
        var elem = classes[i];
        var src = elem.getAttribute("src");
        var xhr = new XMLHttpRequest();
        xhr.open("GET", src);
        xhr.send();

        xhr.onload = function() {
            elem.innerHTML = xhr.responseText;
        }
    }
}
