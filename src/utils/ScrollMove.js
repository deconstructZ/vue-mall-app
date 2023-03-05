export function ScrollMoveTo(start, end, dom, type) {
  let speed = 5
  let totalDis = 0
  if (end < 0) {
    speed = -5
  }
  let t = setInterval(() => {
    totalDis += speed
    dom[type] = start + totalDis
    if (Math.abs(totalDis) > Math.abs(end)) {
      //运动过了直接过去
      dom[type] = start + end
      //清除计时器
      clearInterval(t)
    }
  }, 3);
}
