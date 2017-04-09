// Auto-height for textarea
var observe;
if (window.attachEvent) {
    observe = function (element, event, handler) {
        element.attachEvent('on' + event, handler);
    };
}
else {
    observe = function (element, event, handler) {
        element.addEventListener(event, handler, false);
    };
}
textAreaInit = function () {
    var text = document.getElementById('input-msg');
    var area = document.getElementById('input-area');
    var list = document.getElementById('messages-list');
    function resize () {
        text.style.height = 'auto';
        text.style.height = text.scrollHeight + 'px';
        if (text.scrollHeight < 162) {
            list.style.bottom = area.style.height = 48 + text.scrollHeight + 'px';
        }
        if (text.offsetHeight < 144) {
            text.style.overflow = 'hidden'
        } else {
            text.style.overflow = 'auto'
        }
    }
    /* 0-timeout to get the already changed text */
    function delayedResize () {
        window.setTimeout(resize, 0);
    }
    observe(text, 'change', resize);
    observe(text, 'cut', delayedResize);
    observe(text, 'paste', delayedResize);
    observe(text, 'drop', delayedResize);
    observe(text, 'keydown', delayedResize);

    text.focus();
    text.select();
    resize();
};
