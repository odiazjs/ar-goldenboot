import * as Interaction from './interaction.js';

var stateInterval = null;

function init () {
  hideDebugUI();
  Interaction.registerListeners();
  // Video
  const videoEl = document.getElementById("oro-intro");
  const random = Math.floor(Math.random() * 100);
  videoEl.setAttribute("src", `/assets/videos/oro-intro.mp4?random=${random}`);
  videoEl.setAttribute('id', 'oro-intro');
  videoEl.setAttribute('autoplay', 'true');
}

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
    init();
    clearInterval(stateInterval);
  }
}

function docReady() {
  if (document.readyState === "loading") {
    stateInterval = setInterval(checkDomState, 1000);
  } else if (document.readyState === "complete" || document.readyState === "interactive") {
    stateInterval = setInterval(checkDomState, 1000);
  }
}

docReady();