class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.startcheck = 0;
    this.startButton.addEventListener("click", () => {
      if (!this.startcheck) {
        this.start();
      }
    });
    this.pauseButton.addEventListener("click", () => {
      if (this.startcheck) {
        this.pause();
      }
    });
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }
  }

  start = () => {
    if (!isNaN(this.durationInput.value)) {
      if (this.onStart) {
        this.onStart(this.timeRemaining);
      }
      this.interval = setInterval(this.tick, 10);
      this.startcheck = 1;
    } else {
      console.log("Invalid entry");
    }
  };
  pause = () => {
    if (this.onComplete) {
      this.onComplete(this.timeRemaining);
    }
    clearInterval(this.interval);
    this.startcheck = 0;
  };
  tick = () => {
    if (this.onTick) {
      this.onTick(this.timeRemaining);
    }
    if (this.timeRemaining <= 0) {
      this.pause();
    } else {
      this.timeRemaining = this.timeRemaining - 0.01;
    }
  };
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
