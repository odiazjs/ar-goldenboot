if (state.hasClicked) {
    if (state.direction == 'right') {
      if (spotLight.object3D.position.x >= state.modelPositions[state.arrowsIndex]) {
        state.hasClicked = false
      } else {
        spotLight.object3D.position.x = spotLight.object3D.position.x + 0.01;
      }
    } else if (state.direction == 'left') {
      if (spotLight.object3D.position.x <= state.modelPositions[state.arrowsIndex]) {
        state.hasClicked = false
      } else {
        spotLight.object3D.position.x = spotLight.object3D.position.x - 0.01;
      }
    }
  }