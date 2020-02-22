let state = {
  totalModels: 4,
  arrowsIndex: 0,
  direction: '',
  hasClicked: false,
  showCasePos: {
    x: 1.75,
    y: 2,
    z: 9
  },
  cubesInitialPos: [
    {x: 0, y: 0, z: 0.065},
    {x: -0.013, y: 0, z: 0.065},
    {x: -0.00784, y: 0, z: 0.065},
    {x: -0.06673, y: 0, z: 0.065},
  ]
};

let spotLight = null;
let cubes = [];
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

  cubes.forEach((cube, index) => {
    cube.setAttribute('position', state.cubesInitialPos[index]);
  })
}

AFRAME.registerComponent("awake", {
  init: function() {
    spotLight = document.querySelector("#spot-light");
    cubes = document.querySelectorAll('a-entity[cube]');
  },
  tick: function() {
    if (cubes[state.arrowsIndex].object3D.position.z === state.showCasePos.z) {
      state.hasClicked = false
    }
    if (state.hasClicked) {
      cubes[state.arrowsIndex].object3D.position.lerp({
        x: state.showCasePos.x - (state.arrowsIndex * 1.2),
        y: state.showCasePos.y,
        z: state.showCasePos.z
      }, 0.1);
    }
  }
});
