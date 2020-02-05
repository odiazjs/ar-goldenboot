(function () {
    function docReady(fn) {
        // see if DOM is already available
        if (document.readyState === "loading" || document.readyState === "interactive") {
            // call on next available tick
            setTimeout(fn, 250);
        } else {
            document.addEventListener("DOMContentLoaded", fn);
        }
    }
    docReady(function () {
        // DOM is loaded and ready for manipulation here
        //var canvas = document.getElementById('p5canvas');
        //canvas.style.display = 'none';

        //Take photo flow
        let video = document.getElementById('video');
        video.addEventListener('click', (ev) => {
            console.log(ev)
        })
    });
})();