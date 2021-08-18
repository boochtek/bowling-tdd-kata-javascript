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
