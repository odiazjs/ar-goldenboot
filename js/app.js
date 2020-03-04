var stateInterval = null;

function init() {
  // Get Query Params
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  const airplaneMode = urlParams.get('airplane_mode');
  console('token is - ', token)
  console('airplane_mode is - ', airplaneMode)
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

function checkDomState() {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    init();
    clearInterval(stateInterval);
  }
}

function docReady() {
  if (document.readyState === "loading") {
    stateInterval = setInterval(checkDomState, 250);
  } else if (document.readyState === "complete" || document.readyState === "interactive") {
    stateInterval = setInterval(checkDomState, 250);
  }
}

docReady();