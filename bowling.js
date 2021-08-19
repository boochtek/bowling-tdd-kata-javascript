export class Game {
  constructor() {
    this.frames = [];
    this.frameNumber = 1;
  }

  roll(pins) {
    const frame = new Frame(pins);
    this.frames.push(frame)

    const previousFrame = this.frames[this.frameNumber - 2];
    const secondPreviousFrame = this.frames[this.frameNumber - 3];

    if ( previousFrame ) {
      previousFrame.roll(pins);
    }
    if ( secondPreviousFrame ) {
      secondPreviousFrame.roll(pins);
    }
    this.frameNumber = this.frameNumber + 1;
  }

  get score() {
    return this.frames.reduce((acc, frame) => {
      return acc + frame.score;
    }, 0);
  }
}


export class Frame {
  constructor(...rolls) {
    this.rolls = rolls
  }

  roll(pins) {
    this.rolls.push(pins)
  }

  get score() {
    return this.rolls[0] + (this.rolls[1] || 0) + (this.rolls[2] || 0);
  }
}
