export class Game {
  roll() {

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
