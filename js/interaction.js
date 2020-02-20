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
  