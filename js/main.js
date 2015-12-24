/*$(document).ready(function () {
 $(".popup").fancybox({
 'autoSize': false,
 'width': 800,
 helpers: {
 overlay: {
 locked: false,
 css: {
 background: 'rgba(255,255,255,.9)'
 }
 }
 }
 });
 });*/

$('.popup').fancybox({
    padding: 0,
    minWidth: 900,
    maxHeight: 600,

    openEffect: 'elastic',
    openSpeed: 150,

    closeEffect: 'elastic',
    closeSpeed: 150,

    fitToView: false,
    width: '100%',
    height: '100%',
    autoSize: false,
    closeClick: false,

    helpers: {
        title: {
            type: 'inside'
        },
        overlay: {
            css: {
                'background': '255,255,255,.9)'
            }
        }
    }
});