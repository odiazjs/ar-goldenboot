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
let cubeLights = null;

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
  cubeLights = document.querySelectorAll('a-entity[light]');
  cubeLights.forEach(light => {
    light.setAttribute('visible', false);
  })
  cubeLights[state.arrowsIndex].setAttribute('visible', true);
}

AFRAME.registerComponent("awake", {
  init: function() {
    spotLight = document.querySelector('#spot-light');
  },
  tick: function (deltaTime) {
    if (spotLight.object3D.position.x >= state.modelPositions[state.arrowsIndex]) {
      state.hasClicked = false
    }
    if (state.hasClicked) {
      console.log('arrow index - ', state.arrowsIndex);
    }
  }
});
