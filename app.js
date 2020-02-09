AFRAME.registerComponent("markerhandler", {
  init: function() {
    // setInterval(() => {
    //   var marker = document.querySelector("a-marker");
    //   if (marker.object3D && marker.object3D.visible == true) {
    //     console.log("marker found!");
    //   } else {
    //     console.log("marker lost!");
    //   }
    // }, 250);

    const aMarker = document.querySelector("a-marker");
    const model = document.querySelector("#model");
    const video = document.querySelector("#video");

    aMarker.addEventListener("click", ev => {
      console.log("click on model - ", ev);
    });

    // every click, we make our model grow in size :)
    model.addEventListener("click", function(ev, target) {
      const intersectedElement = ev && ev.detail && ev.detail.intersection;
      var marker = document.querySelector("a-marker");

      if (marker.object3D && marker.object3D.visible == true && !document.querySelector("#video")) {
        const videoEl = document.createElement("a-video");
        const random = Math.floor(Math.random() * 100);
        videoEl.setAttribute("src", `/assets/pepsi-demo.mp4?random=${random}`);
        videoEl.setAttribute('id', 'video');
        videoEl.setAttribute('autoplay', 'false');
        videoEl.setAttribute('loop', 'true');
        videoEl.setAttribute("width", "5");
        videoEl.setAttribute("height", "4");
        videoEl.setAttribute("position", "-1 1 10");
        videoEl.setAttribute("opacity", "1");
        model.appendChild(videoEl);
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
