const setPosition = prevPosition => {
  return {
    x: prevPosition.x,
    y: prevPosition.y,
    z: prevPosition.z
  };
};

AFRAME.registerComponent("listener", {
  init: function() {
    this.target = document.querySelector("#target");
    this.prevPosition = null;
    //this.prevRotation = {x:0, y:0, z:0};
  },
  tick: function() {
    if (this.el.object3D.visible) {
      this.target.setAttribute("visible", "true");
      if (this.prevPosition) {
        this.target.object3D.position.lerp(setPosition(this.prevPosition), 0.1);
        //let rot = this.target.object3D.rotation.toVector3().lerp(this.prevRotation, 0.1)
        //this.target.object3D.rotation.setFromVector3(rot)
      } else {
        this.target.setAttribute("position", this.el.getAttribute("position"));
        //this.target.setAttribute('rotation', this.el.getAttribute('rotation'))
      }
      this.prevPosition = this.el.object3D.position;
      //this.prevRotation = this.el.object3D.rotation
    } else {
      this.target.setAttribute("visible", "false");
      this.prevPosition = null;
      //this.prevRotation = {x:0, y:0, z:0};
    }
  }
});

let prevScale = null;

AFRAME.registerComponent("hammer", {
  init: function() {
    var element = document.querySelector("body");
    this.marker = document.querySelector("a-marker");
    var model = document.querySelector("#target");
    var hammertime = new Hammer(element);
    var pinch = new Hammer.Pinch(); // Pinch is not by default in the recognisers
    hammertime.add(pinch); // add it to the Manager instance

    hammertime.on("pan", ev => {
      let rotationDelta = 2.5;
      let rotation = model.getAttribute("rotation");
      switch (ev.direction) {
        case 2:
          rotation.y = rotation.y - rotationDelta;
          break;
        case 4:
          rotation.y = rotation.y + rotationDelta;
          break;
        case 8:
          rotation.x = rotation.x - rotationDelta;
          break;
        case 16:
          rotation.x = rotation.x + rotationDelta;
          break;
        default:
          break;
      }
      setTimeout(() => {
        model.setAttribute("rotation", rotation);
      }, 5)
    });

    hammertime.on("pinch", ev => {
      setTimeout(() => {
        let scale = { x: ev.scale, y: ev.scale, z: ev.scale };
        if (prevScale) {
          model.setAttribute("scale", prevScale);
        } else {
          model.setAttribute("scale", scale);
        }
        prevScale = scale;
      }, 5)
    });
  }
});
