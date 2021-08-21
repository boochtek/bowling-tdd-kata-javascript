export class Game {
  constructor() {
    this.frames = [];
    this.frameNumber = 1;
  }

  roll(pins) {
    let frame = this.frames[this.frameNumber - 1];
    if ( frame ) {
      frame.roll(pins);
    } else {
      frame = new Frame(pins);
      this.frames.push(frame);
    }

    const previousFrame = this.frames[this.frameNumber - 2];
    const secondPreviousFrame = this.frames[this.frameNumber - 3];

    if ( previousFrame && !previousFrame.isScoreCompleted ) {
      previousFrame.roll(pins);
    }
    if ( secondPreviousFrame && !secondPreviousFrame.isScoreCompleted ) {
      secondPreviousFrame.roll(pins);
    }

    if ( frame.isComplete ) {
      this.frameNumber = this.frameNumber + 1;
    }
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

  get isComplete() {
    if ( this.isStrike ) {
      return this.rolls.length >= 1;
    } else {
      return this.rolls.length >= 2;
    }
  }

  get isScoreComplete() {
    if ( this.isSpare || this.isStrike ) {
      return this.rolls.length >= 3
    } else {
      return this.rolls.length >= 2
    }
  }

  get isStrike() {
    return this.rolls[0] == 10;
  }

  get isSpare() {
    return this.rolls[0] + (this.rolls[1] || 0) == 10;
  }
}
