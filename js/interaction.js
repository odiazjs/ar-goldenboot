let state = {
  totalModels: 4,
  arrowsIndex: 0,
  direction: '',
  hasClicked: false,
  modelPositions: [
    -0.8,
    -0.6,
    -0.4,
    -0.2
  ]
};

let spotLight = null;
let finalPosition = null;

export const registerListeners = () => {
  const arrowLeft = document.querySelector("#controls-arrow-left");
  const arrowRight = document.querySelector("#controls-arrow-right");
  arrowLeft.addEventListener('click', () => {
    handleArrowControls("left")
  });
  arrowRight.addEventListener('click', handleArrowControls.bind(null, "right"));
};

const handleArrowControls = direction => {
  switch (direction) {
    case "left":
      if (state.arrowsIndex === 0) {
        state.arrowsIndex = state.totalModels - 1;
      } else {
        state.arrowsIndex--;
      }
      break;
    case "right":
      if (state.arrowsIndex === state.totalModels - 1) {
        state.arrowsIndex = 0;
      } else {
        state.arrowsIndex++;
      }
      break;
  }
  resolveLightPosition(direction);
};

const resolveLightPosition = (direction) => {
  state.hasClicked = true;
  state.direction = direction;
  console.log(state.arrowsIndex);
  console.log(spotLight.object3D.position)
}

const getFinalPosition = () => {
  return {
    x: state.modelPositions[state.arrowsIndex],
    y: spotLight.object3D.position.y,
    z: spotLight.object3D.position.z
  }
}

AFRAME.registerComponent("awake", {
  init: function() {
    spotLight = document.querySelector('#spot-light');
  },
  tick: function (deltaTime) {
    console.log('spot light pos - ', spotLight.object3D.position.x);
    if (spotLight.object3D.position.x >= state.modelPositions[state.arrowsIndex]) {
      state.hasClicked = false
    }
    if (state.hasClicked) {
      spotLight.object3D.position.lerpVectors(spotLight.object3D.position, getFinalPosition(), 1.0)
    }
  }
});
