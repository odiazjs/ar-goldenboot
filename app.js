AFRAME.registerComponent("markerhandler", {
  init: function() {

    const aMarker = document.querySelector("a-marker");
    const model = document.querySelector("#model");
    const video = document.querySelector("#video");

    // every click, we make our model grow in size :)
    model.addEventListener("click", function(ev, target) {
      const intersectedElement = ev && ev.detail && ev.detail.intersection;
      var marker = document.querySelector("a-marker");

      if (marker.object3D && marker.object3D.visible == true && !document.querySelector("#video")) {
        const videoEl = document.createElement("a-video");
        const random = Math.floor(Math.random() * 100);
        videoEl.setAttribute("src", `/assets/pepsi-demo.mp4?random=${random}`);
        videoEl.setAttribute('id', 'video');
        videoEl.setAttribute('autoplay', 'true');
        videoEl.setAttribute('loop', 'false');
        videoEl.setAttribute("width", "0.6");
        videoEl.setAttribute("height", "0.3");
        videoEl.setAttribute("position", "0 0 1");
        videoEl.setAttribute("opacity", "1");
        model.setAttribute("opacity", "0.6");
        model.appendChild(videoEl);

        const element =  document.querySelector('.social-btns')
        element.classList.add('animated', 'bounce', 'infinite', 'fast');
      }

    });
  }
});

// AFRAME.registerComponent("videohandler", {
//   init: function() {
//     this.toggle = false;
//     video.pause(); //reference to the video
//   },
//   tick: function() {
//     if (aMarker.object3D.visible == true) {
//       if (!this.toggle) {
//         this.toggle = true;
//         video.play();
//       }
//     } else {
//       this.toggle = false;
//       video.pause();
//     }
//   }
// });
