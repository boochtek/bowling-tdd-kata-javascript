export class Game {
  roll() {
  }

  get score() {
    return 0;
  }
}

export class Frame {
  constructor(roll) {
    this.roll = roll;
  }

  get score() {
    return this.roll;
  }
}
