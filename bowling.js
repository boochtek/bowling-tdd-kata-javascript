export class Game {
  constructor() {
    this.frames = [];
  }
  roll = (pinsKnockedDown) => {
    // NOTE: This can be combined with the next `if`.
    if ( this.frames.length == 0 ) {
      const frame = new Frame(pinsKnockedDown);
      this.frames.push(frame);
      return;
    }

    const lastFrame = this.frames[this.frames.length - 1];
    const secondLastFrame = this.frames[this.frames.length - 2];

    if ( lastFrame.isComplete() ) {
      const frame = new Frame(pinsKnockedDown);
      this.frames.push(frame);
    } else {
      lastFrame.roll(pinsKnockedDown);
    }

    if ( lastFrame && !lastFrame.isScoreComplete() ) {
      lastFrame.roll(pinsKnockedDown);
    }

    if ( secondLastFrame && !secondLastFrame.isScoreComplete() ) {
      secondLastFrame.roll(pinsKnockedDown);
    }
  }
  get score() {
    return this.frames.reduce((acc, frames) => {
      return acc + frames.score;
    }, 0);
  }
}

export class Frame {
  constructor(...rolls) {
    this.rolls = rolls
  }
  get score() {
    if ( this.isStrike() ) {
      return this.rolls[0] + (this.rolls?.[1] || 0) + (this.rolls?.[2] || 0)
    } else if ( this.isSpare() ) {
      return this.rolls[0] + this.rolls[1] + (this.rolls?.[2] || 0)
    } else {
      return this.rolls[0] + (this.rolls?.[1] || 0)
    }
  }
  isStrike = () => {
    return this.rolls[0] == 10;
  }
  isSpare = () => {
    return !this.isStrike() && (this.rolls[0] + (this.rolls?.[1] || 0) == 10)
  }
  isComplete = () => {
    return (this.isStrike() && this.rolls.length == 1) ||
           (this.isSpare() && this.rolls.length == 2) ||
            this.rolls.length == 2;
  }
  isScoreComplete = () => {
    if ( this.isStrike() || this.isSpare() ) {
      return this.rolls.length == 3;
    }
    return this.rolls.length == 2;
  }
  roll = (pinsKnockedDown) => {
    this.rolls.push(pinsKnockedDown);
  }
}