var scroll = window.requestAnimationFrame || function(callback) {
    window.setTimeout(callback, 1000/60);
}
var elementToShow = document.querySelectorAll('.visible-element');
function loop() {
    Array.prototype.forEach.call(elementToShow, function(element) {
        if (isElementViewPort(element)) {
            element.classList.add('visible');
        }
        else {
            element.classList.remove('visible');
        }
    })
    scroll(loop);
}
loop();
function isElementViewPort(el) {
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= window.innerHeight || document.documentElement.clientHeight) ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}