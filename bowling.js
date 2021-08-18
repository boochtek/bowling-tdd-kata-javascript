export class Game {
  roll() {
  }

  get score() {
    return 0;
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
}
