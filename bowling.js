export class Game {
  constructor() {
    this.frames = [];
  }

  roll(pins) {
    const frameNumber = this.frames.length + 1

    if ( frameNumber == 1 ) {
      const frame = new Frame(pins);
      this.frames.push(frame);
      return;
    }

    const lastFrame = this.frames[frameNumber - 2];
    if ( lastFrame.isComplete() ) {
      const frame = new Frame(pins);
      this.frames.push(frame);
    } else {
      const frame = new Frame(...lastFrame.rolls, pins);
      this.frames.pop();
      this.frames.push(frame);
    }

    if ( lastFrame && !lastFrame.isScoreComplete() ) {
      this.frames[frameNumber - 2] = new Frame(...lastFrame.rolls, pins);
    }

    const secondLastFrame = this.frames[frameNumber - 3];
    if ( secondLastFrame && !secondLastFrame.isScoreComplete() ) {
      this.frames[frameNumber - 3] = new Frame(...secondLastFrame.rolls, pins);
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
    this.rolls = rolls;
  }

  get score() {
    return this.rolls.reduce((acc, roll) => {
      return acc + roll;
    });
  }

  isComplete = () => {
    return (this.isStrike() && this.rolls.length >= 1) || this.rolls.length >= 2
  }

  isScoreComplete = () => {
    if ( this.isStrike() || this.isSpare() ) {
      return this.rolls.length == 3;
    }
    return this.rolls.length == 2;
  }

  isStrike = () => {
    return this.rolls[0] == 10;
  }

  isSpare = () => {
    return !this.isStrike() && (this.rolls[0] + (this.rolls[1] || 0) == 10);
  }

}
