var stateInterval = null;

function hideDebugUI() {
  var debugContainer = document.querySelector('#arjsDebugUIContainer');
  var VR_Container = document.querySelector('.a-enter-vr');
  if (debugContainer) {
    debugContainer.style.display = 'none';
  }
  if (VR_Container) {
    VR_Container.style.display = 'none';
  }
}

function checkDomState () {
  if (document.readyState === "complete" || document.readyState === "interactive") {
      hideDebugUI();
      clearInterval(stateInterval);
  }
}

function docReady() {
  if (document.readyState === "loading") {
    stateInterval = setInterval(checkDomState, 3500);
  }
}

AFRAME.registerComponent('awake', {
  schema: {type: 'string'},

  init: function () {
    
  }
});

docReady();