const videoEl = document.createElement("a-video");
const random = Math.floor(Math.random() * 100);
videoEl.setAttribute("src", `/assets/pepsivid.mp4?random=${random}`);
videoEl.setAttribute('id', 'video');
videoEl.setAttribute('autoplay', 'true');
videoEl.setAttribute('loop', 'false');
videoEl.setAttribute("width", "0.6");
videoEl.setAttribute("height", "0.3");
videoEl.setAttribute("position", "0 0 1");
videoEl.setAttribute("opacity", "1");
model.setAttribute("opacity", "0.6");
model.appendChild(videoEl);

const element =  document.querySelector('.social-btns')
element.classList.add('animated', 'bounce', 'infinite', 'fast');