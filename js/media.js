let videoEl = null;

const playVideo = (random) => {
    videoEl.setAttribute("src", `/assets/videos/oro-intro.mp4?random=${random}`);
    videoEl.setAttribute('id', 'oro-intro');
    videoEl.setAttribute('autoplay', 'true');    
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