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
  ],
  models: [],
  modelsInfo: [
    {
      title: 'CHAMPIONS CUP', 
      description: 'El Barcelona gana la Copa Champions League en el 2015, tras derrotar a Juventus 3 a 1, ' + 
        'con goles de Luis Suarez y Neymar.',
      statsImg: './assets/copa-champios.png'
    },
    {
      title: 'BOTINES DE INIESTA', 
      description: 'Con estos botines, Andres Iniesta anota en el minuto 94 para empatar con el Chelsea. ' + 
        'y asi seguir rumbo al titulo de la Champions.',
      statsImg: './assets/iniesta.png'
    },
    {
      title: 'CAMISA JOHAN CRUYFF', 
      description: 'La familia de Criuff dona su camisola con la que jugo en Barcelona en el año 1974',
      statsImg: './assets/Johan-Cruyff.png'
    },
    {
      title: 'BOTIN DE ORO', 
      description: 'El 6to que recibe Lionel Messi, tras anotar 36 goles en 34 partidos, superando a Mbappe con 34 goles.',
      statsImg: './assets/botin-de-oro.png'
    }
  ]
};

let spotLight = null;
let cubes = [];
let cubeLights = null;

const registerListeners = () => {
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

  // Set model info
  const modelInfoTitleEl = document.querySelector('#model-info-title');
  const modelInfoDescEl = document.querySelector('#model-info-desc');
  const modelInfo = state.modelsInfo[state.arrowsIndex];

  // Set model stats
  const modelImgEl = document.querySelector('#model-stats');
  modelImgEl.setAttribute('src', state.modelsInfo[state.arrowsIndex].statsImg);

  // animate.js
  models.forEach((model, index) => {
    model.removeAttribute('animation');
  })
  if (models[state.arrowsIndex]) {
    models[state.arrowsIndex].setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 10000')
  }

  modelInfoTitleEl.innerHTML = modelInfo.title;
  modelInfoDescEl.innerHTML = modelInfo.description;
}

AFRAME.registerComponent("interaction", {
  init: function() {
    registerListeners();
    spotLight = document.querySelector("#spot-light");
    cubes = document.querySelectorAll('a-entity[cube]');
    models = document.querySelectorAll('a-entity[model]');
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
