const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector(".dial circle");
const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);
let duration;
const timerObj = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
    console.log("Timer started.");
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
    console.log("Time ticking.");
  },
  onComplete(timeRemaining) {
    if (timeRemaining > 0) {
      console.log("Time Stopped.");
    } else if (timeRemaining === 0) {
      console.log("Time finished.");
    }
  }
});
