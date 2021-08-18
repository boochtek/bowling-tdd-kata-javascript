//
// This is only a SKELETON file for the 'Bowling' kata tests.
// It's provided as a convenience to get you started writing code faster.
//

import { Game, Frame } from './bowling';


describe('Game', () => {
  describe('a game with no rolls', () => {
    let game = new Game();
    it ('scores 0 points', () => {
      expect(game.score).toEqual(0);
    })
  })

  describe('a game starting with 3 strikes', () => {
    let game = new Game();
    const rolls = [10, 10, 10];
    rolls.forEach((roll) => {
      game.roll(roll);
    });
    it ('scores 60 points', () => {
      expect(game.score).toEqual(60);
    })
  })

  describe('a game with no pins knocked down', () => {
    let game = new Game();
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    rolls.forEach((roll) => {
      game.roll(roll);
    });
    it ('scores 0 points', () => {
      expect(game.score).toEqual(0);
    })
  })

  describe('a perfect game', () => {
    let game = new Game();
    const rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    rolls.forEach((roll) => {
      game.roll(roll);
    });
    it ('scores 300 points', () => {
      expect(game.score).toEqual(300);
    })
  })
})

describe('Frame', () => {
  describe('a frame with a strike', () => {
    describe('and no following rolls', () => {
      let frame = new Frame(10);
      it ('is a strike', () => {
        expect(frame.isStrike()).toBe(true);
      })
      it ('is not a spare', () => {
        expect(frame.isSpare()).toBe(false);
      })
      it ('is a complete frame', () => {
        expect(frame.isComplete()).toBe(true);
      })
      it ('scores 10 points', () => {
        expect(frame.score).toEqual(10);
      })
      it ('has not been completely scored', () => {
        expect(frame.isScoreComplete()).toBe(false);
      })
    })
    describe('and 2 following rolls', () => {
      let frame = new Frame(10, 2, 9);
      it ('is a strike', () => {
        expect(frame.isStrike()).toBe(true);
      })
      it ('is not a spare', () => {
        expect(frame.isSpare()).toBe(false);
      })
      it ('scores 10 points, plus points for the following 2 rolls', () => {
        expect(frame.score).toEqual(10 + 2 + 9);
      })
      it ('has been completely scored', () => {
        expect(frame.isScoreComplete()).toBe(true);
      })
    })
  })
  describe('a frame with a spare', () => {
    describe('and no following rolls', () => {
      let frame = new Frame(5, 5);
      it ('is a spare', () => {
        expect(frame.isSpare()).toBe(true);
      })
      it ('is not a strike', () => {
        expect(frame.isStrike()).toBe(false);
      })
      it ('is a complete frame', () => {
        expect(frame.isComplete()).toBe(true);
      })
      it ('scores 10 points', () => {
        expect(frame.score).toEqual(10);
      })
      it ('has not been completely scored', () => {
        expect(frame.isScoreComplete()).toBe(false);
      })
    })
    describe('and 1 following roll', () => {
      let frame = new Frame(5, 5, 2);
      it ('is a spare', () => {
        expect(frame.isSpare()).toBe(true);
      })
      it ('is not a strike', () => {
        expect(frame.isStrike()).toBe(false);
      })
      it ('scores 10 points, plus the number of pins knocked down in the following roll', () => {
        expect(frame.score).toEqual(10 + 2);
      })
      it ('has been completely scored', () => {
        expect(frame.isScoreComplete()).toBe(true);
      })
    })
  })
  describe('an open frame with 1 roll', () => {
    let frame = new Frame(7);
    it ('is not a strike', () => {
      expect(frame.isStrike()).toBe(false);
    })
    it ('is not a spare', () => {
      expect(frame.isSpare()).toBe(false);
    })
    it ('is not a complete frame', () => {
      expect(frame.isComplete()).toBe(false);
    })
    it ('scores points for the number of pins knocked down in both rolls', () => {
      expect(frame.score).toEqual(7);
    })
    it ('has not been completely scored', () => {
      expect(frame.isScoreComplete()).toBe(false);
    })
  })
  describe('an open frame with 2 rolls', () => {
    let frame = new Frame(7, 2);
    it ('is not a strike', () => {
      expect(frame.isStrike()).toBe(false);
    })
    it ('is not a spare', () => {
      expect(frame.isSpare()).toBe(false);
    })
    it ('is a complete frame', () => {
      expect(frame.isComplete()).toBe(true);
    })
    it ('scores points for the number of pins knocked down in both rolls', () => {
      expect(frame.score).toEqual(7 + 2);
    })
    it ('has been completely scored', () => {
      expect(frame.isScoreComplete()).toBe(true);
    })
  });
});
