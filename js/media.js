let videoEl = null;

const playVideo = (random) => {
    setTimeout(() => {
        videoEl.setAttribute("src", `./assets/videos/oro-intro.mp4?random=${random}`);
        videoEl.setAttribute('autoplay', 'true');
    }, 1000)    
}

AFRAME.registerComponent("media", {
    init: function() {
        videoEl = document.getElementById("oro-intro");
        const random = Math.floor(Math.random() * 100);
        playVideo(random)
    },
    tick: function() {
      
    }
  });