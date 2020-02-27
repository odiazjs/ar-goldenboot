let videoEl = null;

const playVideo = (random, src) => {
    setTimeout(() => {
        videoEl.setAttribute("src", `${src}?${random}`);
        videoEl.setAttribute('autoplay', 'true');
    }, 500)
}

AFRAME.registerComponent("media", {
    init: function () {
        videoEl = document.getElementById("oro-intro");
        const random = Math.floor(Math.random() * 10000);
        playVideo(random, './assets/videos/oro-intro.mp4')
    },
    tick: function () {

    }
});

AFRAME.registerComponent("media2", {
    init: function () {
        videoEl = document.getElementById("iniesta-gol");
        const random = Math.floor(Math.random() * 10000);
        playVideo(random, './assets/videos/iniesta-gol.mp4')
    },
    tick: function () {

    }
});