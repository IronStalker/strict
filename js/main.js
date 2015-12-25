$('.fancybox').fancybox({
    padding: 0,
    minWidth: 740,

    openEffect: 'elastic',
    openSpeed: 150,

    closeEffect: 'elastic',
    closeSpeed: 150,

    helpers: {
        overlay: {
            locked: false,
            css: {
                'background-color': '255,255,255,.9)'
            }
        }
    }
});