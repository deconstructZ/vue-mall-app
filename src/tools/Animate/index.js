import Vue from "vue";
import comp from "./Animate.vue"
const Animate = Vue.extend(comp)
export default function ({
  startX,
  startY,
  endX,
  endY,
  imgWidth,
  imgHeight,
  src
}) {
  const app = new Animate({
    el: document.createElement("div"),
    data() {
      return {
        startX,
        startY,
        imgWidth,
        imgHeight,
        src,
        sX: 1,
        sY: 1,
        opacity: 1,
        exist: true
      }
    }
  })
  document.body.appendChild(app.$el)
  setTimeout(() => {
    app.startX = endX;
    app.startY = endY;
    app.sX = 0.1;
    app.sY = 0.1;
    app.opacity = 0
  }, 0);
  setTimeout(() => {
    app.exist = false
  }, 1100);
}
